import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const CodeBlock = ({ children }) => {
  if (!children || children.type !== 'code') return null;

  const {
    props: { className, children: code = '' },
  } = children;

  const language = className ? className.replace(/language-/, '') : '';

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark}
      code={code.trim()}
      language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
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
  );
};

export default CodeBlock;
