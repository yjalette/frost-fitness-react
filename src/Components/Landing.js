import React, {Component} from 'react';
import {Jumbotron}from 'react-bootstrap';

class Landing extends Component{
    render(){
        return (
            <section id="landing">
                <Jumbotron id="headline">
                    <span>Personal Training,< br /> Nutrition Coaching & <br />Competitive Bodybuilding</span>
                </Jumbotron>
            </section>
        )
    }
}
        
export default Landing;


