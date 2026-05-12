---
id: gst-uxgl
status: closed
deps: []
links: []
created: 2026-05-12T15:11:36Z
type: bug
priority: 3
assignee: Peter Shih
---
# CONTRIBUTING.md:17 has orphaned --depth 1 advice

Line 17 references 'If you already have an older --depth 1 clone, promote it to a full clone with git fetch --unshallow.' But the new install path uses 'jj git clone --colocate' which is always a full clone. Drop or rewrite this sentence.

## Acceptance Criteria

Line is removed or rewritten to reflect that the current install path always produces a full clone.

