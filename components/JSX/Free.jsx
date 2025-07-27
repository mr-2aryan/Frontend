import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';

const Free = () => {
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
        <div className="free mt-3" data-aos="zoom-in">
            <div className="container-fluid texc">
                <div className="row py-5 mx-4">
                    <div className="col-lg-12 col-12">
                        <h1 className="ff fw-bold mb-0">Get Free Bulk Orders Quote
                        </h1>
                        <p className="urb lts mb-0 pt-4 justify-content-center">Easy Jackets is a leading manufacturer and supplier of custom varsity
                            jackets, letterman jackets,
                            bomber jackets, and hoodies. We supply custom jackets made of melton wool, cowhide leather,
                            cotton fleece, and satin to the USA, Canada, and the rest of the world.</p>
                        <p className="urb lts pt-4">Looking for custom varsity jackets for high schools, seniors className of
                            2020-2021, dance clubs,
                            football and baseball teams? You are at the right place. We produce premium quality, affordable
                            custom jackets. Our turnaround time is fast compared to others. We offer a huge discount on
                            bulk/team orders depending upon the quantity and customizations on a garment. You can use the
                            form below to specify your material requirements and customization on the custom seniors
                            jackets, bomber jackets, hoodies, and sweatshirts. We usually require 2-4 weeks to produce 15-50
                            jackets depending upon the customization on a garment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Free