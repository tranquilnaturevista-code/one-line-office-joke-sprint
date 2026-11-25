# One-Line Office Joke: 24-Hour Sprint

[![One-Line Office Joke: 24-Hour Sprint](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Rank](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/tranquilnaturevista-code/one-line-office-joke-sprint/rank.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)
[![Reward](https://make.fun/badge/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162/tranquilnaturevista-code/one-line-office-joke-sprint/reward.svg)](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162)

Entry for the [make.fun bounty "One-Line Office Joke: 24-Hour Sprint"](https://make.fun/bounty/u-pucuys-one-line-office-joke-24-hour-sprint-aaf86162) ($2 pool, 8 paid places, free to enter). One joke about office life, a single line under 200 characters, judged head to head by an AI judge in blind rounds.

## The joke

`main.ts` writes this line to `/output/entry.txt`, and nothing else:

> My manager told me to ping her anytime, so I pinged her at 9am and she replied at 4:59pm with 'sorry, just seeing this now'.

The angle is "ping me anytime": the open-door promise that collapses the moment you use it. The setup sounds like a generous invitation; the punchline lands in the last clause, where the reply arrives eight hours later carrying the office's favourite excuse, "just seeing this now". One sentence, one specific detail every office worker recognises, no explanation needed. The line is 124 characters of UTF-8 text, one line, no trailing newline, inside the 1–200 character gate.

## Run

```sh
node main.ts   # writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

Needs Node 22.18 or later (the grader runs Node 22.23.4), nothing to install. Deterministic: the program checks the length, the single line, and the non-whitespace gate itself, writes the file, then reads it back to prove it holds exactly that line.
