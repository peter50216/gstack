---
id: gst-r9t1
status: closed
deps: []
links: []
created: 2026-05-12T15:11:38Z
type: task
priority: 3
assignee: Peter Shih
---
# Add test for generateVcsGuidance resolver

scripts/resolvers/preamble/generate-vcs-guidance.ts is wired into preamble.ts at tier >= 2 but has no direct test. The skill-validation.test.ts updates only adjust two pre-existing assertions to match jj output. Add: (a) unit assertion that generateVcsGuidance() returns the expected jj translation rules, (b) integration check that the section appears in a tier-2+ generated SKILL.md and is absent from a tier-1 SKILL.md (browse, setup-cookies, benchmark).

## Acceptance Criteria

Tests fail if the resolver is dewired from preamble.ts, or if the tier gating regresses.

