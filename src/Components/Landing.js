import React, {Component} from 'react';
import {Image} from 'react-bootstrap';
import background from '../images/background.jpg';

class Landing extends Component{
    render(){
        return (
            <section id="landing">
                <Image src={background} fluid /> 
                <section id="headline">
                    <span>Personal Training,< br /> Nutrition Coaching & <br />Competitive Bodybuilding</span>
                </section>
            </section>
        )
    }
}
        
export default Landing;


