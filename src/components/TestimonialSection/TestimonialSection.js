import React from 'react';
import './TestimonialSection.css';
import Slider from "react-slick";
import image from '../../images/pexels-monstera-6281918.jpg';

const TestimonialSection = () => {
    var settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 3,
        speed: 500,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <section className="testimonial-section padding">
            <div className="container">
                <div className="section-heading mb-40 text-center">
                    <h2>What People Say</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, eligendi?</p>
                </div>
                <Slider {...settings}>
                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>

                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Mehedi Hasan <span>Creative Network</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, maiores. <br />product or service.</p>
                            <ul className="rattings text-center">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                        <div className="testimonial-item text-center">
                            <img src={image} alt="" />
                            <h4>Miraj Khan <span>js</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, necessitatibus!</p>
                            <ul className="rattings">
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                                <li className="icon">star</li>
                            </ul>
                        </div>
                </Slider>
            </div>
        </section>
    );
};

export default TestimonialSection;