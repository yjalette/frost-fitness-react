import React, {Component} from 'react';

class Heading extends Component {

    render(){
        return (
            <div id="header" className="nav-wrapper">
                <h5>FROST FITNESS<i className="fa fa-snowflake-o"></i></h5>
                <div>
                    <button className="active" id="home"><a href="https://www.instagram.com/5050ifbbpro_frosthardny/"><i className="fa fa-instagram "></i></a></button>
                    <button id="ser-a" onClick={this.handleServices}><a href="https://www.facebook.com/aaron.a.harvey.50 "><i className="fa fa-facebook-square "></i></a></button>
                    <button id="contact"><a href="mailto:doroskaterina@gmail.com?Subject=Hello%20again"><i className="fa fa-envelope"></i></a></button>
                </div>
            </div>

        )
    }
}

export default Heading;

