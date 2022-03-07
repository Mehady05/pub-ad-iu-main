import React from 'react';
import './WidgetSection.css'

const WidgetSection = () => {
    return (
       <section className="widet-section padding">
           <div className="container">
               <div className="widget-wrap row">
                   <div className="col-md-3 xs-padding">
                       <div className="widget-content">
                           <img src="" alt="" />
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quod.</p>
                           <ul className="social-icon">
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                           </ul>
                        </div>
                   </div>
                   <div className="col-md-2 xs-padding">
                       <div className="widget-content">
                           <h3>popular courses</h3>
                           <ul className="widget-link">
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-2 xs-padding">
                       <div className="widget-content">
                           <h3>popular courses</h3>
                           <ul className="widget-link">
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-2 xs-padding">
                       <div className="widget-content">
                           <h3>popular courses</h3>
                           <ul className="widget-link">
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                               <li><a href="">fb</a></li>
                           </ul>
                       </div>
                   </div>
                   <div className="col-md-3 xs-padding">
                       <div className="widget-content">
                           <h3>get in touch</h3>
                           <div className="subscribe-wrap">
                               <form action="" className='subscribe-form'>
                                   <input type="email" name='email' id='subs-email' className='form-input' placeholder='your email.....'/>
                                   <button type='submit' className="submit">subscribe</button>
                                   <div className="clearfix"></div>
                                   <div id="subscribe-result">
                                       <p className="subscription-success"></p>
                                       <p className='subscription-error'></p>
                                   </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    );
};

export default WidgetSection;