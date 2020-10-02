import { oneOf } from 'prop-types';

// TODO: remove legacy
export const ButtonTypes = {
  buttonKind: oneOf([
    'primary',
    'secondary',
    'accent',
    'danger',
    'ghost',
    'inverse--primary',
    'inverse',
    'danger--primary',
    'tertiary',
    'navigation',
  ]),
};

export const buttonKinds = [
  'primary',
  'secondary',
  'tertiary',
  'accent',
  'danger--primary',
  'danger',
  'ghost',
  'inverse--primary',
  'inverse',
  'navigation',
];
