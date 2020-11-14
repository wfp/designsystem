import React from 'react';
import { Story, List, ListItem } from '../src';

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
          If you have **any question about the WFP UI Kit**, please{' '}
          <a href="mailto:global.uikit@wfp.org">contact the team</a>.
        </ListItem>
      </List>
    </Story>
  );
}
/*

TODO: add design switcher
## Help us improve!
- If you are **running into a technical issue**, please [open an issue on GitHub](https://github.com/wfp/ui/issues).
- If you are **running into a design issue**, please [open an issue on GitHub](https://github.com/wfp/ui-design-kit/issues) or comment on the library directly ([Sketch](https://www.sketch.com/s/421befd7-29f6-4fe9-9dae-7d2bce93e1af), AdobeXd).
*/
