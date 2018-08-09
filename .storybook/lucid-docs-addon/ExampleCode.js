import React from 'react';
import ReactDOM from 'react-dom';
import SyntaxHighlighter, {
  registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

const okaidiaTabSpace2 = {
  ...okaidia,
  'code[class*="language-"]': {
    ...okaidia['code[class*="language-"]'],
    tabSize: '2',
  },
};

registerLanguage('jsx', jsx);

class CodepenDefine extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleCodepen = this.handleCodepen.bind(this);
  }

  handleCodepen() {
    const formDOMNode = ReactDOM.findDOMNode(this.form);
    if (formDOMNode) {
      formDOMNode.submit();
    }
  }

  render() {
    return (
      <div onClick={this.handleCodepen}>
        <form
          ref={ref => {
            this.form = ref;
          }}
          style={{ display: 'none' }}
          action="https://codepen.io/pen/define"
          method="POST"
          target="_blank">
          <input
            type="hidden"
            name="data"
            value={JSON.stringify(this.props.data)}
          />
        </form>
        {this.props.children}
      </div>
    );
  }
}

const ExampleCode = ({ code, hasCodepen, packageJson }) => {
  return (
    <section
      style={{
        height: '100%',
      }}>
      <div style={{ height: '100%' }}>
        {hasCodepen && (
          <CodepenDefine
            data={{
              title: 'Lucid Example',
              description: 'This is code from example.',
              layout: 'right',
              editors: '0010',
              html: '<div id="react-root"></div>',
              js:
                code
                  .replace(/\s*import _ from 'lodash';\s*/, '')
                  .replace(
                    /\s*import (\{\s*(\s|\S)+\s*\}) from ('|")(\.\.\/)*(src\/)?index(\.js)?('|");/,
                    'const $1 = Lucid;'
                  )
                  .replace(' as ', ': ')
                  .replace(/\s*import React from 'react';\s*/, '')
                  .replace(
                    /\s*import createClass from 'create-react-class';\s*/,
                    ''
                  )
                  .replace('createClass', 'createReactClass')
                  .replace('export default', 'const Example =') +
                `
ReactDOM.render(
  <Example />,
  document.querySelector('#react-root')
);`,
              js_pre_processor: 'babel',
              head:
                '<style>html,body {font-family: "Helvetica Neue", Helvetica, Arial, Sans-Serif;}</style>',
              css_external: encodeURI(
                `https://unpkg.com/lucid-ui@${
                  packageJson.version
                }/dist/lucid.css`
              ),
              js_external: [
                'https://unpkg.com/react@16/umd/react.development.js',
                'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
                `https://unpkg.com/create-react-class@${
                  packageJson.dependencies['create-react-class']
                }/create-react-class.min.js`,
                `https://unpkg.com/lucid-ui@${
                  packageJson.version
                }/dist/lucid.min.js`,
                `https://unpkg.com/lodash@${
                  packageJson.dependencies.lodash
                }/lodash.min.js`,
              ]
                .map(encodeURI)
                .join(';'),
              js_module: true,
            }}>
            <img
              style={{
                cursor: 'pointer',
                position: 'absolute',
                top: 42,
                right: 12,
              }}
              src="//s.cdpn.io/3/cp-arrow-right.svg"
              width={40}
              height={40}
              title="Open in CodePen"
            />
          </CodepenDefine>
        )}
        <div
          style={{
            height: '100%',
          }}>
          <SyntaxHighlighter
            language="jsx"
            style={okaidiaTabSpace2}
            customStyle={{
              fontSize: 12,
              height: '100%',
              margin: 0,
            }}>
            {code.replace(/(\.\.\/)*(src\/)?index(\.js)?/, 'lucid-ui')}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
};

ExampleCode.defaultProps = {
  hasCodepen: false,
  packageJson: {
    version: '2.31.2',
    dependencies: {
      'create-react-class': '^15.6.2',
      lodash: '^4.11.0',
    },
  },
};

export default ExampleCode;
