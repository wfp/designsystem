import React, { FC } from 'react';
import { addParameters } from '@storybook/react';
import './styles.scss';

//export { globalTypes, decorators } from '@unitednations/ui/.storybook/preview';

// import { DocsPage } from '@unitednations/ui/.storybook/blocks/DocsPage';
// import { DocsContainer } from '@unitednations/ui/.storybook/blocks/DocsContainer';

addParameters({
  docs: {
    // container: DocsContainer,
    // page: DocsPage,
  },
  viewMode: 'docs',
}); // or global addParameters

export const parameters = {
  controls: { expanded: true },
  docs: {
    // theme: theme,
  },
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
      title: 'Documentation',
    },
    canvas: { title: 'Code', hidden: false },
  },
  options: {
    storySort: {
      order: [
        'Getting started',
        ['Intro', 'Installing the Design Systemm'],
        'Documentation',
        'Templates',
        'Components',
      ],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ltr', title: 'left-to-right' },
        { value: 'rtl', title: 'right-to-left' },
      ],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const { locale, theme } = context.globals;
  document.body.classList.remove(
    `wfp--theme-${theme === 'light' ? 'dark' : 'light'}`
  );
  document.body.classList.add(`wfp--theme-${theme}`);
  return (
    <div
      className={`wfp--theme-${theme} wfp--theme-${locale}`}
      dir={locale === 'rtl' ? 'rtl' : null}>
      <Story {...context} />
    </div>
  );
};
export const decorators = [withThemeProvider];
