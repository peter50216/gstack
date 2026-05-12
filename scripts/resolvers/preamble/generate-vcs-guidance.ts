export function generateVcsGuidance(): string {
  return `## Version Control Preference

This fork is **Jujutsu-only** for project source-control work. gstack assumes \`jj\` is installed and the repo is a jj checkout (colocated via \`jj git clone --colocate\` is the common form). Do not introduce \`git\` fallbacks for VCS operations.

Translate git-oriented workflow steps to these jj equivalents:
- Inspect state: \`jj status\`
- Current root: \`jj root\`
- Current change id/commit id: \`jj log -r @ --no-graph -T 'change_id.short() ++ " " ++ commit_id.short() ++ "\\n"'\`
- Nearest ancestor bookmark (the "branch name" for current work): \`jj log -r 'heads(::@ & bookmarks())' --no-graph -T 'local_bookmarks.join(",")'\`
- Fetch base branch: \`jj git fetch --remote origin --branch <base>\`
- Diff against base: \`jj diff --from <base>@origin --to @\`; add \`--stat\`, \`--name-only\`, or \`--git\` as needed
- Log branch work: \`jj log -r '<base>@origin..@' --no-graph\`
- Commit selected paths: \`jj commit <paths> -m "<message>"\`; do not stage with \`git add\`
- Restore paths: \`jj restore <paths>\`
- Rebase onto the latest base: \`jj rebase -d <base>@origin\`
- Move or create the current branch's bookmark before push: \`jj bookmark set <name> -r @- --allow-backwards\`
- Push: \`jj git push --remote origin\`, or \`jj git push --remote origin --bookmark <bookmark>\` when pushing a named bookmark

**About bookmarks:** \`jj commit\` leaves \`@\` as a fresh empty change on top of the just-created commit at \`@-\`. Bookmarks do NOT auto-advance. Always \`jj bookmark set <name> -r @-\` before pushing, or \`jj git push --bookmark\` will push stale or empty state.

Use raw \`git\` only when the step is explicitly about Git hosting/install plumbing (\`gh\`, \`glab\`), bare-repository creation in test fixtures, or gstack's own private git-backed install-update path.`;
}
