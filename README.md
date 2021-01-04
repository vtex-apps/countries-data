# Countries Data

⚠️ **This is an ongoing, unsupported, unfinished and undocumented project. We do not guarantee any results after installation.** ⚠️

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Monorepo containing the configuration apps for each country. These apps configure
the [`vtex.country-data-settings`](https://github.com/vtex-apps/country-data-settings) service app,
which is currently being used to power Checkout's profile and shipping forms.

## Adding a new country

To add a new country configuration app, use the script `./scripts/create-country-app.js`. The syntax
supported by this script is the following:

```sh
# here you can supply multiple countries if needed
./scripts/create-country-app.js [...country]
```

You must supply the country [ISO-3 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) in lowercase,
which will be used to create the app name and the folder inside `./packages`.

After running the script, you must then fill the configuration for that country inside
`./packages/[country-code]/vtex.country-data-settings/configuration.json`. You can take a look
at how this was done for other countries and go from there.

## Releasing a new version

Currently, VTEX IO CI/CD bots don't work on monorepos, so the release must be made manually.

To release a new version, you must make sure to:

1. update the version and date on `CHANGELOG.md`
2. update the version field on `manifest.json`
3. create a tagged release commit with `git tag -a "vtex.country-data-XXX@X.X.X" -m "vtex.country-data-XXX@X.X.X"`
4. update your branch with `git push --tags origin your-branch`
5. merge the PR after it's approved

You may check an example by running `git show c7bbc4d`, which is a tagged release commit.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->
