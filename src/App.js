import React, { Component } from 'react';
import './App.scss';
import {Image} from 'react-bootstrap';
import fruit from './images/fruit.jpg';
import sport from './images/sport.jpg';
import dumbbells from './images/dumbbells.jpg';

import Heading from './Components/Header';
import Services from './Components/Services';
import BMI from './Components/BMI';
import Reviews from './Components/Reviews';
import Insta from './Components/Insta';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Advice from './Components/Advice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Landing />
        <Services />
        <h1>Over the past 10 years, I have helped countless clients create the body they’ve always dreamt of.</h1>
        <div id="fruit"></div>
        <BMI />
        <Image src={sport} alt="" className="b-image" fluid/>
        <Reviews />
        <Advice />
        <Image src={dumbbells} alt="" className="b-image" fluid/>
        <Insta />
        <Footer />
      </div>
    );
  }
}

export default App;
