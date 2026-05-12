export function generateVcsGuidance(): string {
  return `## Version Control Preference

This fork is configured for a Jujutsu-first workflow. For project source-control work, prefer \`jj\` whenever a repo has \`.jj/\` or \`jj root\` succeeds.

Translate git-oriented workflow steps to these jj equivalents:
- Inspect state: \`jj status\`
- Current root: \`jj root\`
- Current change id/commit id: \`jj log -r @ --no-graph -T 'change_id.short() ++ " " ++ commit_id.short() ++ "\\n"'\`
- Fetch base branch: \`jj git fetch --remote origin --branch <base>\`
- Diff against base: \`jj diff --from <base>@origin --to @\`; add \`--stat\`, \`--name-only\`, or \`--git\` as needed
- Log branch work: \`jj log -r '<base>@origin..@' --no-graph\`
- Commit selected paths: \`jj commit <paths> -m "<message>"\`; do not stage with \`git add\`
- Restore paths: \`jj restore <paths>\`
- Rebase onto the latest base: \`jj rebase -d <base>@origin\`
- Push: \`jj git push --remote origin\`, or \`jj git push --remote origin --bookmark <bookmark>\` when pushing a named bookmark

Use raw \`git\` only when the step is explicitly about Git hosting/install plumbing, GitHub/GitLab CLI metadata, gstack's own private git-backed artifact sync, or a tool that has no practical jj equivalent.`;
}
