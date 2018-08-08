import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import marksy from 'marksy/components';
import PropTypes from './PropTypes';
import { stripIndent } from './util';

import SyntaxHighlighter, {
	registerLanguage,
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import json from 'react-syntax-highlighter/languages/prism/json';
import coy from 'react-syntax-highlighter/styles/prism/coy';

const coyCustom = {
	...coy,
	'code[class*="language-"]': {
		...coy['code[class*="language-"]'],
		tabSize: '2',
	},
	'pre[class*="language-"]': {
		...coy['pre[class*="language-"]'],
		backgroundColor: '',
		fontSize: 12,
	},
};

registerLanguage('jsx', jsx);
registerLanguage('json', json);

const compile = marksy({
	createElement: React.createElement,
	highlight: (language, code) =>
		ReactDOMServer.renderToStaticMarkup(
			<SyntaxHighlighter language={language || 'jsx'} style={coyCustom}>
				{code}
			</SyntaxHighlighter>
		),
	elements: {
		p: props => <p {...props} style={{ margin: '4px 0' }} />,
	},
});

const styles = {
	divider: {
		backgroundColor: 'rgb(236,236,236)',
		height: 1,
		border: 'none',
		margin: '18px 0px -11px',
	},
	childComponent: {
		backgroundColor: 'rgb(247,247,247)',
		margin: '10px 0px 0px 10px',
		padding: 6,
	},
	name: {
		fontWeight: 'bold',
	},
	headerText: {
		backgroundColor: 'white',
		paddingLeft: 4,
		paddingRight: 4,
		marginLeft: 6,
		fontWeight: 'bold',
		fontSize: 'smaller',
		color: '#999',
	},
	displayName: {
		marginLeft: '.5em',
		fontSize: 'smaller',
		fontWeight: 'normal',
	},
};

const ChildComponent = ({
	name,
	displayName,
	path,
	description,
	props,
	childComponents,
	isPrivate,
}) => {
	const childComponentName = _.isEmpty(path) ? name : path.join('.');
	return (
		<section style={styles.childComponent}>
			<div style={styles.name}>
				{childComponentName}
				{!isPrivate &&
					childComponentName !== displayName && (
						<span style={styles.displayName}>(see {displayName})</span>
					)}
			</div>
			<div>{compile(description).tree}</div>
			<PropTypes showIndex={false} props={props} />
		</section>
	);
};

const ChildComponents = ({ childComponents }) => {
	return (
		<section>
			<hr style={styles.divider} />
			<div>
				<span style={styles.headerText}>Child Components</span>
			</div>
			{!_.isEmpty(childComponents) &&
				_.map(childComponents, (childComponent, key) => (
					<ChildComponent key={key} {...childComponent} />
				))}
		</section>
	);
};

export default ChildComponents;
