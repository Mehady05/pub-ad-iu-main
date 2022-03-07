import React from 'react';
import './NavArea.css'

const NavArea = () => {
    return (
        <div className="bottom-header">
            <div className="container">
                <div className="bottom-content-wrap row">
                    <div className="col-md-3">
                        <div className="site-branding">
                            <a href="">Public Administration</a>
                        </div>
                    </div>
                    <div className="col-md-9 d-none d-md-block text-right">
                        <ul id="mainmenu" className="nav navbar-nav nav-menu">
                            <li className="active">
                                <a href="">
                                    home
                                    <ul>
                                        <li>
                                            <a href="">Home Default</a>
                                        </li>
                                        <li>
                                            <a href="">Home Modern</a>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li><a href="">About</a></li>
                            <li><a href="">Cources</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                        <a href="" className="default-btn">Register Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavArea;