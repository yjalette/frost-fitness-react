import React, {Component} from 'react';
import BMIContainer from './BMIContainer';
import BMIFormContainer from './BMIFormContainer';

class BMI extends Component{
    render(){
        return(
            (
                <section id="main-bmi">
                       <h1>Calculate your BMI</h1>
                       <p>Body uses weight and height to determine whether an adult is within the healthy weight range, underweight, overweight or obese. It provides an estimate of total body fat and your risk of developing weight-related diseases. Use the healthdirect BMI calculator to work out your BMI.</p>
                       <section id="showBmi">
                            <BMIContainer />
                            <BMIFormContainer />                         
                       </section>      
                </section>
            )
        )
    }
} 

export default BMI;
