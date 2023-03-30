import React from 'react';
import styles from './figma.module.scss';
import IframeResizer from 'iframe-resizer-react';

export default function Storybook({ path }: any) {
  const src = `http://localhost:9000/${path}&documentation=true`;

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
