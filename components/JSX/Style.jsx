import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { Link } from 'react-router-dom';
import acoo from '../../assets/Images/acoo.png';
import fcc from '../../assets/Images/fcc.png';
import green from '../../assets/Images/green.png';
import yellow from '../../assets/Images/yellow.png';

const Style = () => {
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
        <div className="section3">
            <div className="container-fluid justify-content-center">
                <div className="row pt-5 mt-5 justify-content-center">
                    <div className="col-lg-12 d-flex justify-content-center text-center" data-aos="zoom-in-down">
                        <div>
                            <h1 className="ff fw-medium">Select Jacket Style</h1>
                            <h6 className="ff fw-medium">Select a jacket style and design it.</h6>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 g-3 justify-content-center" data-aos="zoom-in-up">
                    <div className="col-lg-2 col-md-6 col-sm-12 mx-1">
                        <div className="p-3 py-5 d-flex justify-content-center bg">
                            <Link to="/Product">
                                <img src={acoo} alt="Product" className="img-fluid" />
                            </Link>
                            <div className="icon-container" aria-label="Product actions">
                            </div>
                            <div className="add-to-cart lts fw-normal urb">Design Now</div>
                        </div>
                        <div>
                            <h6 className="pp pt-4 fw-bold urb">APPAREL</h6>
                            <h4 className="ff mb-0">No. 6 Basketball Jersey</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 mx-1" data-aos="zoom-in-up">
                        <div className="p-3 py-5 d-flex justify-content-center align-ites bg">
                            <Link to="/Product">
                                <img src={fcc} alt="Product" className="img-fluid" width="93%" />
                            </Link>
                            <div className="icon-container" aria-label="Product actions">
                            </div>
                            <div className="add-to-cart lts fw-normal urb">Design Now</div>
                        </div>
                        <div>
                            <h6 className="pp pt-4 fw-bold urb">JACKETS</h6>
                            <h4 className="ff mb-0">Versity Jackets</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 mx-1" data-aos="zoom-in-up">
                        <div className="p-3 py-5 d-flex justify-content-center bg">
                            <Link to="/Product">
                                <img src={green} alt="Product" className="img-fluid" />
                            </Link>
                            <div className="icon-container" aria-label="Product actions">
                            </div>
                            <div className="add-to-cart lts fw-normal urb">Design Now</div>
                        </div>
                        <div>
                            <h6 className="pp pt-4 fw-bold urb">JACKETS</h6>
                            <h4 className="ff mb-0 ">Versity Jackets</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 mx-1" data-aos="zoom-in-up">
                        <div className="p-3 py-5 d-flex justify-content-center bg">
                            <Link to="/Product">
                                <img src={yellow} alt="Product" className="img-fluid" />
                            </Link>
                            <div className="icon-container" aria-label="Product actions">
                            </div>
                            <div className="add-to-cart lts fw-normal urb">Design Now</div>
                        </div>
                        <div>
                            <h6 className="pp pt-4 fw-bold urb">JACKETS</h6>
                            <h4 className="ff mb-0">Versity Jackets</h4>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 mx-1">
                        <div className="p-3 py-5 d-flex justify-content-center bg">
                            <Link to="/Product">
                                <img src={yellow} alt="Product" className="img-fluid" />
                            </Link>
                            <div className="icon-container" aria-label="Product actions">
                            </div>
                            <div className="add-to-cart lts fw-normal urb">Design Now</div>
                        </div>
                        <div>
                            <h6 className="pp pt-4 fw-bold urb">JACKETS</h6>
                            <h4 className="ff mb-0">Versity Jackets</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Style