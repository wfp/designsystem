import React from 'react';
import { iconAdd, iconAddSolid, iconAddOutline } from '@wfp/icons';
import iconsList from '@wfp/icons';
import { storiesOf } from '@storybook/react';
import Icon, { setIconsList } from '../Icon';
import IconSkeleton from '../Icon/Icon.Skeleton';
import SingleComponent from '../../documentation/SingleComponent';


import { withReadme } from 'storybook-readme';
import readme from './README.md';

setIconsList(iconsList);

const props = {
  style: {
    margin: '50px',
  },
  fill: 'black',
  description: 'This is a description of the icon and what it does in context',
  className: 'extra-class',
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

storiesOf('Icon', module)
  .addDecorator(withReadme([readme]))
  .addDecorator(story => <SingleComponent>{story()}</SingleComponent>)
  .addWithInfo(
    'Default',
    `
    Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library
  `,
    () => (
      <div>
        <Icon {...props} icon={iconAdd} />
        <Icon {...props} icon={iconAddSolid} />
        <Icon {...props} icon={iconAddOutline} />
      </div>
    )
  )
  .addWithInfo(
    'Legacy',
    `
    Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library
  `,
    () => (
      <div>
        <Icon name="icon--add" {...props} />
        <Icon name="add--solid" {...props} />
        <Icon name="add--outline" {...props} />
      </div>
    )
  )
  .addWithInfo(
    'Skeleton',
    `
    Icons are used in the product to present common actions and commands. Modify the fill property to change the color of the icon. The name property defines which icon to display. For accessibility, provide a context-rich description with the description prop. For a full list of icon names, see carbondesignsystem.com/style/iconography/library
  `,
    () => (
      <div>
        <IconSkeleton {...propsSkeleton} />
        <IconSkeleton {...propsSkeleton2} />
      </div>
    )
  );
