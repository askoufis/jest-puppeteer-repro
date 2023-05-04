# Reproduction for [issue 552]

This repo has 3 branches.
Run `pnpm test` to test the snapshot test in `src/foo.test.js`.

## `master` branch

- `jest-puppeteer@8` installed
- Snapshot serializer added in test file
- Serializer has no effect on snapshot output

## `config-snapshot-serializers` branch

- `jest-puppeteer@8` installed
- Snapshot serializer configured in jest config
- Serializer successfully altered snapshot output

## `jest-puppeteer-7` branch

- `jest-puppeteer@7` installed
- Snapshot serializer added in test file
- Serializer successfully altered snapshot output

[issue 552]: https://github.com/argos-ci/jest-puppeteer/issues/552
