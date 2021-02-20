import React from 'react';
import markdown from './README.mdx';
import ModalWrapper from '.';

export default {
  title: 'Components/Content Related/ModalWrapper',
  component: ModalWrapper,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <ModalWrapper {...args}>{args.children}</ModalWrapper>
);

Regular.args = {
  buttonTriggerText: 'Open modal',
  children:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.',
  modalLabel: 'Modal label',
  modalHeading: 'Modal heading',
  modalText: 'Modal text',
};

export const PassiveModal = (args) => (
  <ModalWrapper {...args}>This section is the body</ModalWrapper>
);

PassiveModal.args = {
  buttonTriggerText: 'Open modal',
  passiveModal: true,
};

const desc = `
 \`PassiveModal\` presents information the user needs to be aware of concerning their current workflow. Contains no actions for the user to take..
`;

PassiveModal.story = {
  parameters: {
    docs: {
      storyDescription: desc,
    },
  },
};

export const ModalWithHeading = (args) => (
  <ModalWrapper {...args}>This section is the body</ModalWrapper>
);

ModalWithHeading.args = {
  buttonTriggerText: 'Open modal',
  modalHeading: 'Header Text',
  withHeader: true,
};

const description = `
 \`withHeader\` property when applied adds header text to modal.
`;

ModalWithHeading.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const ModalWithLabel = (args) => (
  <ModalWrapper {...args}>This section is the body</ModalWrapper>
);

ModalWithLabel.args = {
  buttonTriggerText: 'Open modal',
  modalLabel: 'modal Label',
  withHeader: true,
};

const describe = `
 \`withLabel\` property when applied adds a Label text to modal.
`;

ModalWithLabel.story = {
  parameters: {
    docs: {
      storyDescription: describe,
    },
  },
};

export const Disabled = (args) => (
  <ModalWrapper {...args}>This section is the body</ModalWrapper>
);

Disabled.args = {
  buttonTriggerText: 'Open modal',
  disabled: true,
};

const disablemsg = `
 \`withLabel\` property set the modal trigger button to be disabled/non-interactive.
`;

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: disablemsg,
    },
  },
};
