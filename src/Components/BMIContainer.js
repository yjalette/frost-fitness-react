import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class BMIContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ["Severely underweight: < 15", "Underweight: 16-18.5", "Normal: 18.5-25", "Overweight: 25-30", "Moderately obese: 30-35", "Severely obese: > 35"],
                // labels: ["1-15",  "15-16", "16-18.5", "18.5-25", "25-30", "30-35", "35-40", "40-45"],
                datasets: [{
                    label: "BMI chart",
                    backgroundColor: ["white", "yellow", "green", "blue", "purple", "red"],
                    borderColor: "white",
                    data: [10, 10, 10, 10, 10, 10]
                }]
            },
            chartOptions: {
                    animateScale: true,
                    easing: 'easeInOutQuad',
                    tooltips: {
                        callbacks: {
                            labelTextColor: this.handleColor,
                            label: this.handleLabel
                        }
                    },
            }
        }   
    }
    handleColor = (tooltipItem) => {
        return 'white';
}

    handleLabel = (tooltipItem) =>{
            var n = Number(tooltipItem.index);
            if ( n === 0){
                return "Very severely underweight"
            } else if ( n === 1){
                return "Severely underweight"
            } else if ( n === 2){
                return "Underweight"
            } else if ( n === 3){
                return "Normal"
            } else if ( n === 4){
                return "Overweight"
            } else if ( n === 5){
                return "Moderately obese"
            } else if ( n === 6){
                return "Severely obese"
            } else if ( n === 7){
                return "Very severely obese"
            }
    }
   render(){
       
        return(
            <section id="bmi-chart">
                <h2>BMI chart</h2>
                <Pie data={this.state.chartData} 
                     options = {this.state.chartOptions} />             
            </section>
            
        )
    }
}

export default BMIContainer;