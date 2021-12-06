import React from 'react';
import { Story, List, ListItem } from '../../src';

export default function HelpUsImproveText() {
  return (
    <Story>
      <h3>Help us improve!</h3>
      <List kind="bullets">
        <ListItem>
          If you are <b>running into an issue</b>, please{' '}
          <a href="https://github.com/wfp/ui/issues" target="_blank">
            open an issue on GitHub
          </a>
          .
        </ListItem>
        <ListItem>
          If you have <b>any question about the WFP UI Kit</b>, please{' '}
          <a href="mailto:global.uikit@wfp.org">contact the team</a>.
        </ListItem>
      </List>
    </Story>
  );
}
