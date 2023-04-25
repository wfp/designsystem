# @wfp/cli

> Task automation for working with the WFP Design System

## Getting started

To install `@wfp/cli` in your project, you will need to run the following
command using [npm](https://www.npmjs.com/):

```bash
npm install -S @wfp/cli
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add @wfp/cli
```

## Usage

You can install `@wfp/cli` in your project, or use a tool like
[`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)
by running the following command in your project:

```bash
npx @wfp/cli --help
```

The output of the `--help` option is:

```bash
Usage: @wfp/cli [options]

Commands:
  cli ci-check              run CI checks
  cli contribute <command>  get started contributing with WFP
  cli publish <tag>         publish packages that have different versions from
                            the package registry
  cli release [bump]        run the release step for the given version bump
  cli sync [target]         sync files across workspaces

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

## 🙌 Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)! 👀

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
