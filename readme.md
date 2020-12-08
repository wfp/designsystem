# World Food Programme UI Kit (WFP-UI)

## **[Click here to visit: Living Style Guide & Documentation](https://wfp.org/UIGuide)**

| Branch | Build Status          |
| ------ | --------------------- |
| master | [![Build Status]()]() |
| v1.5   | [![Build Status]()]() |

## ![Usage](https://cdn.wfp.org/guides/ui/v1.2.0/assets/internal/toolkit.svg 'Usage') Usage

### Installation

Run the following command using [npm](https://www.npmjs.com/):

```bash
npm install @wfp/ui
npm install @wfp/icons
```

or [yarn](https://yarnpkg.com/lang/en/):

```bash
yarn add @wfp/ui
yarn add @wfp/icons
```

Import a react component

```jsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbHome } from '@wfp/ui';
```

Import the CSS

```jsx
import '@wfp/ui/assets/css/styles.css';
```

Additional information about the Usage can be found [here](https://wfp.org/UIGuide).

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

## Development

Please refer to the [Contribution Guidelines](./.github/CONTRIBUTING.md) before starting any work.
Use the `feat/` branches for active development.

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1. Generate new tests

```
yarn test
```

2. Start the server:

```
yarn storybook
```

3. Open browser to `http://localhost:9000/`.
4. Develop components in the `/components` folder. Add the export to `index.js` to include them into the build.
5. Write stories for your components in `/.components` with `-story.js` ending.

### Commits

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) for commit messages and pre-commit hooks for commiting.

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
