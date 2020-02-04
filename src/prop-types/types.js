import { oneOf } from 'prop-types';

// TODO: remove legacy
export const ButtonTypes = {
  buttonKind: oneOf([
    'primary',
    'secondary',
    'accent',
    'danger',
    'ghost',
    'inverse',
    'danger--primary',
    'tertiary',
  ]),
};

export const ButtonKinds = [
  'primary',
  'secondary',
  'accent',
  'danger',
  'ghost',
  'inverse',
  'danger--primary',
  'tertiary',
];
