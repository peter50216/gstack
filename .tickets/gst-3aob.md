---
id: gst-3aob
status: closed
deps: []
links: [gst-ds56, gst-y8oy]
created: 2026-05-12T15:11:33Z
type: bug
priority: 1
assignee: Peter Shih
---
# _BRANCH capture returns change_id when @ has no bookmark

Pattern used throughout templates and bins: BRANCH=$(jj log -r @ --no-graph -T 'bookmarks.join(",")') with fallback to change_id.short(). In jj, @ rarely has bookmarks (they live on @- after jj commit, or on ancestors). The fallback returns a 12-char hex change_id like 'txxyrnno' which then propagates into: gstack-slug BRANCH output, ship template <branch-name> substitution, eureka/timeline JSONL logs, and 'jj git push --bookmark <change_id>' which fails. Fix: look up bookmarks on ::@ (nearest ancestor) or @- before falling back to change_id.

## Acceptance Criteria

On a feature branch with a bookmark on @- and an empty @, gstack-slug and preamble bash both return the bookmark name. Affected files: bin/gstack-slug, SKILL.md.tmpl preamble bash, scripts/resolvers/review.ts (BRANCH=), and ship template.

