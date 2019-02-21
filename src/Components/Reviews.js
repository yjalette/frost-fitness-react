import React from 'react';
import ReviewsContainer from './ReviewsContainer';


const Reviews = () => (
    <section id="main-reviews">
     <h1>Reviews</h1> 
        <section className="wrapper">       
            <section className="rightPlace">
                <p>If you’re looking for a personal trainer in NYC or simply need a good nutritionist, you have come to the right place. After personally facing debilitating health issues of my own that threatened my life, my ability to work, and my happiness, I have dedicated myself to a higher calling: helping people make their own lives better, easier, and healthier.</p>
            </section>
            <ReviewsContainer />
        </section>
    </section>
)

export default Reviews;
