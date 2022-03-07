import React from 'react';
import './Counter.css'

const Counter = () => {
    return (
        <section id='counter' className='counter-section'>
            <div className="container">
                <div className="row counters">
                    <li className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-content">
                            <p>Description</p>
                            <h3>
                                <span className='counter'>Instructor details</span>
                            </h3>
                        </div>
                    </li>   
                    <li className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-content">
                            <p>Description</p>
                            <h3>
                                <span className='counter'>Instructor details</span>
                            </h3>
                        </div>
                    </li>   
                    <li className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-content">
                            <p>Description</p>
                            <h3>
                                <span className='counter'>Instructor details</span>
                            </h3>
                        </div>
                    </li>   
                    <li className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-content">
                            <p>Description</p>
                            <h3>
                                <span className='counter'>Instructor details</span>
                            </h3>
                        </div>
                    </li>          
                </div>
            </div>
        </section>
    );
};

export default Counter;