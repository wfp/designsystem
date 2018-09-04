
# `examples/create-react-app`

> See how to integrate `@wfp/ui` and `@wfp/icons` into a project
> bootstrapped with `create-react-app`

## Usage

To run this example, all you need to do is `cd` into the directory, run `yarn install`, and then `yarn start`.

## Deviations from vanilla `create-react-app`

Unfortunately, `create-react-app` doesn't support `.scss` files out-of-the-box, so in this example we've had to run the `yarn eject` command in order to gain access to the webpack configuration for both development and production environments.

The most notable change is adding two dependencies, `node-sass` and `sass-loader`, and adding them to the pre-existing loader that handles `.css` files.

## Credits

Forked from [Carbon Components](https://github.com/carbon-design-system/carbon-components-react)