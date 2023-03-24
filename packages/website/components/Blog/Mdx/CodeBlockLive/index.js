// src/components/CodeBlock.js
import React, { useEffect, useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import stylesModule from './codeBlockLive.module.scss';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Storybook from '../Storybook';
import { DoUse, DoNotUse } from '../DoUse';
import { MDXProvider } from '@mdx-js/react';
import compile from '@mdx-js/mdx';
import MDX from '@mdx-js/runtime';
import components from '../';

import vsDark, { styles } from 'prism-react-renderer/themes/vsDark';

import * as unComponents from '@un/react';
import * as unHumanitarianIcons from '@un/humanitarian-icons-react';
import * as icons from '@un/icons-react';
import { Button, Empty } from '@un/react';
import { useMDXComponents } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';

console.log('unHumanitarianIcons', unHumanitarianIcons);

const CodeBlockLive = (props) => {
  const [compiledMdx, setCompiledMdx] = useState('');
  const { children, className = '', live, noInline, source } = props;
  console.log('children', props, children);

  const code = source ? source : children ? children.trim() : '';
  /*const compileMdx = async (code) => {
    const compiled = await compile(code);
    setCompiledMdx(compiled);
  };*/

  /*useEffect(() => {
    compileMdx(code);
  }, [code]);*/

  const language = props.language || className.replace(/language-/, '');

  const [copiedCode, setCopiedCode] = useState('Copy code');

  const cleanCode = (code) => {
    return `${code}` // don't modify the original value
      .replaceAll(/^import \{[^{]+\} from .+$\n/gm, '') // import { x, y } from "z"
      .replaceAll(/^import \* as \S+ from .+$\n/gm, '') // import * as abc from "z"
      .replaceAll(/: \S+ = /g, ' = '); // let a: string = "something"
  };

  const handleCopyCode = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);

    setCopiedCode('Copied!');

    setTimeout(() => {
      setCopiedCode('Copy code');
    }, 2000);
  };

  if (live) {
    const scope = {
      ...unComponents,
      ...unHumanitarianIcons,
      ...icons,
      useState,
      Storybook,
      Empty,
      DoUse,
      DoNotUse,
    };

    return (
      <div className={stylesModule.editor}>
        <LiveProvider
          code={code}
          scope={scope}
          theme={vsDark}
          noInline={noInline}
          transformCode={cleanCode}>
          {language === 'mdx' || language === 'md' ? (
            <div className={stylesModule.preview}>
              <MDXProvider components={components}>
                <MDX>{code}</MDX>
              </MDXProvider>
            </div>
          ) : (
            <LivePreview className={stylesModule.preview} />
          )}
          <div className={stylesModule.liveEditor}>
            <h3> Editable Example</h3>
            <LiveEditor theme={vsDark} />
          </div>
          <LiveError />
        </LiveProvider>
      </div>
    );
  }
  return (
    <div
      className={`${stylesModule.code} wfp--code-block ${
        source ? stylesModule.previewWithSource : ''
      }`}>
      {source && <div className={stylesModule.preview}>{children}</div>}
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={vsDark}>
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
export default CodeBlockLive;

export function Pre({ live, noInline, children, ...props }) {
  if (React.isValidElement(children) && children.type.name === 'code') {
    return (
      <div {...props}>
        <CodeBlockLive live={live} noInline={noInline} {...children.props} />
      </div>
    );
  }
  console.log('children', children);
  // wfp--story__code
  return <pre {...props}>{children}</pre>;
}

export function CodeBlock(params) {
  console.log('paramsparamsparams', params);
  return <CodeBlockLive {...params} />;
}
