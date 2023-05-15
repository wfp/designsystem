import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import stylesModule from './codeBlock.module.scss';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { Button } from '@un/react';

const CodeBlock = ({ children }: any) => {
  //return <OrginalCode>{children}</OrginalCode>;
  //if (!children || children.type !== 'code') return null;

  const {
    props: { className, children: code = '' },
  } = children;

  const language = className ? className.replace(/language-/, '') : '';

  const [copiedCode, setCopiedCode] = useState('Copy code');

  const handleCopyCode = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);

    setCopiedCode('Copied!');

    setTimeout(() => {
      setCopiedCode('Copy code');
    }, 2000);
  };

  return (
    <div className={`${stylesModule.code} wfp--code-block`}>
      <Highlight
        {...defaultProps}
        theme={vsDark}
        code={code.trim()}
        language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} ${stylesModule.codeBlock}`}
            style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <Button
        className={stylesModule.copyButton}
        small
        onClick={() => handleCopyCode(code)}
        //style={{ color: `${copiedCode === 'Copied!' ? 'green' : 'red'}` }}
      >
        {copiedCode}
      </Button>
    </div>
  );
};

export default CodeBlock;
