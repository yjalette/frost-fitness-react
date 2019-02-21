import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import client1 from '../images/client1.jpg';
import client2 from '../images/client2.jpg';
import client3 from '../images/client3.jpg';


const items = [
  {
    src: client1,
    altText: 'Slide 1',
    caption: '"Aaron developed a specialized program for me and while he does not let me slack off, he never pushes me past my abilities."',
    header: 'Jeff / 36, accounter'
  },
  {
    src: client3,
    altText: 'Slide 2',
    caption: '"Definitely the best personal training in New York. Aaron will get you the result! His meal plan and training plans are amazing."',
    header: 'Liza / 30, dancer'
  },
  {
    src: client2,
    altText: 'Slide 3',
    caption: '"Amazing trainer! I definitely reached my fitness goals with his help and guidance. The exercises were challenging, but he made it fun at the same time!"',
    header: 'Mark / 25, blogger'
  }
];

const ReviewsContainer = () => <UncontrolledCarousel items={items} />;


export default ReviewsContainer;