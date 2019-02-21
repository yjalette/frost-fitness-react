import React from 'react';
import plate from '../images/plate.png';
import crossfit from '../images/crossfit.png';


const Services = () => (
    <section id="main-services">
        <h1>Services</h1>
        <br />
        <h2>TRAINING</h2>
            <section id="training" className="services">
                <p>1 on 1 training will allow you to work closely with me to set and achieve goals as efficiently as possible. A fitness assessment will be provided prior to starting to better understand your current fitness level. Each workout is structured to help you work towards achieving specific results, ensure that you are consistently making progress, and learn how to properly structure exercise routines to fit your body type. Nutritional guidance is also provided to complement workouts and overall goals. Designed to be progressive and challenging, the plan will take you through all facets of fitness development, making sure that you are not just leaner, but also stronger, more flexible, more stable and agile.</p>
                <img src={crossfit} alt=""/>
            </section>
        <h2>NUTRITION</h2>
            <section id="diet" className="services">
                <p>To maximize the benefits of your workout plan, I do Nutrition Coaching. You will understand and learn how to eat for your body type, fitness level and for the goals you have set for yourself. I help you by coaching and educating you on enjoying what you eat – about common sense nourishment and health – not starvation and diet pills. Your program will be tailored to support your exercise program and facilitate the outcome you desire – fat loss or muscle gain, or both. I will give you the practical, real-life tools and concepts you need to make wise decisions about your personal nutrition, and how to fuel your body to achieve the results you want, faster.</p>
                <img src={plate} alt="" className="card-image" />
            </section>
</section>
)

export default Services;

