import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';

const Productlist = () => {
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
         <div className="section02" data-aos="zoom-in">
            <div className="container">
                <div className="row pt-5 px-0">
                    <div className="col-lg-12 col-12 text-center">
                        <h1 className="ff">Our Products</h1>
                        <p className="ff">Select a jacket style and design it.</p>
                        <hr className="mt-4" />
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Productlist