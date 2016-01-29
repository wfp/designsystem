# World Food Programme UI (WFP UI)

Branch  | Build Status
--------|-------------
master  | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=master)](https://travis-ci.org/wfp/ui)
develop | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=develop)](https://travis-ci.org/wfp/ui)

_WFP UI_ is a library of components, patterns, and a style guide for WFP-branded websites and web applications.

The purpose of this project is to create a unified toolkit that could be used by designers and developers alike on their projects, by following our design and implementation guidelines, to ensure all WFP-branded projects are accessible, beautiful, and have a consistent look and feel across the board.

These components and patterns follow industry-standard accessibility guidelines for websites and web applications, and are maintained by WFP Communications Division (WFP COM).

## Getting Started
WFP UI provides a complete set of tool to help you either quickly tap into the library of user interface components and patterns available in this repo, by extending your project via Bower package.

To start, user Bower to install WFP UI:

```
$ bower install wfp-ui --save
```

Now, add `wfp-ui` as a dependency to your main SCSS file:

```
@import "bower_components/wfp-ui/scss/wfpui";
```

Or, you can reference the precompiled and minified library directly in your HTML:

```
<link rel="stylesheet" href="bower_components/wfp-ui/dist/css/wfpui.css">
```

We recommend you copy `dist/css/wfpui.css` into your own `css` directory, if you plan on simply linking it from HTML.

> It's best to compile `wfp-ui` directly to your SASS main file, in order to benefit from a **smaller overall file size**, and **having a single CSS file to load and render by the web browser**.
> This is because CSS is considered as a [_render blocking resource_](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css).

## Documentation
WFP UI documentation can be found on our CDN: [http://www.wfp.org/uiguide](http://www.wfp.org/uiguide).

Full docs are also available from this repository, as a ready-to-compile [Jekyll](https://github.com/jekyll/jekyll) site. To compile it yourself, clone the repository to your file system, install NPM dependencies, then run:

```
$ grunt docs-dist
```

Documentation will be compiled to your `dist/docs` directory, where you can browse it using Python SimpleHTTPServer like so:

```
cd dist/docs
sudo python -m SimpleHTTPServer 80
```

## Authors & Contributors
- [Matthew Morek](https://github.com/matthewmorek)
- [James Home](https://github.com/jrah)

Special thanks to [Andrew Holgate](https://github.com/andrewholgate), for preparing Travis CI integration for us.

## Attributions

##### Fonts
Fonts files located in `fonts` directory contain two type families:

- [*Lato*](https://www.google.com/fonts/specimen/Lato), designed by Łukasz Dziedzic;
- [*Aleo*](http://www.fontfabric.com/aleo-free-font/) designed by Alessio Laiso.

Both type families are licensed under [SIL Open Font License 1.1](http://scripts.sil.org/OFL).
