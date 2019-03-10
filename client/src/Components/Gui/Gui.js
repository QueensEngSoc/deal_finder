import React from 'react';

function Gui(props) {
	return (
		<div className="container">

      <h1 id ="pageTitle" className="my-4">Today's Deals</h1>
        <h1><small>Kingston Area</small></h1>
      
      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""></img>
          </a>
        </div>
        <div className="col-md-5">
          <div className ="dNameButton">
            <h3>Project One</h3> 
            <a className="detailButton btn btn-primary" href="#">View Details</a>
          </div>
          <p>Elements added to the page will have Project One's Layout. Except for the image, which will just be centered.<br></br> TO DO: <br></br> 1) once we have images, test them <br></br> 2) test how adding smth in the database while this is open works ie should i make a load more button</p>
        </div>
      </div>
   
      <hr></hr>

      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""></img>
          </a>
        </div>
        <div className="col-md-5">
          <h3>Project Two</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
          <a className="btn btn-primary" href="#">View Project</a>
        </div>
      </div>
   
      <hr></hr>

      <div className="row">
        <div className="col-md-7">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""></img>
          </a>
        </div>
        <div className="col-md-5">
          <h3>Project Three</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, temporibus, dolores, at, praesentium ut unde repudiandae voluptatum sit ab debitis suscipit fugiat natus velit excepturi amet commodi deleniti alias possimus!</p>
          <a className="btn btn-primary" href="#">View Project</a>
        </div>
      </div>
   
      <hr></hr>

      <div className="row">

        <div className="col-md-7">
          <a href="#">
            <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""></img>
          </a>
        </div>
        <div className="col-md-5">
          <h3>Project Four</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quidem, consectetur, officia rem officiis illum aliquam perspiciatis aspernatur quod modi hic nemo qui soluta aut eius fugit quam in suscipit?</p>
          <a className="btn btn-primary" href="#">View Project</a>
        </div>
      </div>

      <hr></hr>
      
    </div>

	);
}

export default Gui;