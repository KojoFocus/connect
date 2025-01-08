import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">
                        <div className="site-footer-wrap d-flex align-items-center">
                            <p className="copyright-text mb-0 me-4">
                                © {new Date().getFullYear()} ConnectPro. All rights reserved.
                            </p>

                            <ul className="social-icon">
                                <li>
                                    <a href="https://facebook.com/connectpro" className="social-icon-link bi-facebook" aria-label="Facebook"></a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/connectpro" className="social-icon-link bi-instagram" aria-label="Instagram"></a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/connectpro" className="social-icon-link bi-twitter" aria-label="Twitter"></a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com/company/connectpro" className="social-icon-link bi-linkedin" aria-label="LinkedIn"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12 text-lg-end">
                        <p className="copyright-text mb-0">
                            Designed and developed by <a href="https://www.connectpro.com" target="_blank" rel="noopener noreferrer">ConnectPro Team</a>.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
