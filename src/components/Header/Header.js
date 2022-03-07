import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import NavArea from '../NavArea/NavArea';


const Header = () => {
    return (
        // <div className="site-preloader-wrap">
        //     <div className="spinner"></div>
        // </div>
        <header id="header" className="header-section">
            <div className="top-header">
                <div className="container">
                    <div className="top-content-wrap row">
                        <div className="col-md-8">
                            <ul className="left-info">
                                <li>
                                    <a href="">
                                        <span className="email">Email</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span>+88010247124441</span>
                                    </a>
                                </li>
                                <li><a href="">Have you any question?</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <ul className="right-info">
                                <li><a href="">Register</a></li>
                                <li><a href="">Login</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-white d-flex align-items-center">
                            <marquee behavior="" direction="left" width="100%" height="50px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, cupiditate.</marquee>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;