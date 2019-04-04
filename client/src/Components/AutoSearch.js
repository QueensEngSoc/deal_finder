import React from "react";
import Autosuggest from "react-autosuggest";

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
	// MAKE LOGIC //
	// const inputValue = value.trim().toLowerCase();
	// const inputLength = inputValue.length;
	// return inputLength === 0 ? [] : languages.filter(lang =>
	//   lang.name.toLowerCase().slice(0, inputLength) === inputValue
	// );
};

class AutoSearch extends React.Component {
	constructor(props) {
		super(props);
		this.state = { shown: true };
		this.state = {
			value: "",
			suggestions: []
		};
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	render() {
		return (
			<div>
				hi
				<p />
			</div>
		);
	}
}

export default AutoSearch;
