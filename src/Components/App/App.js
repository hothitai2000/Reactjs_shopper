import React, { Component } from 'react';
import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;