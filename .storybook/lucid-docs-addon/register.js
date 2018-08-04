import '@storybook/addon-options/register';
import React from 'react';
import ReactDOM from 'react-dom';
import addons from '@storybook/addons';
import _ from 'lodash';
import ExampleCode from './ExampleCode';
import PropTypes from './PropTypes';
import PanelToggles from './PanelToggles';
import ChildComponents from './ChildComponents';
import packageJson from '../../package.json';

class CodePanel extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = { code: '' };
		this.onSource = this.onSource.bind(this);
	}

	onSource(code) {
		if (!_.isString(code)) {
			return this.setState({
				code: '',
			});
		}

		this.setState({
			code,
		});
	}

	componentDidMount() {
		const { channel, api } = this.props;
		// Listen to the notes and render it.
		channel.on('lucid-docs-source', this.onSource);
	}

	render() {
		const { code } = this.state;

		if (_.isEmpty(code)) {
			return null;
		}

		return (
			<div style={{ width: '100%' }}>
				<ExampleCode code={code} hasCodepen packageJson={packageJson} />
			</div>
		);
	}

	// This is some cleanup tasks when the CodePanel is unmounting.
	componentWillUnmount() {
		this.onSource('');
		this.unmounted = true;
		const { channel, api } = this.props;
		channel.removeListener('lucid-docs-source', this.onSource);
	}
}

class PropsPanel extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = { props: null };
		this.onDisplayProps = this.onDisplayProps.bind(this);
		this.onDisplayChildComponents = this.onDisplayChildComponents.bind(this);
	}

	onDisplayProps(propsJSON) {


		console.log("aaaa", propsJSON);
		if (!_.isString(propsJSON)) {
			return this.setState({
				props: null,
			});
		}

		try {
			this.setState({
				props: JSON.parse(propsJSON),
			});
		} catch (err) {
			console.log('Error parsing props JSON.');
			console.error(err.stack);
			this.setState({
				props: null,
			});
		}
	}

	onDisplayChildComponents(childComponentJSON) {
		if (!_.isString(childComponentJSON)) {
			return this.setState({
				childComponents: null,
			});
		}

		try {
			this.setState({
				childComponents: JSON.parse(childComponentJSON),
			});
		} catch (err) {
			console.log('Error parsing props JSON.');
			console.error(err.stack);
			this.setState({
				childComponents: null,
			});
		}
	}

	componentDidMount() {
		const { channel, api } = this.props;

		console.log(api);
		// Listen to the notes and render it.
		channel.on('lucid-docs-display-props', this.onDisplayProps);
		channel.on(
			'lucid-docs-display-child-components',
			this.onDisplayChildComponents
		);
	}

	componentWillUnmount() {
		this.onDisplayProps();
		this.unmounted = true;
		const { channel, api } = this.props;
		channel.removeListener('lucid-docs-display-props', this.onDisplayProps);
		channel.removeListener(
			'lucid-docs-display-child-components',
			this.onDisplayChildComponents
		);
	}

	render() {
		const { childComponents, props: componentProps } = this.state;

		return (
			<div
				style={{
					backgroundColor: 'white',
					width: '100%',
					overflow: 'auto',
					padding: 10,
					position: 'relative',
				}}
			>
				<PropTypes props={componentProps} />
				{!_.isEmpty(childComponents) && (
					<ChildComponents childComponents={childComponents} />
				)}
			</div>
		);
	}
}

// Register the addon with a unique name.
addons.register('lucid-docs', api => {
	api.setOptions({
		name: 'Lucid UI',
		url: 'https://github.com/appnexus/lucid',
		showAddonPanel: false,
		addonPanelInRight: true,
	});

	// Also need to set a unique name to the panel.
	 addons.addPanel('lucid-docs-panel-props', {
		title: 'Props',
		render: () => <PropsPanel channel={addons.getChannel()} api={api} />,
	}); 
	addons.addPanel('lucid-docs-panel-code', {
		title: 'Code',
		render: () => <CodePanel channel={addons.getChannel()} api={api} />,
	});

	addons.getChannel().on('lucid-docs-panel-layout-toggle', () => {
		const urlState = api.getUrlState();
		api.setOptions({
			addonPanelInRight: !urlState.panelRight,
		});
	});

	addons.getChannel().on('lucid-docs-panel-hide-toggle', () => {
		const urlState = api.getUrlState();
		api.setOptions({
			showAddonPanel: !urlState.addons,
		});
	});

	const div = window.document.createElement('div');
	window.document.body.appendChild(div);
	api.onStory((kind, story) => {
		setTimeout(() => {
			ReactDOM.render(<PanelToggles api={api} />, div);
		}, 200);
	});
});
