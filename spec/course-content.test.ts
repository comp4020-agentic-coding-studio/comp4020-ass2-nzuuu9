import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// The mid-semester break stated on the homepage and in week 5/6's session
// content: no teaching happens between these two dates (inclusive).
const BREAK_START = "2027-03-23";
const BREAK_END = "2027-04-11";

function readMarkdownFiles(dir: string): { name: string; body: string }[] {
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((name) => ({ name, body: readFileSync(resolve(dir, name), "utf8") }));
}

describe("assessment weights", () => {
  it("sum to exactly 100 across the assessments collection", () => {
    const assessments = api.nodes.filter((node) => node.type === "assessments");
    expect(assessments.length, "no assessments found").toBeGreaterThan(0);
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });
});

describe("lecture deck", () => {
  it("has at least one lecture with a slides field that resolves to a built deck", () => {
    const withSlides = api.nodes.filter(
      (node) => node.type === "lectures" && typeof node.meta?.slides === "string",
    );
    expect(withSlides.length, "no lecture declares a slides field").toBeGreaterThan(0);

    const resolvable = withSlides.filter((node) => {
      const slides = node.meta?.slides as string;
      return existsSync(resolve("dist", `.${slides}index.html`));
    });
    expect(
      resolvable.length,
      "no lecture's slides field resolves to a built deck page",
    ).toBeGreaterThan(0);
  });
});

describe("teaching calendar", () => {
  it("keeps sessions and lectures out of the mid-semester break window", () => {
    const dated = api.nodes.filter((node) => node.type === "sessions" || node.type === "lectures");
    for (const node of dated) {
      const date = String(node.meta?.date).slice(0, 10);
      const inBreak = date >= BREAK_START && date <= BREAK_END;
      expect(inBreak, `${node.id} is dated ${date}, inside the mid-semester break`).toBe(false);
    }
  });

  it("numbers sessions 1 through 12 with strictly increasing dates", () => {
    const sessions = api.nodes
      .filter((node) => node.type === "sessions")
      .map((node) => ({ week: Number(node.meta?.week), date: String(node.meta?.date) }))
      .sort((a, b) => a.week - b.week);

    expect(sessions.map((s) => s.week)).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    for (let i = 1; i < sessions.length; i++) {
      expect(
        sessions[i].date > sessions[i - 1].date,
        `week ${sessions[i].week} (${sessions[i].date}) does not come after week ${sessions[i - 1].week} (${sessions[i - 1].date})`,
      ).toBe(true);
    }
  });
});

describe("required learning materials", () => {
  it("gives every session's preparation section a real link or a genuine quoted document", () => {
    const files = readMarkdownFiles(resolve("src/content/sessions"));
    expect(files.length).toBeGreaterThan(0);

    for (const file of files) {
      const match = file.body.match(/## Preparation and materials([\s\S]*?)(\n## |$)/);
      expect(match, `${file.name} has no "Preparation and materials" section`).not.toBeNull();
      const section = match ? match[1] : "";

      // Either it points somewhere real (a markdown link)...
      const hasLink = /\]\(\S+\)/.test(section);
      // ...or it quotes a genuine in-world document inline (a substantial
      // blockquote), rather than gesturing at a handout that doesn't exist.
      const quotedLines = section.split("\n").filter((line) => line.trim().startsWith(">"));
      const hasSubstantialQuote = quotedLines.join(" ").length > 200;

      expect(
        hasLink || hasSubstantialQuote,
        `${file.name}'s preparation section has neither a working link nor a genuine quoted document`,
      ).toBe(true);
    }
  });
});
