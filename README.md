# ScaffoldUi

This boilerplate project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

It was updated and set up according to Doxee needs, so any project from C2XT platform can be started as a fork of that project.

## Prerequisites

Required dependencies:

- node v8.12.0
- npm v6.4.1

Project was build with enabled routing and SCSS as preprocessor engine.

```sh
ng new --routing --style=scss
```

## Changes

Changes compared to default AngularCLI project.

### Extra dev dependencies

[Prettier](https://github.com/prettier/prettier) enforces a consistent formating style.

[Stylelint](https://stylelint.io/) static SCSS analyzer. Has extra plugins:

- stylelint-config-sass-guidelines
- stylelint-order
- stylelint-scss
- stylelint-config-prettier
- stylelint-prettier

Extra TSLint plugins:

- tslint-consistent-codestyle
- tslint-defocus
- tslint-eslint-rules
- tslint-origin-ordered-imports-rule
- tslint-rxjs-subject-restrictions-rule
- tslint-config-prettier

Precommit hooks were set up with `husky` and `lint-staged`.

### Improved dev commands

Run `npm run all` to lint, build and test the project.

Run `npm run lint` to lint typescript, styles and autofix simple issues.

Run `npm start` to start dev server and open the browser automatically.

Run `npm build` to build production-ready application and put result into `dist` directory.

Run `npm run test-single` to run tests without watching them.

Run `npm run test-coverage` to run tests without watching them and calculate coverage.

Run `npm run storybook` to launch [Storybook](https://github.com/storybooks/storybook) documentation

Run `npm run build-storybook` to build the project storybook. The build artifacts will be stored in the `storybook-static/` directory.

## Useful links

Find more information on the links below:1

- [Confluence](https://dc2xt-conf.sigma.software/display/DC2XT/Home) - Doxee project confluence
- [Folder and file structure](https://dc2xt-conf.sigma.software/display/DC2XT/Package+folder+and+file+structure+convention) - Folder and file structure convention
- [Documentation convention](https://dc2xt-conf.sigma.software/display/DC2XT/Package+documentation+convention) - Documentation convention
- [Testing convention](https://dc2xt-conf.sigma.software/display/DC2XT/Package+testing+convention) - Testing convention
- [Git management flow]() - TODO
- [Code review process]() - TODO
