
# World Food Programme UI Kit (WFP-UI)


Branch  | Build Status
--------|-------------
master  | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=master)](https://travis-ci.org/wfp/ui)
develop | [![Build Status](https://travis-ci.org/wfp/ui.svg?branch=develop)](https://travis-ci.org/wfp/ui)

> Work in progress, not for use at the moment.
> 
## Credits

The UI-Kit will be heavily based on:
>[Carbon Components](https://github.com/carbon-design-system/carbon-components)
>[U.S. Webdesign System](https://designsystem.digital.gov/page-templates/#landing-page)
>[Sketch Favicon Exporter Template](https://github.com/frederik-jacques/sketch-favicon-exporter-template)

## Usage

### List of Available Components

View available Components [here](http://ui.wfp.org). Usage information is available when you click the blue **?** icon in the top right corner of the selected component.

### Usage

Run the following command using [npm](https://www.npmjs.com/):
```bash
npm install @wfp/ui
```
Import a react component
```bash
import { Breadcrumb, BreadcrumbItem, BreadcrumbHome } from '@wfp/ui';
```
Import the css
```bash
@import '@wfp/ui/css/styles';
```
View available React Components [here](http://pydev.wfp.org:8282/). Usage information is available when you click the blue **Show Info** icon in the top right corner of the selected component.
## Logos
All the logo files can be found in the `wfp-ui/logos` folder.
Currently the logo is available in
 - **Colors:** blue, white and black
 - **Fileformat:** svg, png in different sizes
 - **Languages:** arabic, english, spanish, french

The Source files can be found in `sketch/WFP Logos.sketch`.

## Sketch Library
The Sketch Library can be used to easily create new UI in [Sketch App](https://www.sketchapp.com/).
You can download it [Sketch App](https://www.sketchapp.com/).
 
## Favicons
All the logo files can be found in the `wfp-ui/favicons` folder.
The full sizes catalog which has to be added to the header.
```html
<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<meta name="msapplication-TileColor" content="#006CB6">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#006CB6">
```

## Development

Please refer to the [Contribution Guidelines](./.github/CONTRIBUTING.md) before starting any work.

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1. Start the server:

   ```
   $ yarn storybook
   ```

2. Open browser to `http://localhost:9000/`.

3. Develop components in their respective folders (`/components` or `/internal`).

4. Write stories for your components in `/.storybook`.