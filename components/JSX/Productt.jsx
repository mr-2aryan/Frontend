import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import front from '../../assets/Images/front.png';
import photo3 from '../../assets/Images/Photo-3.png';
import { Link } from 'react-router-dom';



const Productt = () => {
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
        <div>
            <div className="section02" data-aos="fade-down">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6 col-sm-6"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className="p-3">
                                <p className="fw-medium bc mb-0">Jacket</p>
                                <h1 className="ff bh1 fw-medium">CROPED VERSITY JACKET</h1>
                                <div className="d-flex align-items-center">
                                    <svg width="101" height="21" viewBox="0 0 101 21" fill="none" className="mb-0"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0895 0.431641L12.3547 7.4033H19.6851L13.7547 11.712L16.0199 18.6837L10.0895 14.375L4.15903 18.6837L6.42426 11.712L0.493814 7.4033H7.82425L10.0895 0.431641Z"
                                            fill="#B4642F" />
                                        <path
                                            d="M30.2682 0.431519L32.5334 7.40317H39.8638L33.9334 11.7119L36.1986 18.6835L30.2682 14.3748L24.3377 18.6835L26.603 11.7119L20.6725 7.40317H28.003L30.2682 0.431519Z"
                                            fill="#B4642F" />
                                        <path
                                            d="M50.4474 0.431519L52.7126 7.40317H60.043L54.1126 11.7119L56.3778 18.6835L50.4474 14.3748L44.5169 18.6835L46.7822 11.7119L40.8517 7.40317H48.1822L50.4474 0.431519Z"
                                            fill="#B4642F" />
                                        <path
                                            d="M70.6261 0.431519L72.8913 7.40317H80.2218L74.2913 11.7119L76.5565 18.6835L70.6261 14.3748L64.6957 18.6835L66.9609 11.7119L61.0304 7.40317H68.3609L70.6261 0.431519Z"
                                            fill="#B4642F" />
                                        <path
                                            d="M90.8053 0.431519L93.0705 7.40317H100.401L94.4705 11.7119L96.7357 18.6835L90.8053 14.3748L84.8749 18.6835L87.1401 11.7119L81.2096 7.40317H88.5401L90.8053 0.431519Z"
                                            fill="#B4642F" />
                                    </svg>
                                    <p className="mb-0 gc ps-2">(162)</p>
                                </div>
                                <div className="d-flex flex-column gc fw-medium pt-3">
                                    <ul>
                                        <li>Melton Wool Body with Cowhide Leather Sleeves.</li>
                                        <li>New Cropped Versity Jacket For Women.</li>
                                        <li>Snap front closure.</li>
                                        <li>Dual exterior pockets.</li>
                                        <li>Acrylic knit on Collar, cuffs and waistband.</li>
                                        <li>Satin lining inside of the jacket.</li>
                                        <li>Available sizes: Unisex XXS to 6XL.</li>
                                        <li>Custom sizes available with extra charges.</li>
                                    </ul>
                                </div>
                                <h4 className="ff fw-medium">Size</h4>
                                <div className="size-options">
                                    <input type="radio" id="size-s" name="size" hidden />
                                    <label htmlFor="size-s" className="size-item">S</label>

                                    <input type="radio" id="size-m" name="size" hidden />
                                    <label htmlFor="size-m" className="size-item">M</label>

                                    <input type="radio" id="size-l" name="size" hidden />
                                    <label htmlFor="size-l" className="size-item">L</label>

                                    <input type="radio" id="size-xl" name="size" hidden />
                                    <label htmlFor="size-xl" className="size-item">XL</label>

                                    <input type="radio" id="size-xxl" name="size" hidden />
                                    <label htmlFor="size-xxl" className="size-item">XXL</label>
                                </div>

                                <h4 className="fw-bold pt-2">Color</h4>
                                <div className="color-selector d-flex gap-3 pt-2">
                                    <button type="button" className="color-btn" style={{ backgroundColor: '#836800' }}
                                        aria-label="Red"></button>
                                    <button type="button" className="color-btn" style={{ backgroundColor: '#000000' }}
                                        aria-label="Green"></button>
                                    <button type="button" className="color-btn" style={{ backgroundColor: '#c80000' }}
                                        aria-label="Blue"></button>
                                    <button type="button" className="color-btn bb" style={{ backgroundColor: '#ffffff' }}
                                        aria-label="Yellow"></button>
                                </div>
                                <div className="d-flex pt-5 align-items-center">
                                    <h2 className="bc ff">$28.05</h2>
                                    <h2 className="bc ps-3 ff text-decoration-line-through">$187</h2>
                                    <Link to="/Cart">
                                        <button className="SN py-3 px-5 fw-medium ms-4">
                                            ADD TO CART
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6" data-aos="fade-left"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className="row pt-3">
                                <div className="col-lg-8 col-sm-8 col-8 px-2 d-flex align-items-center" data-aos="zoom-in">
                                    <div className="bg2 py-4">
                                        <img src={front} alt="#" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4 col-4 px-2 d-flex flex-column align-items-center" >
                                    <div className="bg2 py-5">
                                        <img src={photo3} alt="#" className="img-fluid py-4" />
                                    </div>
                                    <div className="bg2 mt-4 py-5">
                                        <img src={photo3} alt="#" className="img-fluid py-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section03 mt-5" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <div className="container bg2">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 col-10 col-sm-10 p-5">
                            <div className="d-flex flex-column flex-lg-row justify-content-start">
                                <h3 className="ff ur active fw-medium mb-3 mb-lg-0 me-lg-5">Description</h3>
                                <h3 className="ff ur fw-medium mb-3 mb-lg-0 mx-lg-5">Size Guide</h3>
                                <h3 className="ff ur fw-medium mb-3 mb-lg-0 mx-lg-5">Shipping</h3>
                                <h3 className="ff ur fw-medium mb-3 mb-lg-0 mx-lg-5">Reviews</h3>
                            </div>

                            <div className="gc fs-5 fw-normal pt-5">
                                <ul className="ps-3">
                                    <li>Melton Wool Body with Cowhide Leather Sleeves.</li>
                                    <li>New Cropped Versity Jacket For Women.</li>
                                    <li>Snap front closure.</li>
                                    <li>Dual exterior pockets.</li>
                                    <li>Acrylic knit on Collar, cuffs and waistband.</li>
                                    <li>Satin lining inside of the jacket.</li>
                                    <li>Available sizes: Unisex XXS to 6XL.</li>
                                    <li>Custom sizes available with extra charges.</li>
                                </ul>
                            </div>

                            <div className="d-flex flex-column flex-sm-row pt-3 align-items-start align-items-sm-center gap-3">
                                <h4 className="fw-bold mb-2 mb-sm-0">Size</h4>
                                <h5 className="fw-normal gc mb-2 mb-sm-0">See</h5>
                                <h5 className="mb-0">
                                    <Link to="/Guide" className="text-decoration-none fw-normal bc">Size Guide</Link>
                                </h5>
                            </div>

                            <div className="d-flex flex-column flex-sm-row pt-2 align-items-start align-items-sm-center gap-3">
                                <h4 className="fw-bold mb-2 mb-sm-0">Style</h4>
                                <h5 className="fw-normal gc mb-0">Sleek and Elegant</h5>
                            </div>

                            <div className="d-flex flex-column flex-sm-row pt-2 align-items-start align-items-sm-center gap-3">
                                <h4 className="fw-bold mb-2 mb-sm-0">Material</h4>
                                <h5 className="fw-normal gc m mb-0">
                                    Water-Repellant Shirt, 100% recycled polyester plain weave with patented technology
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Productt