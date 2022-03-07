import React from 'react';
import './BlogSection.css';
import images from'../../images/pexels-george-milton-7034485.jpg';

const BlogSection = () => {
    return (
        <section className="blog-section bg-grey padding">
            <div className="container">
                <div className="section-heading mb-40 text-center">
                    <h2>recent stories</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, unde?</p>
                </div>
                <div className="row">
                    <div className="col-lg-12 xs-padding">
                        <div className="blog-items grid-list row">
                            <div className="col-md-4 padding-15">
                                <div className="blog-post">
                                    <img src={images} alt="" />
                                    <div className="blog-content">
                                        <span className="data">
                                            january 01.2022
                                        </span>
                                        <h3><a href="">Standard gallery post</a></h3>
                                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae distinctio adipisci totam.</p>
                                        <a href="" className='post-meta'>read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 padding-15">
                                <div className="blog-post">
                                    <img src={images} alt="" />
                                    <div className="blog-content">
                                        <span className="data">
                                            january 01.2022
                                        </span>
                                        <h3><a href="">Standard gallery post</a></h3>
                                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae distinctio adipisci totam.</p>
                                        <a href="" className='post-meta'>read more...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 padding-15">
                                <div className="blog-post">
                                    <img src={images} alt="" />
                                    <div className="blog-content">
                                        <span className="data">
                                            january 01.2022
                                        </span>
                                        <h3><a href="">Standard gallery post</a></h3>
                                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae distinctio adipisci totam.</p>
                                        <a href="" className='post-meta'>read more...</a>
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

export default BlogSection;