### How to create your own design system?

#### Creating icons or pictograms

#### Create Design System

Create Design System from UN Core is a comfortable environment for building a design system React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 14.0.0 and yarn >= 2.0 on your machine. To create a project, run:

```
npx create-design-system my-design-system
cd my-design-system
yarn
yarn start
```

### Packages

We are using `yarn` and `lerna` instead of npm since the UN Core supports a mono repository structure. Feel free to change the structure of your implementation.

- `styles` (UN Core components css and your custom css)
- `themes` (customize tokens used in your design system)
- `react` (UN Core components and your own components & Storybook documentation)
- `fonts`

### Helper

#### Icons & Pictograms

For creating a icon or pictogram library see here. TODO: Add link here

### Figma exporter

- colorExporter TODO: Add link here

#### Release your design system

Lerna is a tool for managing JavaScript projects with multiple packages. Make sure you are logged in on npm so it can release the packages inside your namespace.

###

```
yarn build
lerna publish
```

This will create the following packages inside your npm space:

- `@your-design-system/styles`
- `@your-design-system/react`
- `@your-design-system/fonts`

#### Release your Documentation

After running `yarn build` a static documentation will be generated inside `packages/react/storybook-static`. You can host this folder on any static file hosting service (like AWS S3).
