import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { useNavigate } from 'react-router-dom';
import shady from '../../assets/Images/shady.png';

const Gallery = () => {
    const navigate = useNavigate();
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
        <div className="section5" data-aos="zoom-in">
            <div className="container">
                <div className="row mt-1 pt-1 mt-md-5 pt-md-5">
                    <div className="col-12">
                        <div className="image-wrapper position-relative">
                            <img src={shady} alt="" className="img-fluid custom-image border-radius" />

                            <div className="border-overlay"></div>

                            <div className="overlay-text text-white text-center">
                                <h1 className="ff ss fs-1">Photo Gallery</h1>
                                <button onClick={() => { navigate('/Shop'); }} className="shop4 py-3 px-5"
                                    type="button">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery