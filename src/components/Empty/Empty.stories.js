import React from 'react';
import markdown from './README.mdx';
import Empty from '.';
import Button from '../Button';

export default {
  title: 'Components/UI Elements/Empty',
  component: Empty,
  parameters: {
    componentSubtitle: 'Component',
    status: 'experimental',
    mdx: markdown,
  },
};

export const Regular = (args) => <Empty {...args} />;

Regular.args = {
  title: 'No entries found',
  children: `You haven't yet created an entry`,
  kind: 'large',
  icon: (
    <img
      alt="Moving van"
      src={`${process.env.STORYBOOK_INTERNAL_ASSETS}illustrations/moving-van.svg`}
    />
  ),
  button: <Button kind="accent">New entry</Button>,
};

const emptysourcecode = `
import { Empty, Button  } from "@wfp/ui";

<Empty
  button={<Button kind="accent">New entry</Button>}
  icon={<img alt="Moving van" src="../illustrations/moving-van.svg"/>}
  kind="large"
  title="No entries found"
>
  You haven't yet created an entry
</Empty>
`;
Regular.story = {
  parameters: {
    docs: {
      source: {
        code: emptysourcecode,
      },
    },
  },
};
