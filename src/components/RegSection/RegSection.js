import React from 'react';
import './RegSection.css';
import NumberCounter from 'number-counter';

const RegSection = () => {
    return (
        <section className='reg-section mt-4'>
            <div className="container">
                <div className="row reg-wrap">
                    <div className="col-lg-8 text-center">
                        <div className="reg-content">
                            <h3 className="counter">
                                <NumberCounter end={4856} delay={4} />
                            </h3>
                            <h2>total registration</h2>
                            <h3>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit. Voluptatem, vel!</h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="reg-form">
                            <div className="form-heading">
                                <h2>registration now
                                    <span>get free access</span>
                                </h2>
                            </div>
                            <form action="" method='post'>
                                <div className="form-group">
                                    <input type="text" className='form-control' id='name' placeholder='Name'/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className='form-control' id='email' placeholder='Email'/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className='form-control' id='phone' placeholder='Phone'/>
                                </div>
                                <button type='submit' className='btn btn-primary'>Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegSection;