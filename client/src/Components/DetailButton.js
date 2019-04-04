import React from "react";

class DetailButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { shown: true };
	}

	toggle() {
		this.setState({ shown: !this.shown });
	}
	render() {
		let shown = {
			display: this.state.shown ? "block" : "none"
		};

		let hidden = {
			display: this.state.shown ? "none" : "block"
		};

		return (
			<div
				className="detailButton btn btn-primary"
				href="#"
				onClick={this.showDetails}
			>
				View Details
				<h2 style={shown}>this.state.shown = true</h2>
				<h2 style={hidden}>this.state.shown = false</h2>
				<button onClick={this.toggle.bind(this)}>Toggle</button>
			</div>
		);
	}
}

export default DetailButton;