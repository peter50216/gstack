---
id: gst-pwuy
status: closed
deps: [gst-dj9w]
links: []
created: 2026-05-12T15:11:46Z
type: bug
priority: 4
assignee: Peter Shih
---
# bin/gstack-team-init:23 dead 2>&1 redirect

Line 23: 'if ! REPO_ROOT=$(jj root 2>/dev/null || git rev-parse --show-toplevel 2>/dev/null 2>&1); then'. The trailing 2>&1 redirects fd 2 to fd 1, but fd 2 was already pointed at /dev/null. Harmless but wrong style. Will be moot once the jj-only ticket lands (the entire git fallback in this line goes away).

## Acceptance Criteria

Line is corrected, or rendered moot by the jj-only refactor.

