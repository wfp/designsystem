import React from 'react';
import Hoverable from './Hoverable';

export default class extends React.Component {
	constructor(...args) {
		super(...args);
		this.onToggleLayout = this.onToggleLayout.bind(this);
		this.onTogglePanel = this.onTogglePanel.bind(this);
	}

	onToggleLayout() {
		const urlState = this.props.api.getUrlState();
		this.props.api.setOptions({
			addonPanelInRight: !urlState.panelRight,
		});
	}

	onTogglePanel() {
		const urlState = this.props.api.getUrlState();
		this.props.api.setOptions({
			showAddonPanel: !urlState.addons,
		});
	}

	render() {
		const urlState = this.props.api.getUrlState();

		if (urlState.full || !urlState.addons) {
			return null;
		}

		return (
			<Hoverable>
				{hoverGroup => (
					<div
						style={{
							position: 'fixed',
							bottom: 11,
							right: 11,
							width: 60,
							height: 32,
							opacity: hoverGroup ? '1' : '0.6',
							zIndex: 999,
						}}
					>
						<Hoverable>
							{hover => (
								<div
									style={{
										position: 'absolute',
										bottom: 4,
										right: 32,
										width: 24,
										height: 24,
										backgroundColor: 'rgba(176,176,176,.5)',
										cursor: 'pointer',
										opacity: hover ? '1' : '0.6',
										transform: hoverGroup
											? 'translateX(0px)'
											: 'translateX(28px)',
										transition: 'transform 300ms',
									}}
									onClick={this.onToggleLayout}
									title="Toggle Layout"
								>
									<div
										style={{
											position: 'absolute',
											bottom: 0,
											left: 0,
											width: 24,
											height: 8,
											backgroundColor: 'rgba(176,176,176,.5)',
										}}
									/>
									<div
										style={{
											position: 'absolute',
											top: 0,
											right: 0,
											width: 8,
											height: 24,
											backgroundColor: 'rgba(176,176,176,.5)',
										}}
									/>
								</div>
							)}
						</Hoverable>
						<Hoverable>
							{hover => (
								<div
									style={{
										position: 'absolute',
										bottom: 4,
										right: 4,
										width: 24,
										height: 24,
										backgroundColor: 'rgba(176,176,176,.5)',
										cursor: 'pointer',
										opacity: hover ? '1' : '0.6',
									}}
									onClick={this.onTogglePanel}
									title="Toggle Panel"
								>
									<div
										style={{
											position: 'absolute',
											bottom: 0,
											left: 0,
											width: 24,
											height: 8,
											backgroundColor: 'rgba(176,176,176,.125)',
											outline: '2px dashed rgba(176,176,176,.5)',
											outlineOffset: -1,
										}}
									/>
								</div>
							)}
						</Hoverable>
					</div>
				)}
			</Hoverable>
		);
	}
}
