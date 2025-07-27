import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import image11 from '../../assets/Images/image11.png';
import { useNavigate } from 'react-router-dom';

const Slider3 = () => {
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
        <div className="section2" data-aos="fade-down">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-12 px-0">
                        <div className="image-hover-conta position-relative">
                            <img src={image11} alt="Product" className="img-fluid w-100" />
                            <div className="image-over">
                                <div className="overlay-con text-white ps-5 pe-4">
                                    <h1 className="mb-2 ff lts">Design Your Own Jacket</h1>
                                    <p className="mb-3 lts urb">Clothoo introduces the state-of-the-art Design Lab which serves as a
                                        unique platform to help you design your very own varsity jackets. Choose your
                                        material combination, add your colors and names, upload patches, or add ready-to-use
                                        mascots. This is your place to create your own style. You can choose materials,
                                        sleeves styles, plain or quilted lining, zip-up or button closure to design for
                                        yourself a unique varsity jacket. We use premium quality fabrics and a wide range of
                                        colors to construct your creation and help you live the dream! Go creative!</p>
                                    <button className="shop8 fs-5 urb lts px-5 py-3" onClick={() => { navigate('/Shop'); }}> SHOP NOW </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider3