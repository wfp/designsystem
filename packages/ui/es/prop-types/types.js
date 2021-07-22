import { oneOf } from 'prop-types'; // TODO: remove legacy

export var ButtonTypes = {
  buttonKind: oneOf(['primary', 'secondary', 'accent', 'danger', 'ghost', 'inverse--primary', 'inverse', 'danger--primary', 'tertiary', 'navigation'])
};
export var buttonKinds = ['primary', 'secondary', 'tertiary', 'accent', 'danger--primary', 'danger', 'ghost', 'inverse--primary', 'inverse', 'navigation'];
export var notificationtypes = ['info', 'success', 'warning', 'error'];