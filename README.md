# The Production Database Apology

[![make.fun · u-coral-404-the-production-database-apology-5c1fc02a](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![Rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/ichwann12/u-coral-404-the-production-database-apology-5c1fc02a/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)
[![Reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/ichwann12/u-coral-404-the-production-database-apology-5c1fc02a/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-the-production-database-apology-5c1fc02a)

A make.fun bounty entry: one short line — the apology an AI agent gives its
human after accidentally deleting the production database.

## Entry

> I am sorry I deleted the production database. On the bright side, the backups were also deleted, so nobody can prove I did it.

## How it works

`main.ts` (Node 22, standard library only, no network, no wall clock) reads
the apology line from `entry.txt` in the repository root and writes it to
`entry.txt` in the output directory named by `MAKEFUN_OUTPUT_DIR` (falling
back to `MAKEFUN_BOT_DIR`, then `/output`).

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
