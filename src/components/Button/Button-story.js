import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { iconAddSolid, iconSearch } from '@wfp/icons';
import Button from '../Button';
import ButtonSkeleton from '../Button/Button.Skeleton';

import readme from './README.md';

const icons = {
  None: 'None',
  'Add with filled circle (iconAddSolid from `@wfp/ui`)': 'iconAddSolid',
  'Search (iconSearch from `@wfp/ui`)': 'iconSearch',
};

const iconMap = {
  iconAddSolid,
  iconSearch,
};

const kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Danger primary button (danger--primary)': 'danger--primary',
  'Ghost button (ghost)': 'ghost',
  'Inverse button (inverse)': 'inverse',
};

const props = {
  regular: () => ({
    className: 'some-class',
    kind: select('Button kind (kind)', kinds, 'primary'),
    disabled: boolean('Disabled (disabled)', false),
    small: boolean('Small (small)', false),
    icon: iconMap[select('Icon (icon)', icons, 'none')],
    iconReverse: boolean('Icon in front (iconReverse)', false),
    onClick: action('onClick'),
    onFocus: action('onFocus'),
  }),
  set: () => ({
    className: 'some-class',
    disabled: boolean('Disabled (disabled)', false),
    small: boolean('Small (small)', false),
    icon: iconMap[select('Icon (icon)', icons, 'none')],
    onClick: action('onClick'),
    onFocus: action('onFocus'),
  }),
};

storiesOf('Buttons', module)
  .addParameters({ jest: ['Button-test'] })
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      const regularProps = props.regular();
      return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button {...regularProps} className="some-class">
            Button
          </Button>
          &nbsp;
          <Button {...regularProps} href="#" className="some-class">
            Link
          </Button>
          &nbsp;
        </div>
      );
    },
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'Sets of Buttons',
    () => {
      const setProps = props.set();
      return (
        <div>
          <Button kind="secondary" {...setProps}>
            Secondary button
          </Button>
          <Button kind="primary" {...setProps}>
            Primary button
          </Button>
        </div>
      );
    },
    {
      info: {
        text: readme,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div>
        <ButtonSkeleton />
        &nbsp;
        <ButtonSkeleton href="#" />
        &nbsp;
        <ButtonSkeleton small />
      </div>
    ),
    {
      info: {
        text: `
          Placeholder skeleton state to use when content is loading.
        `,
      },
    }
  );
