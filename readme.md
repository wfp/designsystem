# UN Core (World Food Programme UI Kit) (WFP-UI)

## **[Click here to visit: Living Style Guide & Documentation](https://wfp.org/UIGuide)**

#### WARNING: This branch is experimental and in current development. Things could easily break!

## ![Usage](https://cdn.wfp.org/guides/ui/v1.2.0/assets/internal/toolkit.svg 'Usage') Usage

### Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @un/react
npm install @un/icons
```

or [yarn](https://yarnpkg.com/lang/en/):

```bash
yarn add @un/react
yarn add @un/icons
```

Import a react component

```jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbHome } from '@un/react';
```

Import the CSS

```jsx
import '@un/react/assets/css/styles.css';
```

Additional information about the Usage can be found [here](https://wfp.org/UIGuide).

### Development

Please refer to the [Contribution Guidelines](./.github/CONTRIBUTING.md) before starting any work.
Use the `feat/` branches for active development.

Clone the development branch for the un-core monorepo.

The project is using a `lerna/yarn` mono repository for development. Make sure you have [yarn](https://yarnpkg.com/) installed globally on your machine.

```bash
git clone --branch un-core-v1 https://github.com/wfp/designsystem.git
yarn install
yarn build
```

For developing on Windows please follow this guide: https://github.com/carbon-design-system/carbon/blob/b5d615e05bc1c062337e8aca3a84e25a6f49b559/docs/guides/setup/windows.md

### Use Figma extract

Use figma-connect to extract svgs and tokens from Figma. The documentation to set it up can be found in /packages/figma-connect.
TODO: improve documentation

### Usage of alpha versions in your project

Install the latest alpha versions to use the Design System Alpha within your project

```bash
npm install @un/react@alpha @un/icons@alpha  @un/icons-react@alpha  @un/layout@alpha  @un/styles@alpha  @un/themes@alpha  @un/type@alpha
```

### Upgrade to 2.0 for existing solutions

In version 2.0 some paths will change due to the new monorepo architecture which is inline with Carbon Design System.

- `<Icon icon={iconName} />` becomes `<IconName />` imported from `import { IconName } from @un/icons-react``
- `import { Component } from "@un/react"` becomes `import { Component } from "@un/react"`
- `@import '@un/react/scss/globals/scss/styles.scss';` becomes `@import '@un/TODO:DEFINEPACKAGENAME';"`
- Multiple variables like `$ui-01` becomes `$layer` to provide better readability. A full list can be found here. TODO:ENTERURLTOCOLOURS
- `inputRef` is deprecated. Use `ref` instead.

### Packages

All packages can be found in `packages/`.

- [cli](/packages/cli): CLI tools for executing different tasks
- `figma-connect`: Tool for downloading assets and color values from your Figma library
- `humanitarian-icons`: OCHA humanitarian icons customized by the Publications Unit of WFP
- `humanitarian-icons-react`: humanitarian icons for react.js usage
- `icon-build-helper`: helper library to generate icons and pictograms for different usages
- `layout`: breakpoints, spacings, etc.
- `icons`: icons used by the components
- `icons-react`: icons for react.js usage
- ~~`colors` no longer used!~~
- `styles`: all components styles
- `themes`: theming (colors, etc.)
- `type`: typescales
- `react`: react components

`WFP digital design system` packages can be found in `wfp/` (temporary) and are also an example for customizing the UN Core to your needs.

- `logos`: Logos used by WFP
- `fonts`: All Fonts currently used by WFP
- `react`: react components using the UN core with WFP customizations
- `styles`: all components styles with WFP customizations (also includes type and layout overrides if needed)
- `themes`: all WFP themes (white, dark, field)
- `pictograms`: pictogram icons
- `pictograms-react`: pictogram icons for react.js usage

### How to load the css

Import a sass file from a single source to have all basic styles and the theme available.

`styles` to import all component styles and `themes` with

```scss
// scss/ui.scss
// Generates global stylesheet containing the styles and theme
$css--variables: true;
$css--reset: true;
$css--body: true;
@use "./meta" as meta;
@use "@un/styles/scss/themes";
@use "@un/styles/scss/theme" with (
  $theme: meta.$carbon--theme--wfp
);
```

When using css-modules with scss for your own components you can create a helper file to forward the needed mixins and variables.

```scss
// scss/meta.scss file
// Forward the needed tools to your css-module
@forward "@un/styles/scss/breakpoint";
@forward "@un/styles/scss/motion";
@forward "@un/styles/scss/spacing";
@forward "@un/styles/scss/type";
@forward "@un/styles/scss/utilities/convert";

// Forward the theme tokens
@import '@un/themes/scss';
```

```scss
// component.module.scss
// Uses the UN Core mixins and variables
@use "scss/meta" as *;

.element {
    background: $button-primary;
    @include breakpoint-up(md) {
        background: $button-secondary;
    }
}

### UN Core Examples

All Examples can be found in `wfp/`.

### Documentation & list of components available

View available Components [here](https://wfp.org/UIGuide). Usage information is available when you click the blue **Show Info** icon in the top right corner of the selected component.

## ![About](https://cdn.wfp.org/guides/ui/v1.2.0/assets/internal/branding.svg 'About') About the WFP UI Guidelines

The new WFP UI Kit is based on the [World Food Programme’s Branding Guidance](http://brand.manuals.wfp.org/) WFP's new branding was launched in early 2018 and will be implemented across the organization, strengthening WFP’s brand image through consistent representation.

Building on this initiative, the World Food Programme’s User Interface Style Guide emphasizes WFP’s commitment to establish and build the brand.

## ![Purpose](https://cdn.wfp.org/guides/ui/v1.2.0/assets/internal/usability.svg 'Purpose') Purpose

The purpose of this project is to create a unified toolkit that is used by UX-designers and developers alike on their projects to ensure all WFP-branded projects are accessible, appealing, and have a consistent look and feel across the board by following WFP’s design and implementation guidelines.

The guidelines contained in this guide are to be applied to all WFP digital products (such as: websites, web applications, internal systems and other).

By unifiying design elements into reusable components, development will simplify and accelerate the development of these digital products.

The Guide is a living document created to meet the needs of WFP’s front-end developers and designers. If there is a Component or Pattern that you need, or you have any other feedback, question or comment please contact us.

## Credits

The UI Kit is based on:

- [Carbon Components](https://github.com/carbon-design-system/carbon-components)

* [U.S. Webdesign System](https://designsystem.digital.gov/page-templates/#landing-page)

- [Sketch Favicon Exporter Template](https://github.com/frederik-jacques/sketch-favicon-exporter-template)

* [Appnexus Lucid](https://github.com/appnexus/lucid)

- [FontAwesome](http://fontawesome.io)

## Assets

All the logo files can be found in the [UI Assets repository on GitHub](https://github.com/wfp/ui-assets).

### Logos

Currently the logo is available in

- **Colours:** blue, white and black

* **Fileformat:** svg, png in different sizes

- **Languages:** arabic, english, spanish, french

The Source files can be found in https://github.com/wfp/ui-assets.

## Favicons

All the logo files can be found in https://github.com/wfp/ui-assets.

## For Designers: Sketch Library

The [Sketch App](https://www.sketchapp.com/) and [Adobe xD](https://www.adobe.com/en/products/xd.html) library can be used to easily create new User interfaces.

The downloads are available here: [UI Design Kit on GitHub](https://github.com/wfp/ui-design-kit).

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1. Generate new tests

```

npm run test

```

2. Start the server:

```

npm run storybook

```

3. Open browser to `http://localhost:9000/`.
4. Develop components in the `/components` folder. Add the export to `index.js` to include them into the build.
5. Write stories for your components in `/.components` with `.stories.js` or `stories.mdx` ending.

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org) for commit messages and pre-commit hooks for commiting.

Make sure your commit does not produce any errors while checking:

- ESlint
- jest tests
- correct commit message

### Testing

Use jest for testing the components. Once commited the branches will be also tested on [Travis CI](https://travis-ci.org/wfp/ui).

```

npm run test

```

### Deployment

The UI Kit uses Azure Devops and [semantic-release](https://github.com/semantic-release/semantic-release) for automate versioning and CHANGELOG generation.

#### npm release

- Commits on the `master` branch will be released as `@lastest` if a relevant commit is included (e.g. feat, fix, perf, breaking)
- Commits on `next` branch will be released as `@next` if a relevant commit is included

### Generate alpha release

```

npm run release -- --prerelease alpha
npm publish --tag alpha

or
git push --follow-tags origin next && npm publish --tag alpha

```

### Generate full release

```

npm run release
npm publish

```

### Releasing Storybook (documentation) to AWS S3

Create a new build for the documentation and copy the `assets` and `docs` folder manually to [WFP`s AWS S3 instance](https://cdn.wfp.org/guides/ui/) following the naming scheme (for example: v1.2.1).

```

npm run build:storybook

```

Edit the `website-redirect-location` meta tag of `index.html` to point [wfp.org/UIGuide](https://wfp.org/UIGuide) to the latest documentation folder. This can be done with [MountainDuck](https://mountainduck.io/).

Edit the first line of `assets/depreciation-warning.html` to point to the latest version of the UI Kit.

Clear the Server cache with [Cloudfront Purge Tool](https://chrome.google.com/webstore/detail/cloudfront-purge-tool).

```

```

```
