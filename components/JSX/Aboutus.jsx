import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';

const Aboutus = () => {
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
        <div className="section10">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-12 col-sm-12 col-md-12 text-center justify-contet-center">
                        <h2 className="ff fw-medium">What People Say About Us!</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row gx-4 mt-5">
                    <div className="col-md-4 col-lg-4 col-sm-12" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="p-5 bg cr">
                            <svg width="68  " height="47" viewBox="0 0 68 47" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.6281 10.9864C13.7116 10.7246 14.8191 10.5928 15.93 10.5934C24.7275 10.5934 31.8572 18.7414 31.8572 28.7884C31.8572 38.8384 24.7275 46.9864 15.93 46.9864C7.1325 46.9864 0 38.8414 0 28.7884C0 28.4944 0.005625 28.1974 0.0196875 27.9034H0C0 12.7384 10.8 0.399414 24.075 0.399414V6.50741C19.7691 6.50741 15.7978 8.18141 12.6281 10.9864ZM48.2738 10.9864C49.3369 10.7284 50.4394 10.5934 51.57 10.5934C60.3675 10.5934 67.5 18.7414 67.5 28.7884C67.5 38.8384 60.3675 46.9864 51.57 46.9864C42.7725 46.9864 35.6428 38.8414 35.6428 28.7884C35.6428 28.4944 35.6484 28.1974 35.6625 27.9034H35.6428C35.6428 12.7384 46.4428 0.399414 59.7178 0.399414V6.50741C55.4091 6.50741 51.4434 8.18141 48.2738 10.9864Z"
                                    fill="#B4642F" />
                            </svg>
                            <p className=" lss pt-4 fw-medium urb lts">I recently purchased a jacket from EasyJacket, and I am beyond
                                impressed! The quality of the
                                material is top-notch, offering both warmth and breathability, perfect for chilly days. The
                                fit is true to size, and the design is both stylish and versatile, making it easy to pair
                                with any outfit.</p>
                            <p className="mb-0 fw-normal lsp urb lts">Peter, Belgium</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 mt-4 mb-4" data-aos="fade-down"
                        data-aos-duration="3000">
                        <div className="p-5 bg cr">
                            <svg width="68" height="47" viewBox="0 0 68 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.6281 10.9864C13.7116 10.7246 14.8191 10.5928 15.93 10.5934C24.7275 10.5934 31.8572 18.7414 31.8572 28.7884C31.8572 38.8384 24.7275 46.9864 15.93 46.9864C7.1325 46.9864 0 38.8414 0 28.7884C0 28.4944 0.005625 28.1974 0.0196875 27.9034H0C0 12.7384 10.8 0.399414 24.075 0.399414V6.50741C19.7691 6.50741 15.7978 8.18141 12.6281 10.9864ZM48.2738 10.9864C49.3369 10.7284 50.4394 10.5934 51.57 10.5934C60.3675 10.5934 67.5 18.7414 67.5 28.7884C67.5 38.8384 60.3675 46.9864 51.57 46.9864C42.7725 46.9864 35.6428 38.8414 35.6428 28.7884C35.6428 28.4944 35.6484 28.1974 35.6625 27.9034H35.6428C35.6428 12.7384 46.4428 0.399414 59.7178 0.399414V6.50741C55.4091 6.50741 51.4434 8.18141 48.2738 10.9864Z"
                                    fill="#B4642F" />
                            </svg>
                            <p className=" lss pt-4 fw-medium urb lts">I recently purchased a jacket from EasyJacket, and I am beyond
                                impressed! The quality of the
                                material is top-notch, offering both warmth and breathability, perfect for chilly days. The
                                fit is true to size, and the design is both stylish and versatile, making it easy to pair
                                with any outfit.</p>
                            <p className="mb-0 fw-normal lsp urb lts">Peter, Belgium</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className="p-5 bg cr">
                            <svg width="68" height="47" viewBox="0 0 68 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.6281 10.9864C13.7116 10.7246 14.8191 10.5928 15.93 10.5934C24.7275 10.5934 31.8572 18.7414 31.8572 28.7884C31.8572 38.8384 24.7275 46.9864 15.93 46.9864C7.1325 46.9864 0 38.8414 0 28.7884C0 28.4944 0.005625 28.1974 0.0196875 27.9034H0C0 12.7384 10.8 0.399414 24.075 0.399414V6.50741C19.7691 6.50741 15.7978 8.18141 12.6281 10.9864ZM48.2738 10.9864C49.3369 10.7284 50.4394 10.5934 51.57 10.5934C60.3675 10.5934 67.5 18.7414 67.5 28.7884C67.5 38.8384 60.3675 46.9864 51.57 46.9864C42.7725 46.9864 35.6428 38.8414 35.6428 28.7884C35.6428 28.4944 35.6484 28.1974 35.6625 27.9034H35.6428C35.6428 12.7384 46.4428 0.399414 59.7178 0.399414V6.50741C55.4091 6.50741 51.4434 8.18141 48.2738 10.9864Z"
                                    fill="#B4642F" />
                            </svg>
                            <p className=" lss pt-4 fw-medium urb lts">I recently purchased a jacket from EasyJacket, and I am beyond
                                impressed! The quality of the
                                material is top-notch, offering both warmth and breathability, perfect for chilly days. The
                                fit is true to size, and the design is both stylish and versatile, making it easy to pair
                                with any outfit.</p>
                            <p className="mb-0 fw-normal lsp urb lts">Peter, Belgium</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus