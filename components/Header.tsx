import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-3 col-md-5 col-7">
                        <p className="text-white mb-0">
                            <i className="bi-clock site-header-icon me-2"></i>
                            Mon-Fri 10:00-19:00
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-3 col-5">
                        <p className="text-white mb-0">
                            <a href="tel:+233-54-048-4052" className="text-white">
                                <i className="bi-telephone site-header-icon me-2"></i>
                                +233 54 048 4052
                            </a>
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-3 col-12 ms-auto">
                        <ul className="social-icon">
                            <li><a href="https://facebook.com" className="social-icon-link bi-facebook"></a></li>

                            <li><a href="https://pinterest.com" className="social-icon-link bi-pinterest"></a></li>

                            <li><a href="https://twitter.com" className="social-icon-link bi-twitter"></a></li>

                            <li><a href="https://www.youtube.com" className="social-icon-link bi-youtube"></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
