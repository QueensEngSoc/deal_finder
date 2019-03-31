import React from "react";

function Navbar(props) {
	return (
		<nav
			id="navbar"
			className="navbar navbar-expand-lg navbar-dark fixed-top"
		>
			<div className="container">
				<a className="navbar-brand" href="#">
					<img src="../../Images/ITTeamLogoWhite.png" height="30px" />
					KDeals
					<img src="../../Images/ITTeamLogoWhite.png" height="30px" />
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
				<div className="collapse navbar-collapse" id="navbarResponsive">
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

						<li className="nav-item">
							<link
								rel="stylesheet"
								href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
								integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
								crossOrigin="anonymous"
							/>
							<div className="row justify-content-center">
								<div className="col-12 col-md-10 col-lg-8">
									<form className="card card-sm">
										<div
											id="searchBarD"
											className="card-body row no-gutters align-items-center"
										>
											<div className="col">
												<input
													className="searchBar form-control form-control-lg form-control-borderless"
													type="search"
													placeholder="Search..."
												/>
											</div>
											<div className="col-auto">
												<button
													className="searchButton dbtn btn-lg"
													type="submit"
												>
													Search
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
