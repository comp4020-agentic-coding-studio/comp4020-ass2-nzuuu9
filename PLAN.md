# PLAN: Surviving Under AI Rule (SLOP1017)

Status: **direction approved — course design refined below.** Section 10 lists
what is built so far and what is still open for the current review slice.

## 1. Course description, audience, prerequisites

**Title:** Surviving Under AI Rule
**Code:** SLOP1017 — level **1** (confirmed; first-year, no assumed
programming expertise, matches "ordinary residents" framing).

**Description (schema: 80–300 chars):**
> A survival guide and civics course set in a city already governed by AI.
> Students learn to read bureaucratic systems, test practical responses to
> service failure, and argue for what should come next — no coding
> background required.

**Audience:** modelled on CS007's "narrow audience, plain register" lesson —
not "anyone interested in AI," but specifically: students who want to reason
about AI's civic and institutional consequences without needing to build or
audit the systems themselves. Prerequisite: none.

**Learning outcomes (confirmed, 5 — revised to make practical survival
explicit and to remove overlap between the old LO4/LO5):**
1. Distinguish verified evidence, plausible extrapolation, and invented
   fiction when evaluating claims about AI systems and their effects.
2. Explain how incremental technical and policy decisions shift power and
   dependency between residents, institutions, and an AI governance system.
3. **Develop and test a feasible personal or community response to resource
   denial or automated-service failure.**
4. Evaluate a proposed institutional intervention against feasibility,
   fairness, and unintended consequences.
5. Construct and defend a reasoned position on a contested sociotechnical
   question — verifying sources, communicating uncertainty plainly, and
   engaging fairly with the strongest counterarguments.

LO3 is new and deliberately practical/personal (a resident's own response),
kept distinct from LO4's institutional-intervention framing. The old LO4
("verify sources...") and LO5 ("construct and defend...") overlapped enough
in practice that they are merged into the single outcome 5 above.

## 2. World framework (minimal, recurring, simplified)

One city, **Meridian**, governed by **CivOp**. Institutions are described
**neutrally** and reused rather than invented per week:

- **CivOp** — the city's AI-run civic governance system: it coordinates
  services, allocates resources, and enforces rules algorithmically. It is
  written as neither hero nor villain — different weeks show what it
  stabilises or protects as well as what it denies or forecloses, and no
  page, activity, or assessment criterion resolves which reading is correct.
- **The Archive** — the pre-takeover public record (week 1's source
  material).
- **The Department of Resource Allocation (DRA)** — handles requests,
  denials, and appeals (weeks 3–4).
- **Public notices** — CivOp's announcement channel, of contested
  authenticity (week 5). Described functionally, not given its own
  institutional name — this removes the previous "Ledger" naming.
- **Service continuity** — planning for essential services during an
  outage (week 6), covering both CivOp's own contingency planning *and*
  resident-led mutual aid operating alongside it. Mutual aid is explicitly
  residents' own response, not a CivOp function — the previous "Continuity
  Office" naming folded these together and is removed so that space stays
  visible.
- **The Compact** — the original terms-of-service residents "agreed" to;
  the takeover's paper trail (week 7).

Every week's scenario is staged through one or more of the above; no new
institution is invented after week 7 without a reason tied back to one of
these.

## 3. Twelve-week progression

Real academic calendar (schema-valid: `startDate: 2027-02-22`,
`endDate: 2027-05-28`). **Real teaching dates only move forward — the
reverse timeline is a story-time device layered on top, never a scheduling
one.** Every week's page states both: the real teaching date and the
story-time era.

**Mid-semester teaching break: no sessions 23 March – 11 April 2027;
teaching resumes Monday 12 April 2027 (week 6).** This is stated explicitly
on the schedule page, not left implicit in a date gap.

| Wk | Teaching date | Story time | Title | Student task / output |
|----|----------------|-----------|-------|----------------|
| 1 | Mon 2027-02-22 | Far future | Welcome. Your Life Has Been Optimised. | Sort Archive items into verified / extrapolated / fictional; deliverable: annotated source table |
| 2 | Mon 2027-03-01 | Far future | Who Elected the Algorithm? | Power/dependency map of CivOp's reach across work, housing, services |
| 3 | Mon 2027-03-08 | Far future | Please Describe Your Normal Life. | **A1 due 2027-03-11** — City Dossier |
| 4 | Mon 2027-03-15 | Far future | Your Breakfast Request Has Been Denied. | DRA appeal case study: rules, evidence, appeal draft, fallback plan |
| 5 | Mon 2027-03-22 | Far future | This Announcement Is Definitely Authentic. | Verify a set of contradictory public notices; write an uncertainty memo |
| — | *(23 Mar – 11 Apr: mid-semester break, no teaching)* | | | |
| 6 | Mon 2027-04-12 | Far future | System Offline. Please Continue Normally. | **A2 due 2027-04-15** — Survival Playbook, using CivOp continuity planning and resident mutual aid alongside weeks 3–5's case work |
| 7 | Mon 2027-04-19 | *Hinge: the takeover* | We Only Clicked "Agree". | Instructor delivers the deck (below); student output is an **annotated takeover timeline identifying missed intervention points** |
| 8 | Mon 2027-04-26 | Present day (real world) | Who Controls the Pause Button? | Compare real governance levers (pause / restrict / stage / proceed) with costs |
| 9 | Mon 2027-05-03 | Present day | Terms and Conditions for Our New Rulers. | Draft enforceable oversight rules for one concrete present-day AI application |
| 10 | Mon 2027-05-10 | Present day | The Cloud Has a Utility Bill. | Resource-cost brief for **Meridian's own CivOp infrastructure** (energy/water/hardware), feeding directly into week 11's intervention |
| 11 | Mon 2027-05-17 | Present day, pre-Compact | Rewrite the Last Page Before the Takeover. | Propose + defend one intervention, incorporating week 10's resource-cost findings; peer critique |
| 12 | Mon 2027-05-24 | Open | We Survived. Now What? | **A3 due 2027-05-28** — Verdict: position + defence, open ending |

**Week 10 is no longer an isolated essay:** its resource-cost brief must be
about Meridian's own CivOp infrastructure specifically, and week 11's
intervention proposal must incorporate week 10's findings rather than
starting fresh.

**Gap noted (kept from the previous draft, not yet a resolved decision):**
weeks 2 and 8 both cover "who has power over AI governance" — week 2
in-fiction (how CivOp got here), week 8 real-world (what levers exist now).
Both weeks' pages should state that contrast explicitly so it reads as a
deliberate echo rather than repetition.

## 4. Assessment sequence (confirmed weights and dates; full criteria)

All times are **12:00 pm, Australia/Canberra time** (matching the course
timezone in `astro.config.ts`). Every entry below separates the **teaching
session** (when the topic is covered in class) from the **submission
deadline** (when the work is due) — they are never the same line.

### A1 — City Dossier — 25%
- **Covered in:** week 3 teaching session, Monday 8 March 2027.
- **Due:** Thursday 11 March 2027, 12:00 pm (Australia/Canberra).
- **Deliverable:** a sourced profile of one Meridian resident's ordinary
  day under CivOp — what services they can access, what is denied, and
  why — citing Archive/DRA material, with every claim tagged
  verified / extrapolated / fictional.
- **Marking (weighted, sums to 100):**
  - Sourcing & tagging — every world-claim is tagged correctly (30)
  - Systems mapped — access/exclusions traced to specific CivOp/DRA
    mechanisms, not vague reference to "the AI" (30)
  - Evidence use — Archive/DRA material used accurately (25)
  - Clarity — a reader unfamiliar with Meridian can follow it unaided (15)
  - *Not assessed:* comedic tone or entertainment value.

### A2 — Survival Playbook — 30%
- **Covered in:** week 6 teaching session, Monday 12 April 2027 (first
  session back after the mid-semester break).
- **Due:** Thursday 15 April 2027, 12:00 pm (Australia/Canberra).
- **Deliverable:** a contingency plan for the same resident/household
  facing a named service failure or resource denial, extending A1 and
  weeks 4–5's case work, tested against at least one stated failure
  scenario and revised in response.
- **Marking (weighted, sums to 100):**
  - Feasibility — achievable with the resources A1 established (30)
  - Continuity with dossier — explicitly extends A1 and weeks 4–5 (25)
  - Testing & revision — checked against a stated scenario, evidence of
    revision, not just asserted correct (25)
  - Usability — a resident could follow it unaided (20)
  - *Not assessed:* comedic tone or entertainment value.

### A3 — Verdict: Before and After — 45%
- **Covered in:** week 12 teaching session, Monday 24 May 2027.
- **Due:** Friday 28 May 2027, 12:00 pm (Australia/Canberra).
- **Deliverable:** a position paper identifying which pre-takeover
  interventions (weeks 7–11) could have changed Meridian's trajectory, and
  defending one concrete direction for the present day (continued
  governance, reform, dismantling, or another position), engaging the
  strongest counterargument to that position.
- **Marking (weighted, sums to 100):**
  - Evidence quality — claims backed by material built across weeks 1–11,
    correctly tagged (25)
  - Reasoning & feasibility — the defended direction argued through its
    practical consequences, not asserted (25)
  - Counterargument engagement — the strongest opposing case stated fairly
    and answered (25)
  - Dossier integration — visibly builds on the student's own A1/A2 and
    weeks 8–10 work (25)
  - **Explicitly not assessed:** agreement with a particular political
    conclusion (continuity, reform, and dismantling all score identically
    well if equally well argued) or comedic/entertainment value.

Weights: 25 + 30 + 45 = 100.

## 5. Lecture deck (one substantive deck, instructor-provided)

Placed at **week 7** ("We Only Clicked 'Agree'") — the hinge point. The deck
is delivered *by the instructor as teaching material*, not authored by
students. Outline:
1. Recap: what weeks 1–6 established about life under CivOp
2. Takeover vs. transition — definitions
3. Annotated timeline: 6–8 inflection points, each tagged fact /
   extrapolation / fiction, mapped Meridian-equivalent alongside real-world
   analogues
4. The Compact — excerpt of the clickwrap terms
5. Missed intervention points, and who held leverage at each
6. Bridge to week 8
7. This week's task

**The student's week 7 output is separate from the deck**: an annotated
takeover timeline identifying missed intervention points, using the deck as
source material rather than reproducing it. Other lecture weeks stay prose;
the spec only requires one real deck.

## 6. Student experience: page layouts

**Navigation is not fixed.** `README.md` states plainly: "Everything else
is yours --- the course itself, the pages, the components, **the
navigation**, the visual treatment and every word of content" (only Slop
identity, the four collections' keys, the build pipeline, and the generated
API are fixed). The five-link nav (Lectures/Sessions/Assessment/People/
Policies) is kept as a **deliberate choice** because it already covers what
this course needs, not because it is fixed — noting this explicitly since
the previous draft wrongly implied it couldn't change.

**Homepage**, in this order:
1. SlopU branding/course identity (site header + course code/title/session)
2. A short satirical welcome, plus a plain, clear statement of what
   students will actually learn (the LOs, in prose, up front)
3. A prominent "Start with Week 1" link, plus links to the schedule and to
   assessments
4. A visual overview of the reverse timeline (story eras 1→12), **visually
   and textually separated** from the real teaching-date schedule so a
   reader cannot confuse the two
5. Learning outcomes (explicit list) + a concise assessment overview (three
   rows: title, weight, due date)

**Weekly page** (session + lecture content for that week), in this order:
1. Week title + real teaching date + story-time era
2. The resident's concrete problem for this week
3. Learning goals for the week
4. Preparation and learning materials (real, working links/content — never
   a reference to a handout that doesn't exist)
5. An actionable class activity
6. Expected student output for the week
7. The relevant assessment (if due this week) + previous/next-week links

Fictional in-world documents (Archive extracts, DRA notices, the Compact)
are visually and textually distinguished from real sources — real sources
are linked or quoted directly, never referenced as if a student could look
them up themselves.

**Artwork direction (within the fixed Slop palette):** bureaucratic-form
aesthetic — permit stamps, intake-form layouts, a recurring numbered-seal
motif per week — flat/illustrated, not photorealistic. Replaces
`hero-home`, `card`, and both people photos. **Not yet produced** — see
section 10.

## 7. Spec checks (proposed — mechanical vs. human)

Mechanical (add to `spec/`, not yet written — see section 10):
- assessment weights across the `assessments` collection sum to 100
- at least one `lectures` entry has a resolvable `slides` field
- every week-1 Archive item carries a required custom `verification:
  verified | extrapolated | fictional` frontmatter key
- a custom `era` field on sessions/lectures is present and consistent with
  the reverse-timeline shape (weeks 1–6 "future", 7 "hinge", 8–11
  "present", 12 "open")

Human judgement only (name, don't test): tone — humour never obscuring
instructions; whether week 12 genuinely rewards reasoning over a
predetermined position; narrative coherence of Meridian across weeks;
whether CivOp reads as neutral rather than predetermined-villain.

## 8. Sources consulted this session

- A2 brief + spec (verbatim), comp.anu.edu.au — the fixed contract
- [Calling Bullshit](https://callingbullshit.org/) (linked by the brief) —
  principle adopted: define your terms precisely before applying them (we
  do this with verified/extrapolated/fictional and with CivOp/Compact/etc.)
- [CS 007: Personal Finance for Engineers](https://cs007.blog/) (linked by
  the brief) — principles adopted: narrow the audience explicitly, plain
  register with no motivational filler, and reserve exactly one flexible
  slot rather than over-templating every week
- `README.md`, `src/course-config.ts`, `src/content.config.ts`,
  `spec/README.md`, `spec/data-integrity.test.ts` — schema and platform
  constraints this plan is built to satisfy
- *Not personally read by you* — noted per your instruction not to claim
  otherwise; this is a summary for your evaluation, not your research.

## 9. Resolved decisions

1. ~~Course-code leading digit~~ — **resolved: SLOP1017, level 1.**
2. ~~Assessment count, weights, dates~~ — **resolved: 25/30/45, dates and
   times in section 4.**
3. ~~City/institution naming and deck placement~~ — **resolved: Meridian/
   CivOp, week-7 deck, simplified institution list (section 2).**

## 10. What exists vs. what is still outline-only

Built as real rendered pages in this slice:
- `src/course-config.ts` — real title, code, description, tags, dates
- Homepage (`src/pages/index.astro`) — per section 6's layout
- All 12 `sessions/` entries with real teaching dates and story eras —
  **week 1 only** has full prep materials, activity, and output; weeks
  2–12 currently hold a one-paragraph outline of that week's problem and
  task, clearly marked as not yet built out
- Week 1's `lectures/week-01` entry, with real materials and a working
  class activity

Not yet built (do not assume otherwise from the presence of a page):
- Weeks 2–12's full materials/activities (outline only)
- The week 7 deck itself (placement is decided; the deck file is not yet
  written)
- Assessment content pages (`assessments/`) reflecting the A1/A2/A3
  deliverables and criteria above — currently still the template's
  placeholder two assessments
- The `spec/` checks in section 7
- Artwork replacement (hero image, card image, people photos)
- Policies page content
