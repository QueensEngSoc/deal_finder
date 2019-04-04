import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Gui from "./Components/Gui"; // Not used for now
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = { deals: [] }; // empty array, will pull from database later
    // this.state = { todos: [] };
    this.state = { retailers: [] };
    //   this.state = {
    //   deals: [
    //     {
    //       key:"0",
    //       merchant: "merchant1",
    //       dealName: "dealname1",
    //       image: "http://placehold.it/700x300",
    //       details: "details1"
    //     },
    //     {key:"1",
    //       merchant: "merchant2",
    //       dealName: "dealname2",
    //       image: "http://placehold.it/700x300",
    //       details: "details2"
    //     },
    //     {key:"2",
    //       merchant: "merchant3",
    //       dealName: "dealname3",
    //       image: "http://placehold.it/700x300",
    //       details: "details3"
    //     }]
    //   };
  }
  // For adding tags ** untested
  // addArray(arr) {
  //   let temp = [];
  //   for (let i = 0; i < arr.length; i ++) {
  //     temp.push(arr[i]);
  //   }
  //   return (
  //     <div>{buffer}</div>);
  // }
  // Once component loads, pulls from database, will save in the state under deals
  // Information will later be used to replace a code segment
  // Add error path?
  // Also consider moving into GUI.js in components folder for neatness. But also only after it works.
  // Currently doesn't work because there's nothing in the database like this I think
  componentDidMount() {
    fetch("/api/retailers")
      .then(res => res.json())
      .then(retailers => this.setState({ retailers }));

    // fetch("/todos")
    //   .then(res=>res.json())
    //   .then(todos=>this.setState({todos}));

    // fetch("/deals") // double check this path
    //   // .then(res => res.text())
    //   // .then(text => console.log(text));
    //   .then(res=>res.json())
    //   .then(deals => this.setState({ deals; }));
  }

  // render () {
  //   return (
  //     <div className="entire">
  //       <Navbar/>
  //       <Gui />
  //       <Footer/>
  //     </div>
  //   );
  // }

  // render() {
  //   return (
  //     <div className="entire">
  //       <Navbar />
  //       <Gui/>
  //       {this.state.retailers.map(retailers => (
  //         <div id="potato">
  //           <p>{retailers.name}</p>
  //         </div>
  //       ))}
  //       <Footer />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="entire">
        <Navbar retailers={this.state.retailers} />
        <div class="container">
          <h1 id="pageTitle" className="my-4">
            Today's Deals
          </h1>
          <h1>
            <small>Kingston Area</small>
          </h1>
          {this.state.retailers.map(deal => (
            <div className="row" style={{ marginBottom: "10px" }}>
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src={deal.image}
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <div className="dNameButton">
                  <h3>{deal.name}</h3>
                  <a
                    class="btn btn-primary"
                    data-toggle="collapse"
                    href={"#" + deal._id}
                    
                    role="button"
                    aria-expanded="false"
                    style={{ float: "right" }}
                  >
                    View Details
                  </a>
                </div>
                <div id={deal._id} class="collapse">
                  <strong>Address: </strong>
                  {deal.address}
                  <br />
                  <strong>Contact: </strong>
                  {deal.contact}
                  <br />
                  <strong>Tags: </strong>
                  {deal.tags}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
