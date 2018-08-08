import React from 'react';

export default class Hoverable extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			isHovered: false,
		};
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver(...args) {
		this.setState({ isHovered: true });
		if (this.childElementOnMouseOver) {
			return this.childElementOnMouseOver(...args);
		}
	}

	handleMouseOut(...args) {
		this.setState({ isHovered: false });
		if (this.childElementOnMouseOut) {
			return this.childElementOnMouseOut(...args);
		}
	}

	render() {
		const childElement = this.props.children(this.state.isHovered);
		this.childElementOnMouseOver = childElement.props.onMouseOver;
		this.childElementOnMouseOut = childElement.props.onMouseOut;
		return React.cloneElement(childElement, {
			onMouseOver: this.handleMouseOver,
			onMouseOut: this.handleMouseOut,
		});
	}
}
