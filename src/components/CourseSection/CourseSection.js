import React from 'react';
import './CourseSection.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../../images/pexels-dominika-roseclay-5565247.jpg';
import image2 from '../../images/pexels-mary-taylor-5896472.jpg'

const CourseSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <section className="course-section bg-gray padding">
            <div className="container">
                <div className="section-heading mb-40 text-center">
                    <h2>All classes</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, molestiae.</p>
                </div>
                <div id="course-carousel" className="course-carousel text-center">
                    <Slider {...settings}>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                        <div className="course-item">
                            <div className="course-thumb">
                                <img src={image2} alt="" />
                                <a href="" className='enroll-btn'>Book Now</a>
                                <div className="thumb-details">
                                    <img src={image} alt="" />
                                    <div className="thumb-content">
                                        <h4>Mehedi</h4>
                                    </div>
                                </div>   
                            </div>
                            <div className="course-details">
                                <h3><a href="">development</a></h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, libero!</p>
                                <div className="course-footer">
                                    <span>1424</span>
                                    <span>2452</span>
                                    <span className='price'>4242</span>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default CourseSection;