# `examples/html-handlebars`

> How to integrate `@wfp/react` and `@wfp/icons` into a project

> using plain html

## Usage

To run this example, open the `dist/index.html` file in a browser. The example uses the CDN for loading the css and logo files.

## Usinge Handlebars

The template uses [handlebars](http://handlebarsjs.com) to generate the html files. The configuration can be found inside the webpack.config.js, which also includes a template for generating the related Java-Script bundle.

Install handlebars and webpack dependencies

    npm install

Generate new /dist folder

    npm start
