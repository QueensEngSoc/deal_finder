import React from "react";
// import Search from "./Search";
import AutoSuggest from "react-autosuggest";

function renderSuggestion(s) {
	return (
		<li class="suggestions">
			<a href={"#" + s._id} />
			{s.name}
		</li>
	);
}

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.search.bind(this);
		this.state = {
			suggestions: [],
			searchValue: ""
		};
	}

	search(e) {
		// Prevents default reload
		e.preventDefault();
	}

	// shorthand -- object with property: value -- value is what is passed through (squiggly)
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: this.props.retailers.filter((deal) => {
				return (
					// deal.description.toLowerCase().includes(value.toLowerCase())||
					deal.name.toLowerCase().includes(value.toLowerCase()) ||
					deal.tags.toLowerCase().includes(value.toLowerCase())
				);
			}
			)
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({ suggestions: [] });
	};

	render() {
		console.log(JSON.stringify(this.state));

		const inputProps = {
			placeholder: "Search...",
			value: this.state.searchValue,
			onChange: (event, { newValue }) =>
				this.setState({ searchValue: newValue })
		};

		return (
			<nav
				id="navbar"
				className="navbar navbar-expand-lg navbar-dark fixed-top"
			>
				<div className="container">
					<a className="navbar-brand" href="#">
						<img
							src="../../Images/ITTeamLogoWhite.png"
							height="30px"
						/>
						KDeals
						<img
							src="../../Images/ITTeamLogoWhite.png"
							height="30px"
						/>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarResponsive"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>

							<AutoSuggest
								suggestions={this.state.suggestions}
								onSuggestionsFetchRequested={
									this.onSuggestionsFetchRequested
								}
								onSuggestionsClearRequested={
									this.onSuggestionsClearRequested
								}
								getSuggestionValue={s => s.name}
								renderSuggestion={renderSuggestion}
								inputProps={inputProps}
							/>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
