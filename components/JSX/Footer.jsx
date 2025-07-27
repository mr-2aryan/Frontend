import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import logo from '../../assets/Images/logo.png';
import Instragram from '../../assets/Images/Instagram.png';
import t from '../../assets/Images/t.png';
import Facebook from '../../assets/Images/Facebook.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({
            duration: 500,
            once: false,
            disable: 'mobile',
            offset: 250,
            throttleDelay: 10
        });
        window.addEventListener('scroll', function () {
            AOS.refresh();
        });
    }, []);

    return (
        <div className="footer" data-aos="zoom-in"
            data-aos-duration="3000">
            <div className="container-fluid bgb pb-4">
                <div className="row mt-5 pt-5">
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="p-5 d-flex flex-column justify-content-start  text-white">
                            <a href="index2.html">
                                <img src={logo} alt="#" width="30%" />
                            </a>
                            <div>
                                <h5 className="fw-light mt-3 ls urb lts">Customize your jackets <br /> in a more beautiful way</h5>
                                <button onClick={() => { navigate('/Design'); }} className="fw-medium cyj  mt-3 p-3 urb" type="button">
                                    CUSTOMIZE YOUR JACKETS
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="p-5 d-flex justify-content-sm-start justify-content-md-center text-white">
                            <div>
                                <h3 className="ff mt-3 ">Shop</h3>
                                <Link to="/Shop" className="fw-light mt-3 lss urb text-decoration-none text-white">VARSITY JACKETS</Link><br />
                                <Link to="/Shop" className="fw-light mt-3 lss urb text-decoration-none text-white">HOODIES</Link><br />
                                <Link to="/Shop" className="fw-light mt-3 lss urb text-decoration-none text-white">BOMBER JACKETS</Link><br />
                                <Link to="/Shop" className="fw-light mt-3 lss urb text-decoration-none text-white">COACH JACKETS</Link><br />
                                <Link to="/Shop" className="fw-light mt-3 lss urb text-decoration-none text-white">CROPPED JACKETS</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="p-5 d-flex justify-content-sm-start justify-content-md-center text-white">
                            <div>
                                <h3 className="ff mt-3">Information</h3>
                                <h6 className="fw-light mt-3 lss urb">
                                    <a href="index2.html" className="text-decoration-none text-white">PRIVACY</a> <br />
                                    <a href="index2.html" className="text-decoration-none text-white">SHIPPING POLICY</a> <br />
                                    <a href="index2.html" className="text-decoration-none text-white">GET FREE QUOTE</a> <br />
                                    <Link to="/Contact" className="text-decoration-none text-white">CONTACT US</Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <div className="p-5 d-flex justify-content-center text-white">
                            <div>
                                <h3 className="ff mt-3 ">
                                    Contact Info</h3>
                                <h6 className="fw-light mt-3 lss text-start urb">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.75">
                                            <path
                                                d="M7.50001 0C4.74306 0 2.5 2.24306 2.5 5.00001C2.5 5.82765 2.70692 6.64825 3.10029 7.3761L7.22658 14.8389C7.28151 14.9384 7.38619 15 7.50001 15C7.61383 15 7.71851 14.9384 7.77344 14.8389L11.9012 7.37364C12.2931 6.64825 12.5 5.82762 12.5 4.99998C12.5 2.24306 10.257 0 7.50001 0ZM7.50001 7.5C6.12153 7.5 5.00002 6.37849 5.00002 5.00001C5.00002 3.62153 6.12153 2.50002 7.50001 2.50002C8.87849 2.50002 10 3.62153 10 5.00001C10 6.37849 8.87849 7.5 7.50001 7.5Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                    123 Main Street Chicago, IL 60601 United States
                                </h6>
                                <h6 className="fw-light mt-3 lss text-start urb">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.75" clip-path="url(#clip0_56_392)">
                                            <path
                                                d="M12.9243 10.4401C12.0182 9.66506 11.0986 9.1956 10.2035 9.96945L9.6691 10.4372C9.27808 10.7767 8.55105 12.363 5.74013 9.12945C2.92979 5.89999 4.60218 5.39716 4.99379 5.06057L5.53115 4.59228C6.42149 3.81667 6.08549 2.84028 5.44335 1.83521L5.05584 1.22643C4.41076 0.223695 3.70832 -0.434842 2.81564 0.339597L2.3333 0.761061C1.93876 1.04848 0.835932 1.98272 0.56842 3.75755C0.246469 5.88711 1.26208 8.32574 3.58891 11.0015C5.91281 13.6783 8.18813 15.0229 10.3434 14.9995C12.1347 14.9802 13.2164 14.019 13.5548 13.6695L14.0389 13.2475C14.9292 12.4736 14.376 11.6857 13.4693 10.909L12.9243 10.4401Z"
                                                fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_56_392">
                                                <rect width="15" height="15" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    +1 (312) 555-1234
                                </h6>
                                <h6 className="fw-light mt-3 lss text-start urb">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="white"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.75">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.72021 12.0482C1.90891 12.1391 2.11741 12.1877 2.33086 12.1877H12.6564C12.8106 12.1877 12.9623 12.1623 13.1058 12.1139L9.03181 7.8546C8.81971 8.05815 8.63026 8.2398 8.47216 8.39085C7.92856 8.9109 7.07176 8.9109 6.52816 8.39085C6.34081 8.21175 6.10846 7.98885 5.84641 7.7373L1.72021 12.0482Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.7399 3.32227C13.1404 3.90022 11.1782 5.79157 9.70776 7.20487L13.8458 11.531C13.9864 11.3083 14.0626 11.0486 14.0626 10.781V4.21852C14.0626 3.89002 13.9477 3.57337 13.7399 3.32227Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M1.25366 3.31494C1.04186 3.56724 0.924561 3.88704 0.924561 4.21899V10.7815C0.924561 10.9913 0.971511 11.1964 1.05956 11.3825L5.17031 7.08774C3.73196 5.70459 1.87961 3.91869 1.25366 3.31494Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.10352 2.8311L7.17622 7.7133C7.35742 7.8867 7.64302 7.8867 7.82422 7.7133C8.98942 6.59865 11.8646 3.8283 12.8969 2.8332C12.818 2.81955 12.7376 2.8125 12.6565 2.8125H2.33092C2.25427 2.8125 2.17822 2.8188 2.10352 2.8311Z"
                                                fill="white" />
                                        </g>
                                    </svg>
                                    hello@Companyinfo.com
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 pb-5">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="p-5 mb-0 d-flex justify-content-center justify-content-lg-start">
                            <h1 className="ff mb-0 text-white text-center text-lg-start">Get Our Updates</h1>
                        </div>
                        <div className="mt-0 d-flex justify-content-center justify-content-lg-start ms-lg-4 me-lg-2">
                            <div className="input-group w-100">
                                <input type="text" className="form-control bg-white px-4 py-3 urb it"
                                    placeholder="Enter your email address..." />
                                <button className="sub fw-semibold lts text-white px-4 py-3 urb" type="button">
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center justify-content-lg-end align-items-center align-items-lg-end pt-sm-5 mt-3 mt-lg-0">
                        <div className="me-5 d-flex">
                            <a className="aa" href="https://www.instagram.com">
                                <img className="mx-3" src={Instragram} alt="#" width="50px" />
                            </a>
                            <a className="aa" href="https://twitter.com">
                                <img className="mx-3" src={t} alt="#" width="50px" />
                            </a>
                            <a className="aa" href="https://www.facebook.com">
                                <img className="mx-3" src={Facebook} alt="#" width="50px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-12">
                        <hr className="hr-white" />
                    </div>

                    <div
                        className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center justify-content-sm-start mb-2 mb-sm-0">
                        <p className="text-white fw-light ms-sm-5 text-center text-sm-start urb lts">
                            Privacy Policy | Terms &amp; Condition | Sitemap
                        </p>
                    </div>

                    <div
                        className="col-lg-6 col-md-6 col-sm-6 col-12 d-flex justify-content-center justify-content-sm-end pe-sm-5">
                        <p className="text-white fw-light text-center text-sm-end urb ">
                            © 2024 EASY JACKETS DESIGNED BY ARCHETIVE SOLUTIONS. ALL RIGHTS RESERVED
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer