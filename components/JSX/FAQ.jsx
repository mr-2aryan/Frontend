import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';

const FAQ = () => {
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
        <div className="section4 bg mt-5">
            <div className="container-fluid">
                <div className="row pt-5" data-aos="zoom-out">
                    <div className="col-12 d-flex justify-content-center">
                        <h1 className="ff hss fw-medium">FAQS</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8 col-sm-12 col-md-8 p-5 mt-5 faq" data-aos="zoom-in-right">
                        <div className="row align-items-top">
                            <div className="col-lg-2">
                                <h1 className=" text-white hss fw-bolder d-flex justify-content-start">01</h1>
                            </div>
                            <div className="col-lg-10 d-flex-columnn align-items-center">
                                <h3 className="ff">How do I start designing?</h3>
                                <p className="fw-lighter lts urb mb-0">Start by selecting a jacket style from the options above.
                                    Once
                                    you've selected a
                                    style, you can begin customizing it by choosing materials, colors, and adding
                                    personal touches like names or patches.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12 col-md-8 p-5 faq mt-2" data-aos="zoom-in-left">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <h1 className=" hss fw-bolder text-white">02</h1>
                            </div>
                            <div className="col-lg-10 d-flex-columnn align-items-center">
                                <h3 className="ff">What materials are available?</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12 col-md-8 p-5 faq mt-2" data-aos="zoom-in-right">
                        <div className="row align-items-center">
                            <div className="col-lg-2">
                                <h1 className=" hss text-white fw-bolder">03</h1>
                            </div>
                            <div className="col-lg-10 d-flex-columnn align-items-center">
                                <h3 className="ff">How long does it take to receive my custom jacket?</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ