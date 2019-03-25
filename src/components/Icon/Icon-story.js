import React from 'react';
import { iconAdd, iconAddGlyph, iconAddOutline } from '@wfp/icons';
import iconsList from '@wfp/icons';
import { storiesOf } from '@storybook/react';

import { withKnobs, select, text } from '@storybook/addon-knobs';
import Icon from '../Icon';
import IconSkeleton from '../Icon/Icon.Skeleton';

const icons = {
  'Add (iconAdd from `@wfp/icons`)': 'iconAdd',
  'Add with filled circle (iconAddGlyph from `@wfp/icons`)': 'iconAddGlyph',
  'Add with circle (iconAddOutline from `@wfp/icons`)': 'iconAddOutline',
};

const iconMap = {
  iconAdd,
  iconAddGlyph,
  iconAddOutline,
};

/* const customIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    <path d="M5 0h6v2H5zM2 3v3h1v10h10V6h1V3H2zm5 11H5V7h2v7zm4 0H9V7h2v7z" />
  </svg >`; */

const customIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16">
    <path d="M5 0h6v2H5zM2 3v3h1v10h10V6h1V3H2zm5 11H5V7h2v7zm4 0H9V7h2v7z" />
  </svg>
);

const props = {
  default: () => {
    const selectedIcon = select('The icon (icon (regular))', icons, 'iconAdd');
    return {
      style: {
        margin: '50px',
      },
      icon: iconMap[selectedIcon],
      role: text('ARIA role (role)', ''),
      fill: text('The SVG `fill` attribute (fill)', 'grey'),
      fillRule: text('The SVG `fillRule` attribute (fillRule)', ''),
      width: text('The SVG `width` attribute (width)', ''),
      height: text('The SVG `height` attribute (height)', ''),
      description: text(
        'The a11y text (description)',
        'This is a description of the icon and what it does in context'
      ),
      iconTitle: text('The content in <title> in SVG (iconTitle)', ''),
      className: 'extra-class',
    };
  },
  custom: () => {
    const selectedIcon = select('The icon (icon (regular))', icons, 'iconAdd');
    return {
      style: {
        margin: '50px',
      },
      icon: {
        width: '10',
        height: '10',
        viewBox: '0 0 10 10',
        svgData: customIcon,
      },
      role: text('ARIA role (role)', ''),
      fill: text('The SVG `fill` attribute (fill)', 'grey'),
      fillRule: text('The SVG `fillRule` attribute (fillRule)', ''),
      width: text('The SVG `width` attribute (width)', ''),
      height: text('The SVG `height` attribute (height)', ''),
      description: text(
        'The a11y text (description)',
        'This is a description of the icon and what it does in context'
      ),
      iconTitle: text('The content in <title> in SVG (iconTitle)', ''),
      className: 'extra-class',
    };
  },
};

const propsSkeleton = {
  style: {
    margin: '50px',
  },
};

const propsSkeleton2 = {
  style: {
    margin: '50px',
    width: '24px',
    height: '24px',
  },
};

storiesOf('Components|Icon', module)
  .addParameters({
    info: {
      source: false,
      inline: true,
    },
  })
  .addDecorator(withKnobs)
  .add('Default', () => (
    <div>
      <Icon {...props.default()} />
    </div>
  ))
  .add('Custom Icon (Draft)', () => (
    <div>
      <Icon {...props.custom()} />
    </div>
  ))
  .add('Skeleton', () => (
    <div>
      <IconSkeleton {...propsSkeleton} />
      <IconSkeleton {...propsSkeleton2} />
    </div>
  ));
