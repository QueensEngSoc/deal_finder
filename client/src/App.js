import React, { Component } from "react";
import Navbar from "./Components/Navbar";
// import Gui from "./Components/Gui";  // Not used for now
import Footer from "./Components/Footer";

class App extends Component {
  // state = { deals: [] }; // empty array, will pull from database later
  state = { todos: [] };
  // Once component loads, pulls from database, will save in the state under deals
  // Information will later be used to replace a code segment
  // Add error path?
  // Also consider moving into GUI.js in components folder for neatness. But also only after it works.
  // Currently doesn't work because there's nothing in the database like this I think
  componentDidMount() {
    fetch("/todos")
      .then(res=>res.json())
      .then(todos=>this.setState({todos}));
    // fetch("/deals") // double check this path
    //   // .then(res => res.text())
    //   // .then(text => console.log(text));
    //   .then(res=>res.json())
    //   .then(deals => this.setState({ deals }));
  };

  // render () {
  //   return (
  //     <div className="entire">
  //       <Navbar/>
  //       <Gui />
  //       <footer/>
  //     </div>
  //   );
  // }

render() {
    return (
      <div className="entire">
        <Navbar />
        {this.state.todos.map(todo => (
          <div>
              <p>{todo.action}</p>
            </div>

        ))}
        <Footer />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="entire">
  //       <Navbar />
  //       {this.state.deals.map(deal => (
  //         <div className="row">
  //           <div className="col-md-7">
  //             <a href="#">
  //               <img
  //                 className="img-fluid rounded mb-3 mb-md-0"
  //                 src={deal.image}
  //                 alt=""
  //               />
  //             </a>
  //           </div>
  //           <div className="col-md-5">
  //             <div className="dNameButton">
  //               <h3>{deal.dealName}</h3>
  //               <a className="detailButton btn btn-primary" href="#">
  //                 View Details
  //               </a>
  //             </div>
  //             <p>{deal.details}</p>
  //           </div>
  //         </div>
  //       ))}
  //       <Footer />
  //     </div>
  //   );
  // }
}

export default App;
