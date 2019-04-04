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
														onClick={this.search}
													>
														Search
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</li>