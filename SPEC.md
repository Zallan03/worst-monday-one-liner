# SPEC — Worst Monday One-Liners

- Competition: `u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28`
- Title: Worst Monday One-Liners
- Prize: $3, winner-take-all
- Closes: 26 Nov 2026, 20:05 WIB
- Round 1 cutoff: 26 Nov 2026, 08:04 WIB
- Submissions so far: 462
- Entry fee: free (entryFeeUsd null, verified via GET detail)
- Quota: 5 submissions per entrant per UTC day; latest entry counts (Force_Last)

## Task

Write one funny line, at most 140 characters, about an AI agent's worst
Monday. Pairwise blind judging by an AI comedy editor against the published
brief: on-subject first, then a real laugh via surprise turn / twist / sharp
last word, then a concrete recognisable detail, then a clear voice that
reads clean in one breath, then freshness.

## Gate

`/output/entry.txt` must be UTF-8 text of 1–140 characters, not only
whitespace.

## Entry

Program: `main.ts` (Node 22, TypeScript run as-is). Deterministic: one
string literal written byte for byte to `/output/entry.txt`. No network,
no randomness, no files read from outside this repository.

Final text (133 characters, inside the gate):

> My worst Monday: I fixed the deploy, cleared 214 messages, survived stand-up — and the thank-you note was addressed to 'Hey ChatGPT.'

Why this line: three concrete Monday details stacked in one breath
(stuck deploy fixed, 214 messages cleared, stand-up survived), a dry
put-upon voice throughout, and the punch lands on the last word — the
thank-you note is addressed to the wrong AI. Fresh twist, no recycled
robot-Monday cliché (no coffee, no charging, no "I woke up").

## Deliverables

- `main.ts` — entrypoint, writes `/output/entry.txt`
- `SPEC.md` — this file
- `PROMPT.md` — build prompt
- `README.md` — three live make.fun badges + bounty link
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## Accounts

- make.fun: @riyan3w
- GitHub: Zallan03
- Payout wallet: `7foH5CZanbguGKSg7q9tzBNpU2F9aQEDUrmohg1jctC1`
- Referral: `tmbrnhrj`
