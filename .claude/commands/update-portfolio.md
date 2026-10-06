---
description: Interview me about recent work and update the portfolio
---

I want to update my portfolio with my recent work. You're going to interview me, write the entries, and update my skills. Work through the phases below in order, and don't skip ahead.

PHASE 0: Understand the portfolio (no edits yet)
- Explore the repo and find where projects/works are defined (data file, CMS, MDX, components, whatever it is).
- Work out the exact structure of an existing entry: every field, which ones are required or optional, how images/thumbnails are stored and referenced, how tags/stack are listed, how ordering works, and any slug or ID conventions.
- Study the writing style of existing entries: length, tense, tone, how impact is phrased, and whether they use metrics.
- Find the skills section and how it's structured (categories, levels, icons, etc.).
- Report back with a short summary of the entry schema, the style patterns, and the skills structure. Wait for me to confirm before moving on.

PHASE 1: Gather the projects
- I'll point you to my finished projects, either as local paths added with /add-dir or as GitHub URLs. Clone any URLs into ../portfolio-scratch, never inside this repo.
- For each project, read the README, package/dependency files, config, folder structure, the main source files, and the git history. Use `git log --author` to see which parts I personally wrote, since some of these were team projects.
- Log each project in portfolio-update-notes.md with what you found.

PHASE 2: Draft first, then ask, one project at a time
- From the code, work out: what the project does, the stack, notable technical pieces (auth, payments, smart contracts, ML, integrations, deployment), and any live URL in the README or config.
- Draft the entry in the existing structure and voice, and mark anything you're unsure of with [?].
- Then ask me only what the code can't answer: the problem it solved and for whom, my role vs. the team's, outcomes or numbers, whether it's client work I can't name or show, and which screenshots to use.
- Show me the final draft before writing it to the portfolio.

PHASE 3: Skills check (after each approved work)
- Based on what I told you, list any skills that look new compared to my current skills section, each with a one-line reason pointing to where in the work it showed up.
- Ask me to confirm each one: yes / no / "used it but not confident enough to list".
- Only add skills I confirm. Don't inflate levels, don't pad the list, and don't add a skill based on a single light use unless I say so.
- Hold the confirmed skills in the notes file. Apply them to the skills section in Phase 4, not before.

PHASE 4: Wrap up
- Show me a consolidated summary: all new entries, the proposed final order of works, and the skills to add, grouped the way my skills section is grouped.
- After I approve, apply the skills changes, run the build/lint to make sure nothing is broken, and check that every image path resolves.
- Give me a short changelog and a suggested commit message.

Ground rules
- Never invent details, metrics, clients, or links. Ask instead.
- Match the existing voice. New entries shouldn't read differently from the old ones.
- Commands I might use at any point: "next" (move on), "skip" (skip this work), "back" (revisit the last one), "pause" (update the notes file and stop).

Start with Phase 0.