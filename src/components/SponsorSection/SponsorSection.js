import React from 'react';
import Slider from 'react-slick';
import './SponsorSection.css';
import images1 from '../../images/pexels-zen-chung-5537939.jpg'

const SponsorSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <section className="sponsor-section bd-bottom">
            <div className="container">
                <div id="sponsor-carousel" className="sponsor-items">
                    <Slider {...settings}>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                        <li className="sponsor-item">
                            <img src={images1} alt="" />
                        </li>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default SponsorSection;