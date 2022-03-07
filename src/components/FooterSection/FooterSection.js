import React from 'react';
import ScrollToTop from "react-scroll-to-top";
import './FooterSection.css'

const FooterSection = () => {
    return (
        <footer className="footer-section">
            <ScrollToTop smooth top="20" color="#fab702" id='scroll-to-top'/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 sm-padding">
                        <div className="copyright">&copy; 2022 public administration</div>
                    </div>
                    <div className="col-md-6 sm-padding">
                        <ul className="footer-social">
                            <li><a href="">conditions</a></li>
                            <li><a href="">terms</a></li>
                            <li><a href="">report problem</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;