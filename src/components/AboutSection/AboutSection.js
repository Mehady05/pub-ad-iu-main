import React from 'react';
import './AboutSection.css';
import Image from '../../images/pexels-anete-lusina-5239598.jpg'

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 xs-padding">
                        <div className="about-content">
                            <h2>welcome to department of public administration</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, aliquam?</p>
                            <ul className="about-list">
                                <li>we are creative</li>
                                <li>provide best opportunity</li>
                                <li>improving</li>
                            </ul>
                            <a href="" className='default-btn'>our classes</a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-bg">
                            <img src={Image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;