import React, {Component} from 'react';
import {Carousel, Image} from 'react-bootstrap';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';


class ReviewsContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <Image className="d-block w-100" src={client1} alt="First slide" rounded/>
          <Carousel.Caption>
            <h3>Jeff / 36, accounter</h3>
            <p>"Aaron developed a specialized program for me and while he does not let me slack off, he never pushes me past my abilities."</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={client3} alt="Third slide" rounded/>
          <Carousel.Caption>
            <h3>Liza / 30, dancer</h3>
            <p>"Definitely the best personal training in New York. Aaron will get you the result! His meal plan and training plans are amazing."</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image className="d-block w-100" src={client2} alt="Third slide" rounded/>
          <Carousel.Caption>
            <h3>Mark / 25, blogger</h3>
            <p>"Amazing trainer! I definitely reached my fitness goals with his help and guidance. The exercises were challenging, but he made it fun at the same time!"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ReviewsContainer;