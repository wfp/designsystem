import React from 'react';
import { styled } from '@storybook/theming';
import { Link } from '@storybook/components'; //'../../typography/link/link';

const NoControlsWrapper = styled.div(({ theme }) => ({
  background: theme.background.warning,
  color: theme.color.darkest,
  padding: '10px 15px',
  lineHeight: '20px',
  boxShadow: `${theme.appBorderColor} 0 -1px 0 0 inset`,
}));

export const NoControlsWarning = () => (
  <NoControlsWrapper>
    This story is not configured to handle controls.&nbsp;
    <Link
      href="https://github.com/storybookjs/storybook/blob/next/addons/controls/README.md#writing-stories"
      target="_blank"
      cancel={false}>
      Learn how to add controls »
    </Link>
  </NoControlsWrapper>
);
