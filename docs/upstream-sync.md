# Upstream Sync Notes

## Remote configuration
- Upstream repository: [`twilio/twilio-voice-react-native`](https://github.com/twilio/twilio-voice-react-native)
- Added as remote `upstream` and fetched tags/branches on: 2025-11-13T20:48:24Z
- Local sync branch created from the fork's `work` mainline: `chore/upstream-1.7.0`

## Fork base verification
- `git merge-base chore/upstream-1.7.0 upstream/main` → `cfd55708c73ccc9562909b344352759d01bc886e` (upstream merge commit "Merge pull request #551 from twilio/release/1.6.1")
- `git merge-base chore/upstream-1.7.0 1.6.1` → `ce11059cc411c3e555ee8cb19634e257a8ef451c`
- Upstream tag `1.6.1` resolves to commit `ce11059cc411c3e555ee8cb19634e257a8ef451c`
- `git tag --contains ce11059cc411c3e555ee8cb19634e257a8ef451c` → `1.6.1`, `1.7.0`, `1.7.0-rc1`, `1.7.0-rc2`, `1.7.0-rc3`, `1.7.0-rc4`, `latest`

These checks confirm the fork descends from upstream release commit `ce11059cc411c3e555ee8cb19634e257a8ef451c`, with upstream `main` advancing to the 1.7.0 release afterward.

## 1.7.0 merge
- Merged upstream tag `1.7.0` (`b26e78291363061e3098c7676066c013ec0b26a7`) into `chore/upstream-1.7.0` on 2025-11-13.
- Resolved `package.json` to retain the Expo entry points (`cjs-entry.cjs` export and plugin metadata) while bumping the fork package to `1.7.0-svox.0`.
- Ran `npm install`, `npm run check:lint`, `npm run check:type`, `npm run check:test`, and `yarn --cwd test/app install` to verify the library and Expo example app dependencies after the merge.
