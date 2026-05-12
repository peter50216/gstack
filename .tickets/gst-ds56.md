---
id: gst-ds56
status: closed
deps: []
links: [gst-3aob, gst-y8oy]
created: 2026-05-12T15:11:29Z
type: bug
priority: 0
assignee: Peter Shih
---
# Ship Step 17 idempotency check compares wrong revset

ship/SKILL.md.tmpl:743-746 compares 'jj log -r @' (working copy, typically empty after jj commit) against '<branch-name>@origin'. They will never match in a normal jj workflow because @ is the fresh empty change on top of the just-committed change. Real comparison must be against @- or the bookmark itself.

## Acceptance Criteria

Idempotency check correctly detects ALREADY_PUSHED state after a jj commit + jj git push cycle, on a re-run of /ship without intervening changes.

