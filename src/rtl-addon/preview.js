import addons from '@storybook/addons';
import { setTextDirection } from './utils';
import { INITIALIZE_EVENT_ID, UPDATE_EVENT_ID } from './constants';

function handleUpdateEvent({ direction }) {
  setTextDirection(direction);
}

export function initialize(options = {}) {
  const channel = addons.getChannel();
  channel.on(UPDATE_EVENT_ID, handleUpdateEvent);
  channel.emit(INITIALIZE_EVENT_ID);
}
