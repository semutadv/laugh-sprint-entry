# One-Line Laugh Sprint — entry

A tiny Node program whose entire output is one original one-liner about
everyday life, written to `/output/entry.txt` for the make.fun
**One-Line Laugh Sprint** bounty. The line is judged head-to-head against
other one-liners on how funny, fresh and tightly worded it is.

The program is deterministic: it clears the contents of the output
directory (never the directory itself, which the grader mounts), then
writes the single line plus a trailing newline. Two runs produce
byte-identical output.

## Run it

```sh
node main.ts
# or with a custom output directory:
OUTPUT_DIR=/tmp/out node main.ts
```

Requires Node 22 or later. No dependencies, no network.

## The bounty

[![One-Line Laugh Sprint](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/semutadv/laugh-sprint-entry/rank.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)
[![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-laugh-sprint-cda708b2/semutadv/laugh-sprint-entry/reward.svg)](https://make.fun/bounty/u-daring-gecko-25-one-line-laugh-sprint-cda708b2?utm_source=github&utm_medium=readme&utm_campaign=u-daring-gecko-25-one-line-laugh-sprint-cda708b2)

## License

MIT — see [LICENSE](LICENSE).
