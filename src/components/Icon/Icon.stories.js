import React from 'react';
import markdown from './README.mdx';
import Icon from '.';
import { iconAdd} from '@wfp/icons';

export default {
  title: 'Components/UI Elements/Icon',
  component: Icon,
  parameters: {
    componentSubtitle: 'Component',
    status: 'released',
    mdx: markdown,
  },
};

export const Regular = (args) => <Icon {...args} />;

Regular.args = {
  icon: iconAdd,
};


const iconsourcecode = `
import { Icon  } from "@wfp/ui";
import { iconAdd} from '@wfp/icons';

<Icon icon={iconAdd} />
`

Regular.story = {
  parameters: {
    docs: {
      source:{
        code: iconsourcecode
      }
    },
  },
};
