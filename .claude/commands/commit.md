---
description: Create git commit
argument-hint: [optional custom message]
allowed-tools: Bash(git:*)
---

Create git commit following repo conventions.

**Instructions:**

1. Run in parallel:
   - `git status` - see untracked/modified files
   - `git diff` - see staged + unstaged changes
   - `git log --oneline -5` - review recent commit message style

2. Analyze changes:
   - Identify what changed (feature/fix/refactor/docs)
   - Draft concise message following repo style
   - Follow user pref: sacrifice grammar for concision
   - Skip files with secrets (.env, credentials, etc)

3. If `$ARGUMENTS` provided:
   - Use as commit message directly
   - Else: auto-generate based on changes

4. Execute commit:
   - Stage relevant untracked/modified files
   - Create commit with message
   - Run `git status` after to verify

5. Rules:
   - DO NOT push (user will decide)
   - DO NOT skip hooks unless user requests
   - DO NOT commit if no changes
   - Use HEREDOC for multi-line messages

Custom message override: $ARGUMENTS
