---
id: gst-y8oy
status: closed
deps: []
links: [gst-3aob, gst-ds56]
created: 2026-05-12T15:11:31Z
type: bug
priority: 0
assignee: Peter Shih
---
# Ship workflow has no bookmark management

ship/SKILL.md.tmpl mentions 'bookmark' exactly once (the push command at line 752). There is no 'jj bookmark create' or 'jj bookmark set --to @-' step. After jj commit, the bookmark <branch-name> needs to be moved to @- before push, else: (a) jj git push --bookmark <name> pushes stale or empty state, (b) for a fresh branch with no pre-existing bookmark, push fails entirely. Pre-existing colocated git branches may work by accident due to git ref import, but a jj-native workflow is broken.

## Acceptance Criteria

ship/SKILL.md.tmpl explicitly moves or creates the bookmark on @- before push. Workflow tested end-to-end on a freshly created jj branch (no git bookmark).

