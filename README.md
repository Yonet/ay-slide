# AySlide

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-beta.31.

- Uses [ngrx](https://github.com/ngrx) for state management. You can find everything related to data and state management under 'src/app/dataStore'.

## Table of Content

- [Development](#development)
- [Setup Dev Environment](#setup-dev-environment)
- [Updating Existing Angular-cli](#updating-existing-angular-cli)
- [Running Local Server with Staging Build](#build)
- [Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
- [Writing Unit Tests](#writing-unit-tests)
- [Before You Commit Checklist](#before-you-commit-checklist)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Knowledge Base](#knowledge-base)
- [Testing](#running-unit-tests)
- [Deployments](#deployments)
- [Localization](https://angular.io/docs/ts/latest/cookbook/i18n.html)

## Development

### Setup Dev Environment

- Install Chrome extentions [Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd?hl=en), [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en).
- Install [Node.js](https://nodejs.org/en/) (node v.6.9.1, npm 3.10.8 and up).
- Update/install these node packages globally.
- You can check if you already have them on by typing this on your terminal.

```
npm list -g -depth=0
```

- If you need to use 'sudo' install globally, please [change your permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions) first.

```
//npm install -g for the ones
/usr/local/lib //this is the folder on mac
├── angular-cli@1.0.0-beta.26
├── bower@1.8.0
├── grunt@1.0.1
├── grunt-cli@1.2.0
├── gulp@3.9.1
├── http-server@0.9.0
├── node-sass@4.3.0
├── npm@3.10.10
├── protractor@5.0.0
├── rimraf@2.5.4
├── ts-node@2.0.0
├── tslint@4.3.1
├── typescript@2.0.10
├── typings@2.1.0
├── webpack@1.14.0
└── webpack-dev-server@1.16.2
```

- Setup private npm in development

Follow the documentation on the wiki so [setup private npm.](https://wiki.autodesk.com/display/SPRY/Setting+up+Private+NPM+in+development). We need this to download [Forge Presentations](https://git.autodesk.com/rochaf/autodesk-model-presenter)

- Install [angular-cli](https://github.com/angular/angular-cli)

```
npm install -g @angular/cli
```

### Updating existing angular-cli

```
npm uninstall -g angular-cli @angular/cli
npm uninstall --save-dev angular-cli //Only if you  already installed it before
npm cache clean
npm install -g @angular/cli@latest
```

- Local project package:

```
# commit any changes you have to git first
rm -rf node_modules dist/ # use rmdir on Windows
npm install --save-dev @angular/cli@latest
bower install
npm install
ng serve
```

App will be running at <http://localhost:4200/>

### Build

- To run local nitrous environment:

```
ng serve -env=local
```

- To run production/staging build on your local environment with nitrous staging:

```
ng serve —prod —env=staging
ng serve —prod —env=prod
ng serve --prod
```

- Project files

IMPORTANT NOTE:One person should do this anytime there is a new version of angular-cli.

You will need to run `ng init` to check for changes in all the auto-generated files created by `ng new` and allow you to update yours. You are offered four choices for each changed file: `y` (overwrite), `n` (don't overwrite), `d` (show diff between your file and the updated file) and `h` (help).

Carefully read the diffs for each code file, and either accept the changes or incorporate them manually after `ng init` finishes.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

```
#Sets base tag href to /myUrl/ in your index.html
ng build --base-href /presentations/app/
ng build --bh /presentations/app/
```

### Deployments

For our deployment base href is set on npm script already. Npm run publish-prod/publish-staging builds for production and pushes to s3.

```
npm run publish-staging
npm run publish-prod
```

### 3rd Party Library Installation

Simply install your library via `npm install lib-name --save` and import it in your code.

If the library does not include typings, you can install them using npm:

```
npm install d3 --save
npm install @types/d3 --save-dev
```

### Global Library Installation

Some javascript libraries need to be added to the global scope, and loaded as if they were in a script tag. We can do this using the `apps[0].scripts` and `apps[0].styles` properties of `angular-cli.json`.

As an example, to use [Boostrap 4](http://v4-alpha.getbootstrap.com/) this is what you need to do:

First install Bootstrap from `npm`:

```
npm install bootstrap@next
```

Then add the needed script files to to `apps[0].scripts`.

```
"scripts": [
        "public/bower_components/forge-presentations/distrib/lib/presentations.js",
        "public/bower_components/autodesk-data-oss-js/scripts/FileSaver.js",
        "public/bower_components/autodesk-data-oss-js/scripts/Autodesk.Data.OSS.js"
    ],
```

Finally add the Bootstrap CSS to the `apps[0].styles` array:

```
"styles": [
        "styles.css",
        "../node_modules/bootstrap/dist/css/bootstrap.css"
    ],
```

Restart `ng serve` if you're running it, and Bootstrap 4 should be working on your app.

### Generating Components, Directives, Pipes and Services

You can use the `ng generate` (or just `ng g`) command to generate Angular components:

```
ng generate component my-new-component
ng g component my-new-component # using the alias

# components support relative path generation
# if in the directory src/app/feature/ and you run
ng g component new-cmp
# your component will be generated in src/app/feature/new-cmp
# but if you were to run
ng g component ../newer-cmp
# your component will be generated in src/app/newer-cmp
```

You can find all possible blueprints in the table below:

Scaffold  | Usage
--------- | ---------------------------------
Component | `ng g component my-new-component`
Directive | `ng g directive my-new-directive`
Pipe      | `ng g pipe my-new-pipe`
Service   | `ng g service my-new-service`
Class     | `ng g class my-new-class`
Interface | `ng g interface my-new-interface`
Enum      | `ng g enum my-new-enum`
Module    | `ng g module my-module`

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Proxy To Backend

Using the proxying support in webpack's dev server we can highjack certain urls and send them to a backend server. We do this by passing a file to `--proxy-config`

Say we have a server running on `http://localhost:3000/api` and we want all calls th `http://localhost:4200/api` to go to that server.

We create a file next to projects `package.json` called `proxy.conf.json` with the content

```
{
    "/api": {
    "target": "http://localhost:3000",
    "secure": false
    }
}
```

You can read more about what options are available here [webpack-dev-server proxy settings](https://webpack.github.io/docs/webpack-dev-server.html#proxy)

and then we edit the `package.json` file's start script to be

```
"start": "ng serve --proxy-config proxy.conf.json",
```

now run it with `npm start`

### Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

### Linting and formatting code

You can lint your app code by running `ng lint`. This will use the `lint` npm script that in generated projects uses `tslint`.

You can modify the these scripts in `package.json` to run whatever tool you prefer.

### Commands autocompletion

To turn on auto completion use the following commands:

For bash:

```
ng completion 1>> ~/.zshrc 2>>&1
source ~/.zshrc
```

For zsh:

```
ng completion 1>> ~/.zshrc 2>>&1
source ~/.zshrc
```

Windows users using gitbash:

```
ng completion 1>> ~/.bash_profile 2>>&1
source ~/.bash_profile
```

### Project assets

You can add any files you want copied as-is to `src/assets/`.

### 3rd Party Library Installation

Simply install your library via `npm install lib-name --save` and import it in your code.

If the library does not include typings, you can install them using npm:

```
npm install d3 --save
npm install @types/d3 --save-dev
```

If the library doesn't have typings available at `@types/`, you can still use it by manually adding typings for it:

```
// in src/typings.d.ts
declare module 'typeless-package';

// in src/app/app.component.ts
import * as typelessPackage from 'typeless-package';
typelessPackage.method();
```

### Global Library Installation

Some javascript libraries need to be added to the global scope, and loaded as if they were in a script tag. We can do this using the `apps[0].scripts` and `apps[0].styles` properties of `angular-cli.json`.

As an example, to use [Boostrap 4](http://v4-alpha.getbootstrap.com/) this is what you need to do:

First install Bootstrap from `npm`:

```
npm install bootstrap@next
```

Then add the needed script files to `apps[0].scripts`:

```
"scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/tether/dist/js/tether.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
    ],
```

Finally add the Bootstrap CSS to the `apps[0].styles` array:

```
"styles": [
        "../node_modules/bootstrap/dist/css/bootstrap.css",
        "styles.css"
    ],
```

Restart `ng serve` if you're running it, and Bootstrap 4 should be working on your app.

### Style Guide

- Please follow official [Angular 2 style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)

- If you think we should have additional styles or modify the Angular2 style guide for our needs, please make a pull request to update this document.

### Writing Unit Tests

- You can find the documentation for writing unit tests here: <https://angular.io/docs/ts/latest/guide/testing.html>
- Check out a full application with unit tests for example here: <http://plnkr.co/edit/hvZNnqelerdtOgtU2MzW?p=preview>

### Before You Commit Checklist

- Rebase master into your branch and check for merge conflicts.

- Format and lint your code.

```
ng lint
```

- Please delete your dist folder and re-run ng serve. Sometimes the html and css changes does not get picked up. By deleting and re-building you make sure to run the latest changes on your local environment.

```
rm -rf dist //On mac
ng serve
```

- Write and run unit tests.

```
ng test
```

### Commit Message Guidelines

How our git commit messages can be formatted leads to **more readable messages** that are easy to follow when looking through the **project history**. But also, we might use the git commit messages to **generate the A360 Presentation change log**.

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

#### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type

Must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build** Changes that affect the build system, CI configuration or external dependencies (example scopes: gulp, broccoli, npm)
- **chore**: Other changes that don't modify `src` or `test` files

#### Scope

The scope could be anything specifying place of the commit change. For example `Compiler`, `ElementInjector`, etc.

#### Subject

The subject contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Further help with scaffolding

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Knowledge Base

- Typescript resources

  1. [LearnXinYminutes](https://learnxinyminutes.com/docs/typescript/)

- Angular2 Resources

  1. [Docs](https://angular.io/docs/ts/latest/)
  2. [Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
  3. [Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
  4. [Typescript Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)

### Helpful Tools

- [Augury - Chrome Dev Tools extension for debugging Angular 2 applications](https://augury.angular.io/)
- [Atom snippets](https://atom.io/packages/angular-2-typescript-snippets)
- [Sublime snippets](https://github.com/orizens/sublime-angular2-snippets)
- [Visual Code snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
