import React, {Component} from 'react';

class BMIFormContainer extends Component {
            state = {
                lb: "",
                ft: "",
                inch: "",
                result: ""
            }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        let inch;
        let result = parseInt(this.state.result);
        let lb = parseInt(this.state.lb);
        let ft = parseInt(this.state.ft);
        if (inch === ""){
            inch = 0;
        } else {
            inch = parseInt(this.state.inch);
        }
        inch = ft * 12 + inch;

        result = ((lb / (inch * inch)) * 703).toFixed(1);

        this.setState({
            result: result
        })
    }
    render(){   
        return(
            <section id="bmi-section">
                   <form id="bmi-form">
                       <label htmlFor="weight">lb</label>
                       <input type="number" name="lb" id="weight" value={this.state.lb} onChange={this.handleChange} />
                       <label htmlFor="feet">ft</label>
                       <input type="number" name="ft" id="feet" value={this.state.ft} onChange={this.handleChange}/>
                       <label htmlFor="inches">inch</label>
                       <input type="number" name="inch" id="inches" value={this.state.inch} onChange={this.handleChange}/>
                       <button type="button" value="count" id="bmi-submit" onClick={this.handleClick}>count</button>
                   </form>
                   <span id="userBmi" name="result" onChange={this.handleChange}> Your BMI: {this.state.result}</span>
            </section>
        )
    }
}

export default BMIFormContainer;