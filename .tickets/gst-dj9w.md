---
id: gst-dj9w
status: closed
deps: []
links: []
created: 2026-05-12T15:11:34Z
type: chore
priority: 1
assignee: Peter Shih
---
# Remove git fallback — jj-only

Per user direction, drop the 'jj cmd || git cmd' fallback pattern across bin/ scripts and templates. jj is required to install gstack now (README:45). Affected: bin/gstack-diff-scope, bin/gstack-next-version (detectHost + readBaseVersion), bin/gstack-slug (REMOTE_URL + RAW_BRANCH), bin/gstack-team-init (REPO_ROOT detection), and inline 'jj X 2>/dev/null || git Y' fallbacks in templates. Keep raw git only where required for gh/glab plumbing or for Git-hosting metadata that jj genuinely can't provide.

## Acceptance Criteria

bin/ scripts call jj exclusively for VCS operations. No '|| git rev-parse' or '|| git diff' fallbacks remain in bin/ or templates. The vcs-guidance resolver still mentions 'raw git only for hosting plumbing' but no longer needs to soften the rule with fallback-everywhere wording.

