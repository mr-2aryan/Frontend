import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/Images/image.png';

const Slider11 = () => {
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
        <div className="section1 position-relative mt-2" data-aos="fade-down">
            <img src={image} className="img-fluid w-100 d-block" alt="Banner" />
            <div className="gradien"></div>
            <div
                className="over position-absolute top-50 start-0 translate-middle-y text-white ps-5 pe-4 w-100"
                style={{ maxWidth: '700px', zIndex: 2 }}
            >
                <h1 className="heading">
                    Make room for a <br /> better way to work.
                </h1>
                <p className="urb fs-5">
                    Create a sanctuary with high quality craftsmanship and premium <br />
                    products. Give your living space an effortlessly elegant touch.
                </p>
                <button
                    onClick={() => { navigate('/Shop'); }}
                    className="shop px-5 p-3 fs-5"
                    type="button"
                >
                    SHOP NOW
                </button>
            </div>
        </div>

    );
};

export default Slider11;
