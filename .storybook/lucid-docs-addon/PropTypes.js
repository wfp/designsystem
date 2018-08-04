import React from 'react';
import ReactDOMServer from 'react-dom/server';
import _ from 'lodash';
import marksy from 'marksy/components';
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

const style = {
	a: {
		textDecoration: 'none',
		color: '#2abbb0',
	},
	ul: {
		listStyle: 'none',
		paddingLeft: 0,
		margin: '-6px 0 0 0',
	},
	li: {
		margin: '6px 0 6px 0',
	},
	propLink: {
		backgroundColor: 'white',
		padding: '2px 4px',
		border: '1px solid rgb(236,236,236)',
		borderRadius: 3,
	},
	hashSymbol: {
		display: 'none',
	},
	propType: {
		fontFamily: 'monospace',
		color: '#999',
	},
	isRequired: {
		fontSize: 9,
		color: '#0d8050',
		marginLeft: 4,
		backgroundColor: 'rgba(15,153,96,.15)',
		borderRadius: 2,
		padding: '2px 4px',
	},
	propName: {
		fontFamily: 'monospace',
		fontWeight: '100',
	},
	propHeader: {
		marginTop: 0,
		marginBottom: 2,
	},
	propSection: {
		margin: '10px 0 10px 0',
		padding: 8,
	},
	defaultValueLabel: {
		fontSize: 'smaller',
		color: '#999',
	},
	defaultValue: {
		color: '#999',
		fontFamily: 'monospace',
		backgroundColor: 'rgb(247,247,247)',
		padding: 10,
	},
	divider: {
		backgroundColor: 'rgb(247,247,247)',
		height: 1,
		border: 'none',
		margin: '18px 0px -10px',
	},
	top: {
		fontSize: 'smaller',
		fontWeight: '200',
	},
};

const Block = ({ oneline, ...rest }) =>
	oneline ? <span {...rest} /> : <div {...rest} />;

const PropType = ({ oneline, type, ...propData }) => {
	if (type === 'oneOf') {
		return (
			<span style={PropType.style.root}>
				{type}:
				<Block
					oneline={oneline}
					style={{ fontFamily: 'monospace', ...PropType.style.section }}
				>
					{JSON.stringify(propData.dynamicData, null, 2)}
				</Block>
			</span>
		);
	}

	if (type === 'arrayOf') {
		return (
			<span style={PropType.style.root}>
				{type}:
				<Block oneline={oneline} style={PropType.style.section}>
					<PropType {...propData.dynamicData} />
				</Block>
			</span>
		);
	}

	if (type === 'oneOfType') {
		return (
			<span style={PropType.style.root}>
				{type}:
				{_.map(propData.dynamicData, (propTypeData, key) => (
					<Block oneline={oneline} key={key} style={PropType.style.section}>
						<PropType {...propTypeData} />
					</Block>
				))}
			</span>
		);
	}

	if (type === 'instanceOf') {
		return (
			<span style={PropType.style.root}>
				{type}: <span>{propData.dynamicData}</span>
			</span>
		);
	}

	if (type === 'objectOf') {
		return (
			<span style={PropType.style.root}>
				{type}:
				<Block oneline={oneline} style={PropType.style.section}>
					<PropType {...propData.dynamicData} />
				</Block>
			</span>
		);
	}

	if (type === 'shape') {
		return (
			<span style={PropType.style.root}>
				{type}:
				<Block oneline={oneline} style={PropType.style.section}>
					{'{'}
					{_.map(propData.dynamicData, (propTypeData, key) => (
						<div key={key} style={PropType.style.section}>
							{key}:
							<span style={PropType.style.section}>
								<PropType oneline {...propTypeData} />
							</span>
							,
						</div>
					))}
					{'}'}
				</Block>
			</span>
		);
	}

	return <span style={PropType.style.root}>{type}</span>;
};

PropType.style = {
	root: {
		position: 'relative',
	},
	section: {
		marginLeft: '1em',
	},
};

const PropsList = ({ showIndex, showTopLinks, props }) => {

	console.log(props);
	const sortedProps = _.sortBy(props, 'isRequired');

	return (
		<section>
			{showIndex && [
				showTopLinks ? <a name="top" /> : null,
				<ul key="propsIndex" style={style.ul}>
					{_.map(
						sortedProps,
						({ name, type, isRequired, defaultValue, text }) => (
							<li key={name} style={style.li}>
								<a
									style={{ ...style.a, ...style.propName, ...style.propLink }}
									href={`#${name}`}
								>
									<span style={style.hashSymbol}>#</span>
									{name}
								</a>
								&nbsp;
								<span style={style.propType}>{type}</span>
								{isRequired && <span style={style.isRequired}>Required</span>}
							</li>
						)
					)}
				</ul>,
				<hr key="propsIndexDivider" style={style.divider} />,
			]}
			{_.map(
				sortedProps,
				({ name, type, isRequired, defaultValue, text, ...propData }) => (
					<span key={name}>
						{showIndex && <a name={name} />}
						<div style={style.propSection}>
							<h3 style={style.propHeader}>
								<span style={style.propName}>{name}</span>
							</h3>
							<div>
								<span style={style.propType}>
									<PropType {...{ type, ...propData }} />
								</span>{' '}
								{isRequired && <span style={style.isRequired}>Required</span>}
							</div>
							<div>{compile(stripIndent(text)).tree}</div>
							{!_.isUndefined(defaultValue) && (
								<div>
									<span style={style.defaultValueLabel}>default:</span>
									<SyntaxHighlighter
										language="json"
										style={coy}
										customStyle={{
											fontSize: 12,
											backgroundColor: 'none',
										}}
									>
										{JSON.stringify(defaultValue, null, 2)}
									</SyntaxHighlighter>
								</div>
							)}
							{showIndex &&
								showTopLinks && (
									<a style={{ ...style.a, ...style.top }} href="#top">
										top
									</a>
								)}
						</div>
					</span>
				)
			)}
		</section>
	);
};

PropsList.defaultProps = {
	showIndex: true,
	showTopLinks: false,
};

export default PropsList;
