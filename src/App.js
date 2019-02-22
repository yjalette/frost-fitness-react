import React, { Component } from 'react';
import './App.scss';
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
        <div id="sport"></div>
        <Reviews />
        <Advice />
        <div id="dumbbells"></div>
        <Insta />
        <Footer />
      </div>
    );
  }
}

export default App;
