import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import FormHint from '.';
import TextInput from '../TextInput';

export default {
  title: 'Forms/FormHint',
  component: FormHint,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => (
  <label className="wfp--label" htmlFor="input">
    The Label <FormHint {...args} />
  </label>
);

Regular.args = {
  children: 'The hint text',
};

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};

export const Input = (args) => (
  <TextInput
    labelText={
      <>
        The label
        <FormHint>
          A longer description. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est{' '}
        </FormHint>
      </>
    }
    helperText="The helper text provides additional information"
  />
);
