import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import Rectangle from '../../assets/Images/Rectangle.png';
import Rectangl1 from '../../assets/Images/Rectangle1.png';

const Updates = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            disable: 'mobile',
            offset: 250,
            throttleDelay: 100
        });
        window.addEventListener('scroll', function () {
            AOS.refresh();
        });
    }, []);

    return (
        <div className="section9">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mt-5 flex-wrap">
                    <h1 className="ff mb-0">Latest Updates</h1>
                    <Link to="/Shop" className="text-decoration-none d-inline-flex text-dark align-items-center mt-2 mt-sm-0">
                        <span className="fw-semibold urb lts">
                            See All Articles
                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="ms-2">
                                <path
                                    d="M26.3954 8.18178C26.7859 7.79125 26.7859 7.15809 26.3954 6.76756L20.0314 0.403603C19.6409 0.0130782 19.0077 0.0130782 18.6172 0.403603C18.2267 0.794127 18.2267 1.42729 18.6172 1.81782L24.274 7.47467L18.6172 13.1315C18.2267 13.522 18.2267 14.1552 18.6172 14.5457C19.0077 14.9363 19.6409 14.9363 20.0314 14.5457L26.3954 8.18178ZM0.00292969 8.47467H25.6883V6.47467H0.00292969V8.47467Z"
                                    fill="#C1032F"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="container">
                    <div className="row gx-4 mt-4 justify-content-center">
                        <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center" data-aos="zoom-out">
                            <div className="p-3 ii">
                                <img src={Rectangle} alt="#" width="100%"/>
                                    <div className="bottom-right-box">
                                        <div className="x urb lts">2<br/> FEB</div>
                                    </div>
                                    <div>
                                        <h5 className="ff pt-3 fw-semibold">The Ultimate Guide to Choosing the Right Sportswear for
                                            Your Workout</h5>
                                        <p className="urb lts fs-5">Michael Davis</p>
                                    </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center" data-aos="zoom-out">
                            <div className="p-3 ii">
                                <img src={Rectangl1} alt="#" width="100%"/>
                                    <div className="bottom-right-box">
                                        <div className="x urb lts">2<br/> FEB</div>
                                    </div>
                                    <div>
                                        <h5 className="ff pt-3 fw-semibold">The Ultimate Guide to Choosing the Right Sportswear for
                                            Your Workout</h5>
                                        <p className="urb lts fs-5">Michael Davis</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 d-flex justify-content-center" data-aos="zoom-out">
                            <div className="p-3 ii">
                                <img src={Rectangle} alt="#" width="100%"/>
                                    <div className="bottom-right-box">
                                        <div className="x urb lts">2<br/> FEB</div>
                                    </div>
                                    <div>
                                        <h5 className="ff pt-3 fw-semibold">The Ultimate Guide to Choosing the Right Sportswear for
                                            Your Workout</h5>
                                        <p className="urb lts fs-5">Michael Davis</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates