import React from "react";

class Gui extends React.Component {
  // showDetails(num) {
  //   let extraDetail = document.querySelectorAll("extraDetail");
  //   let normalDetail = document.querySelectorAll("normalDetail");
  //   extradetail[num].classlist.remove("inactive");
  //   normalDetail[num].classlist.add("inactive");
  // }

  render() {
    return (
      <div className="container">
        <h1 id="pageTitle" className="my-4">
          Today's Deals
        </h1>
        <h1>
          <small>Kingston Area</small>
        </h1>

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img
                className="img-fluid rounded mb-3 mb-md-0"
                src="http://placehold.it/700x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-5">
            <div className="dNameButton">
              <h3>Brass Pub</h3>
              <div className="detailButton btn btn-primary" href="#">
                View Details
              </div>
            </div>
            <div>
              <div className="normalDetail">Tuesday: Half Price Wings!</div>
              <div className="extraDetail">
                <strong>Address: </strong>
                403 Princess Street, Kingston, ONT K7L 5C9
                <br />
                <strong>Contact: </strong>
                (613) 544-8334 thebrasspub@gmail.com
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img
                className="img-fluid rounded mb-3 mb-md-0"
                src="http://placehold.it/700x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-5">
            <div className="dNameButton">
              <h3>Loblaws</h3>
              <div className="detailButton btn btn-primary" href="#">
                View Details
              </div>
            </div>
            <div className="normalDetail">Tuesdays: 10% Off!</div>
            <div className="extraDetail">
              <strong>Address: </strong>
              1100 Princess St, Kingston, ON K7L 5G8
              <br />
              <strong>Contact: </strong>
              (613) 530-3861
            </div>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img
                className="img-fluid rounded mb-3 mb-md-0"
                src="http://placehold.it/700x300"
                alt=""
              />
            </a>
          </div>
          <div className="col-md-5">
            <div className="dNameButton">
              <h3>Metro</h3>
              <div className="detailButton btn btn-primary" href="#">
                View Details
              </div>
            </div>
            <div className="normalDetail">Tuesday and Thursday: 10% Off for Students!</div>
            <div className="extraDetail">
              <strong>Address: </strong>
              310 Barrie St, Kingston, ON K7L 5L4
              <br />
              <strong>Phone: </strong>
              (613) 542-5795
              <br/>
              <strong>Hours: </strong>
              Open 24 Hours!
            </div>
          </div>
        </div>

        <hr />
      </div>
    );
  }
}

export default Gui;