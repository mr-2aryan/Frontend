import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import '../CSS/image-overlays.css';
import image11 from '../../assets/Images/image11.png';
import { useNavigate } from 'react-router-dom';

const Slider2 = () => {
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
        <div className="section00" data-aos="fade-down">
            <div className="container-fluid mt-0 align-items-center">
                <div className="row px-0">
                    <div className="image-hover-container d-flex align-items-center">
                        <img src={image11} alt="#" className="img-fluid" width="100%" />
                        <div className="image-overla">
                            <div className="overla-cont ms-5">
                                <a href="index.html#footer-section" className="text-white text-decoration-none">
                                    <h1 className="ff bh1">The Shop</h1>
                                </a>
                                <div className="shop-container">
                                    <button onClick={() => { navigate('/Shop'); }} className="ssbn py-3 px-5 fw-medium"
                                        type="button">
                                        SHOP NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider2