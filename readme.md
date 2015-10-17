# World Food Programme UI (WFP UI)

Branch  | Build Status
--------|-------------
master  | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=master)](https://travis-ci.org/wfp/ui)
develop | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=develop)](https://travis-ci.org/wfp/ui)

WFP UI is a library of components, patterns, and a style guide for WFP-branded websites and web applications.

The purpose of this project is to create a unified toolkit that could be used by designers and developers alike on their projects, by following our design and implementation guidelines, to ensure all WFP-branded projects are accessible, beautiful, and have a consistent look and feel across the board.

These components and patterns follow industry-standard accessibility guidelines for websites and web applications, and are maintained by WFP Communications Division (WFP COM).

## Documentation
WFP UI documentation can be found on our CDN: [http://cdn.wfp.org/brand/ui](http://cdn.wfp.org/brand/ui).

Full docs are also available in this repository, as an uncompiled [Jekyll](https://github.com/jekyll/jekyll) site. To compile it yourself, follow [Getting Started][#getting-started] section.

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
<link rel="stylesheet" href="bower_components/wfp-ui/dist/wfpui.css">
```

We recommend you copy `dist/wfpui.css` into your own `css` directory, if you plan on simply linking it from HTML.

> It's best to compile `wfp-ui` directly to your SASS main file, in order to benefit from a **smaller overall file size**, and **having a single CSS file to load and render by the web browser**.
> This is because CSS is considered as a [_render blocking resource_](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css).

## Authors
- [Matthew Morek](https://github.com/matthewmorek)
- [James Home](https://github.com/jrah)

## Attributions

##### Fonts
Fonts files located in `fonts` directory contain two type families:

- [*Lato*](https://www.google.com/fonts/specimen/Lato), designed by Łukasz Dziedzic;
- [*Aleo*](http://www.fontfabric.com/aleo-free-font/) designed by Alessio Laiso.

Both type families are licensed under [SIL Open Font License 1.1](http://scripts.sil.org/OFL).

##### PureCSS
The entire framework is based on [PureCSS](http://purecss.io) by Yahoo! Inc., and distributed under [Yahoo BSD License](https://github.com/yahoo/pure-site/blob/master/LICENSE.md).
