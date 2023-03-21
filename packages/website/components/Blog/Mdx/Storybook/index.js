import React from 'react';
import styles from './figma.module.scss';
import { Button, FormGroup, TextInput, TextArea } from '@un/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-solid-svg-icons';
import Image from 'next/image';
import IframeResizer from 'iframe-resizer-react';

import components from '..';

export default function Storybook({ path, img, width, height, ...props }) {
  const src = `http://localhost:9000/${path}&documentation=true`;

  const onResized = (data) => {
    console.log('newData', data);
    setMessageData(data);
  };

  const TwoThreeHQ = {
    provider_name: '23HQ',
    provider_url: 'https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com',
    endpoints: [
      {
        schemes: [
          'https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/*',
        ],
        url: 'https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/*',
      },
    ],
  };
  //  src={src}
  //  http://localhost:9000/?path=/docs/components-ui-elements-button--documentation
  return (
    <div className={styles.storybook}>
      {/*<embed src={src} width="1200"></embed> */}

      <IframeResizer
        log
        src={src}
        style={{ width: '100%', minWidth: '100%' }}
      />

      {/*<Embed
        url="https://5ccbc373887ca40020446347-bysekhynzd.chromatic.com/?path=/story/shadowboxcta--default"
        proxy="https://cors-anywhere.herokuapp.com/"
        providers={[...defaultProviders, TwoThreeHQ]}
  />*/}
    </div>
  );
}
