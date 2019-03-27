import React, { Component } from 'react';
import './App.scss';
import Heading from './components/Header';
import Services from './components/Services';
import BMI from './components/BMI';
import Reviews from './components/Reviews';
import Insta from './components/Insta';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Advice from './components/Advice';

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
