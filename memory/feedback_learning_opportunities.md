---
name: Offer learning opportunities after commits
description: After commits involving new patterns, migrations, or architectural changes, offer a 10-15 minute learning exercise as prompted by the learning-opportunities hook
type: feedback
---

Always act on the `[learning-opportunities-auto]` hook that fires after commits. When the committed work involves new files, schema changes, architectural decisions, refactors, or unfamiliar patterns, offer a short (10-15 min) learning exercise in one sentence. Wait for confirmation before starting. If the user declines, stop offering for the rest of the session.

**Why:** User has a configured hook for this and expects the offer. I missed it the first time and had to be prompted.
**How to apply:** Watch for the `[learning-opportunities-auto]` system reminder after git commits and respond to it immediately.
