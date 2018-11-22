import { oneOf } from 'prop-types';

export const ButtonTypes = {
  buttonKind: oneOf([
    'primary',
    'secondary',
    'danger',
    'ghost',
    'inverse',
    'danger--primary',
    'tertiary',
  ]),
};
