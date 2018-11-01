
# World Food Programme UI Kit (WFP-UI)

  

## **[Living Style Guide & Documentation](https://wfp.org/UIGuide)**


| Branch | Build Status |

| ------ | ----------------------------------------------------------------------------------------------- |

| master | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=master)](https://travis-ci.org/wfp/ui) |

| next | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=next)](https://travis-ci.org/wfp/ui) |

  

## Usage

  

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

  

```bash

import { Breadcrumb, BreadcrumbItem, BreadcrumbHome } from '@wfp/ui';

```

  

Import the CSS

  

```bash

@import '@wfp/ui/assets/css/styles';

```

  

Additional information about the Usage can be found [here](https://wfp.org/UIGuide).

  

### Documentation & list of components available

  

View available Components [here](https://wfp.org/UIGuide). Usage information is available when you click the blue **?** icon in the top right corner of the selected component.

  

## About the WFP UI Guidelines

  

The new WFP UI Kit is based on the [World Food Programme’s Branding Guidance](http://brand.manuals.wfp.org/) WFP's new branding was launched in early 2018 and will be implemented across the organization, strengthening WFP’s brand image through consistent representation.

  

Building on this initiative, the World Food Programme’s User Interface Style Guide emphasizes WFP’s commitment to establish and build the brand.

  

## Purpose

  

The purpose of this project is to create a unified toolkit that is used by UX-designers and developers alike on their projects to ensure all WFP-branded projects are accessible, appealing, and have a consistent look and feel across the board by following WFP’s design and implementation guidelines.

  

The guidelines contained in this guide are to be applied to all WFP digital products (such as: websites, web applications, internal systems and other).

  

By unifiying design elements into reusable components, development will simplify and accelerate the development of these digital products.

  

The Guide is a living document created to meet the needs of WFP’s front-end developers and designers. If there is a Component or Pattern that you need, or you have any other feedback, question or comment please contact us.

  

## Credits

  

The UI Kit is based on:

  

*  [Carbon Components](https://github.com/carbon-design-system/carbon-components)

*  [U.S. Webdesign System](https://designsystem.digital.gov/page-templates/#landing-page)

*  [Sketch Favicon Exporter Template](https://github.com/frederik-jacques/sketch-favicon-exporter-template)

*  [Appnexus Lucid](https://github.com/appnexus/lucid)

*  [FontAwesome](http://fontawesome.io)

  

## Assets


All the logo files can be found in the [UI Assets repository on GitHub](https://github.com/wfp/ui-assets).

### Logos

Currently the logo is available in
  

*  **Colors:** blue, white and black

*  **Fileformat:** svg, png in different sizes

*  **Languages:** arabic, english, spanish, french


The Source files can be found in `sketch/WFP Logos.sketch`.

  
## Favicons


All the logo files can be found in the `wfp-ui/favicons` folder.

  

## For Designers: Sketch Library

The Sketch and Adobe xD library can be used to easily create new User interfaces. [UI Design Kit on GitHub](https://github.com/wfp/ui-design-kit).

You can download it [Sketch App](https://www.sketchapp.com/).



## Development

  

Please refer to the [Contribution Guidelines](./.github/CONTRIBUTING.md) before starting any work.

  

### Using the server

  

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

  

1. Start the server:

  

```

$ yarn storybook

```

  

2. Start the css watcher:

  

```

$ yarn watch:css

```

  

3. Open browser to `http://localhost:9000/`.

  

4. Develop components in their respective folders (`/components` or `/internal`).

  

5. Write stories for your components in `/.storybook`.