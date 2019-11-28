import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { iconAddGlyph, iconSearch } from '@wfp/icons';
import Button from '../Button';
import ButtonSkeleton from '../Button/Button.Skeleton';

const icons = {
  None: 'None',
  'Add with filled circle (iconAddGlyph from `@wfp/ui`)': 'iconAddGlyph',
  'Search (iconSearch from `@wfp/ui`)': 'iconSearch',
};

const iconMap = {
  iconAddGlyph,
  iconSearch,
};

const kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Danger primary button (danger--primary)': 'danger--primary',
  'Ghost button (ghost)': 'ghost',
  'Inverse button (inverse)': 'inverse',
  'Main navigation button (navigation)': 'navigation',
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

storiesOf('Components|Button', module)
  .addParameters({ jest: ['Button-test'] })
  .addDecorator(withKnobs)
  .add('Default', () => {
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
  })
  .add('Sets of Buttons', () => {
    const setProps = props.set();
    return (
      <div>
        <Button kind="secondary" {...setProps}>
          Secondary button
        </Button>
        &nbsp;
        <Button kind="primary" {...setProps}>
          Primary button
        </Button>
      </div>
    );
  })
  .add('skeleton', () => (
    <div>
      <ButtonSkeleton />
      &nbsp;
      <ButtonSkeleton href="#" />
      &nbsp;
      <ButtonSkeleton small />
    </div>
  ));
