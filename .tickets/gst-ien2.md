---
id: gst-ien2
status: open
deps: []
links: []
created: 2026-05-12T15:11:40Z
type: chore
priority: 2
assignee: Peter Shih
---
# Split 114-file VCS migration commit per bisection rule

Current WIP commit (chore: prefer jj workflows in gstack instructions) bundles: (a) new vcs-guidance resolver + preamble wiring, (b) template hand-edits to SKILL.md.tmpl files, (c) bin/ script logic changes, (d) regenerated SKILL.md + golden fixtures. CLAUDE.md commit-style says to split these. Also: the commit title 'chore' undersells the scale — README now hard-requires Jujutsu; this is at least MINOR per the scale-aware-bump rule.

## Acceptance Criteria

Before /ship, commit is split into at least: resolver+wiring, bin scripts, template edits, regen. Final ship bumps VERSION at the appropriate level and CHANGELOG entry reflects the user-facing impact (Jujutsu requirement).

