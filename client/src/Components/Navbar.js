import React from "react";
import Search from "./Search";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.search.bind(this);
		// this.state={deals: []}; // sets state to empty array
	}

	search(e) {
		// Prevents default reload
		e.preventDefault();
	}

	render() {
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
							
							<Search/>

						</ul>
					</div>
				</div>
				
			</nav>
		);
	}
}

export default Navbar;
