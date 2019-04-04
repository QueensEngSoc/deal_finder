import React, { Component } from "react";
import AutoSearch from "./AutoSearch";

class Search extends Component {
	state = {
		query: ""
	};

	handleInputChange = () => {
		this.setState({
			query: this.search.value
		});
	};

	render() {
		return (
			<form id = "searchBar">
				<input
					placeholder="Search for..."
					ref={input => (this.search = input)}
					onChange={this.handleInputChange}
				/>
				<AutoSearch/>
				<p>{this.state.query}</p>
			</form>
		);
	}
}

export default Search;
