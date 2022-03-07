import React from 'react';
import './PromoSection.css';

const PromoSection = () => {
    return (
        <section className="promo-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="row promo-wrap">
                            <div className="col-md-4">
                                <div className="promo-content">
                                    <div className="promo-thumb">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="promo-text">
                                        <h3>Apply Online</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit.</p>
                                        <a href="" className='read-more'>Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="promo-content">
                                    <div className="promo-thumb">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="promo-text">
                                        <h3>Apply Online</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit.</p>
                                        <a href="" className='read-more'>Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="promo-content">
                                    <div className="promo-thumb">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="promo-text">
                                        <h3>Apply Online</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit.</p>
                                        <a href="" className='read-more'>Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSection;