import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import Gui from './Components/Gui/Gui.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div className = "entire">
        <Navbar/>
        <Gui/>
        <Footer/>
      </div>
    );
  }
}

export default App;
