# Your harness

## Confirmed design decisions

- Course: **Surviving Under AI Rule**, code **SLOP1017** (leading digit 1,
  confirmed).
- Reverse-timeline structure is fixed: weeks 1–6 open in a future city
  already under AI governance and explore survival there; week 7 is the
  hinge that moves back to the takeover; weeks 8–11 sit in the real-world
  present evaluating interventions; week 12 is open. **Real teaching dates
  always move forward in calendar order — only the in-story era moves
  backward then forward.** Never let a page's dating imply the reverse
  applies to the calendar. Mid-semester teaching break is 23 March – 11
  April 2027 and must be labelled explicitly wherever the schedule appears,
  not left as an implicit date gap.
- Ending is genuinely open (week 12: "We Survived. Now What?"). No page,
  activity, or assessment criterion may present coexistence, dismantling AI
  rule, continued AI governance, or any other outcome as the correct one.
  Marking rewards evidence, reasoning, feasibility, and engagement with
  counterarguments — **never agreement with a particular political
  conclusion, and never comedic or entertainment value.** This applies to
  every assessment's marking criteria, not just A3.
- **CivOp is written neutrally** — the city's AI-run governance system, not
  a predetermined antagonist. Different weeks show what it stabilises or
  protects as well as what it denies or forecloses; no page resolves which
  reading is correct.
- Discussion of dismantling AI rule stays at the fictional institutional/
  ethical level (governance, oversight, accountability). Never produce
  real-world attack instructions or treat the premise as a literal forecast
  — the fictional AI-takeover is a teaching device.
- Three-stage assessment shape is confirmed and complete: A1 City Dossier
  (25%, wk 3, due 2027-03-11 12:00 Australia/Canberra), A2 Survival
  Playbook (30%, wk 6, due 2027-04-15 12:00), A3 Verdict (45%, wk 12, due
  2027-05-28 12:00) — full deliverables and weighted marking criteria are
  in `PLAN.md` section 4. Every teaching-session date and submission
  deadline is stated separately; never conflate the two.
- Week 7's lecture deck is **instructor-provided teaching material**; the
  student's week 7 output is a separate deliverable, an annotated takeover
  timeline identifying missed intervention points — never described as if
  the student authored the deck.
- Development and process artefacts (`PLAN.md`, `PROCESS.md`, this file,
  anything in `reflections/`) stay out of student-facing navigation
  (`siteConfig.links`) and are never linked from a content page.

## Platform constraints (fixed — see README.md, do not change)

- SlopU identity (`astro-theme-slop` branding/palette), the four content
  collections (`sessions`, `assessments`, `lectures`, `people`) and their
  keys, the build pipeline in `astro.config.ts`, and the generated API stay
  as they arrived.
- Course code keeps digits `017`; only the leading level digit is ours to
  set (1–4 UG, 6/8 PG).
- Twelve dated teaching weeks, assessment weights totalling 100%, at least
  one lecture with a real linked deck.
- `pnpm check` and `pnpm check:evidence` must pass before shipping.
- Navigation is **not** on this fixed list (`README.md`: "the navigation...
  and every word of content" is ours) — the five-link nav is kept as a
  deliberate choice, not because it can't change.

## Verified commands (Linux/WSL repo only — `~/comp4020/comp4020-ass2-nzuuu9`)

```sh
mise install
pnpm install       # also wires up .githooks/pre-commit via `prepare`
pnpm dev           # http://localhost:4321/comp4020-ass2-nzuuu9/
pnpm check         # typecheck + build + spec — passed clean on baseline
pnpm check:evidence
```
Do not run these from the Windows copy of this repo — its build has an
unresolved Windows-only `execFile("npx", …)` failure in a dependency
(pagefind invocation), left unpatched by decision. The Linux copy builds
correctly and is the one to work from.

## Writing / quality rules

- Every claim about present-day AI systems is tagged fact, plausible
  extrapolation, or invented fiction — never presented as one undifferentiated
  voice. This applies most strictly to week 1's Archive content.
- Institutions (CivOp, the Archive, the DRA, the Compact) are reused
  consistently across weeks — do not invent a new institution to solve a
  week's writing problem; extend an existing one or flag the gap in
  `PLAN.md`. Public notices and service-continuity planning are described
  functionally, not given their own institutional names (no "Ledger" or
  "Continuity Office") — this keeps room for resident-led mutual aid to
  read as the residents' own response, not a CivOp function.
- Every week has one distinct problem and one concrete student task —
  never a week that's only atmosphere/worldbuilding with nothing to do.
- Humour is dry and bureaucratic but never obscures what a student must
  actually do: deadlines, deliverables, and instructions are always stated
  plainly, even on a page written in-character as a CivOp notice.
- Never fabricate sources, citations, or verification results — for the
  fictional Archive content, invented sources must read as invented (no
  fake real-world URLs or names presented as if verifiable), and for
  `PROCESS.md`/real citations, never invent a commit, prompt, or process
  claim on the student's behalf.
