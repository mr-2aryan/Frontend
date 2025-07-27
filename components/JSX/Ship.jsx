import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Vredblack from '../../assets/Images/Vredblack.png';
import fcc from '../../assets/Images/fcc.png';
import acoo from '../../assets/Images/acoo.png';
import yellow from '../../assets/Images/yellow.png';
import green from '../../assets/Images/green.png';

const Ship = () => {
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
        <div className="section4">
            <div className="container pt-5">
                <div className="row pt-lg-5 mt-lg-5 mt-sm-2 pt-sm-2">

                    <div className="col-lg-5 col-sm-12 d-flex justify-content-center" data-aos="zoom-in">
                        <div className="jacket-hover-area position-relative w-100 overflow-hidden"
                            style={{ borderRadius: '20px', minHeight: '500px' }}>
                            <img className="jacket-img position-absolute top-0 start-0 w-100 h-100"
                                src={Vredblack} alt="Jacket"
                                style={{ objectFit: 'cover', borderRadius: '20px', zIndex: 0 }} />
                            <div className="gradient-overlay position-absolute top-0 end-0 w-100 h-100" style={{ background: 'linear-gradient(to right, rgba(193, 113, 68, 1) 30%, transparent 100%)', borderRadius: '20px', zIndex: 1 }}>
                            </div>
                            <div className="jacket-hover-text position-absolute top-50 start-0 translate-middle-y text-white px-4 w-100"
                                style={{ zIndex: 2 }}>
                                <h1 className="ff ps-3">Wear Your Style <br /> With Pride!</h1>
                                <p className="ps-3 urb fw-semibold lts fst-italic">Design your own unique varsity jacket <br />
                                    and stand out from the crowd. Our
                                    <br />
                                    customization options allow you to <br /> showcase your personal style and <br /> make a
                                    statement. From choosing
                                    the <br /> colors and materials to adding <br /> patches, embroidery, and <br /> personalized
                                    lettering, we'll bring
                                </p>
                                <div className="d-flex justify-content-center">
                                    <button onClick={() => { navigate('/Design'); }}
                                        className="shop3 py-4 px-5 mt-3 urb lts" type="button">Customise Your Jackets</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 ps-3 mt-sm-0 mt-5" data-aos="zoom-in">

                        <div className="d-flex align-items-center justify-content-between ">
                            <h1 className="ff mb-0">Ready To Ship</h1>
                            <Link to="/Shop" className="text-decoration-none text-dark">
                                <span className="mb-0 fw-semibold urb lts">View All
                                    <svg width="27" height="15" viewBox="0 0 27 15" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M26.3954 8.18178C26.7859 7.79125 26.7859 7.15809 26.3954 6.76756L20.0314 0.403603C19.6409 0.0130782 19.0077 0.0130782 18.6172 0.403603C18.2267 0.794127 18.2267 1.42729 18.6172 1.81782L24.274 7.47467L18.6172 13.1315C18.2267 13.522 18.2267 14.1552 18.6172 14.5457C19.0077 14.9363 19.6409 14.9363 20.0314 14.5457L26.3954 8.18178ZM0.00292969 8.47467H25.6883V6.47467H0.00292969V8.47467Z"
                                            fill="#C1032F" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div className="row">
                            <div className="col-lg-5 mt-3" data-aos="zoom-in">
                                <div className="bg p-3 py-5 position-relative icon-wrap">
                                    <Link to="/Product">
                                        <img className="img-fluid d-block mx-auto" src={fcc} alt="#"
                                            data-new-src={green} width="100%" />
                                    </Link>
                                    <div
                                        className="d-flex justify-content-center px-2 cgap mb-2 position-absolute bottom-0 start-50 translate-middle-x icons-container mm">
                                        <div className="svgbg">
                                            <a href="index2.html">
                                                <svg width="25" height="22" viewBox="0 0 21 18"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svgbg">
                                            <a href="index2.html">
                                                <svg width="25" height="26" viewBox="0 0 23 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.84229 5.27696H22.0056L19.3718 14.4951H7.47603M11.4265 19.7626C11.4265 20.4899 10.8369 21.0795 10.1096 21.0795C9.38233 21.0795 8.79272 20.4899 8.79272 19.7626C8.79272 19.0353 9.38233 18.4457 10.1096 18.4457C10.8369 18.4457 11.4265 19.0353 11.4265 19.7626ZM18.0549 19.7626C18.0549 20.4899 17.4653 21.0795 16.738 21.0795C16.0108 21.0795 15.4211 20.4899 15.4211 19.7626C15.4211 19.0353 16.0108 18.4457 16.738 18.4457C17.4653 18.4457 18.0549 19.0353 18.0549 19.7626ZM19.3717 17.1288H8.28976C7.31084 17.1288 6.67413 16.0987 7.1119 15.223L7.47589 14.4951M0.847656 2.64321H4.08985C5.21099 6.56789 7.47593 14.4951 7.47593 14.4951"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svgbg">
                                            <a href="index2.html">
                                                <svg width="25" height="24" viewBox="0 0 21 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svgbg">
                                            <a href="index2.html">
                                                <svg width="25" height="24" viewBox="0 0 21 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.1" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>                                <div>
                                    <h6 className="pp pt-4 urb lts fw-semibold">APPAREL</h6>
                                    <h4 className="ff mb-0 pt-1">Versity Crop Hoodie</h4>
                                    <p className="pt-1 p2 fw-normal fs-5 urb lts">$222.69</p>
                                </div>
                            </div>
                            <div className="col-lg-5 mt-3" data-aos="zoom-in">
                                <div className="bg p-3 py-5 pad position-relative icon-wrap">
                                    <Link to="/Product">
                                        <img className="img-fluid py-2 d-block mx-auto" src={acoo} alt="#"
                                            data-new-src={yellow} width="100%" />
                                    </Link>
                                    <div
                                        className="d-flex justify-content-center px-2 cgap mb-2 position-absolute bottom-0 start-50 translate-middle-x icons-container mm">
                                        <div className="svgbg">
                                            <a href="index.html">
                                                <svg width="25" height="22" viewBox="0 0 21 18"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svgbg">
                                            <a href="index2.html">
                                                <svg width="25" height="26" viewBox="0 0 23 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M4.84229 5.27696H22.0056L19.3718 14.4951H7.47603M11.4265 19.7626C11.4265 20.4899 10.8369 21.0795 10.1096 21.0795C9.38233 21.0795 8.79272 20.4899 8.79272 19.7626C8.79272 19.0353 9.38233 18.4457 10.1096 18.4457C10.8369 18.4457 11.4265 19.0353 11.4265 19.7626ZM18.0549 19.7626C18.0549 20.4899 17.4653 21.0795 16.738 21.0795C16.0108 21.0795 15.4211 20.4899 15.4211 19.7626C15.4211 19.0353 16.0108 18.4457 16.738 18.4457C17.4653 18.4457 18.0549 19.0353 18.0549 19.7626ZM19.3717 17.1288H8.28976C7.31084 17.1288 6.67413 16.0987 7.1119 15.223L7.47589 14.4951M0.847656 2.64321H4.08985C5.21099 6.56789 7.47593 14.4951 7.47593 14.4951"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.5" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svgbg">
                                            <a href="index2.html">
                                                <svg width="25" height="24" viewBox="0 0 21 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div className="svgbg">
                                            <a href="index.html">
                                                <svg width="25" height="24" viewBox="0 0 21 20"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                        stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="1.1" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h6 className="pp pt-4 urb lts fw-semibold">APPAREL</h6>
                                    <h4 className="ff mb-0 pt-1">Versity Jackets</h4>
                                    <p className="pt-1 p2 fw-normal fs-5 urb lts">$143.12</p>
                                </div>
                            </div>
                            <div className="col-lg-2 mx-auto d-flex align-items-center justify-content-center mb-5 pb-5">
                                <div className="box22 mx-auto">
                                    <div className="svgbg">
                                        <Link to="/Shop">
                                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M14.2462 10.3481C14.2462 10.1905 14.186 10.0327 14.0656 9.91238L7.90265 3.74938C7.66183 3.50856 7.27187 3.50856 7.0312 3.74938C6.79054 3.9902 6.79038 4.38016 7.0312 4.62083L12.7585 10.3481L7.0312 16.0754C6.79038 16.3162 6.79038 16.7062 7.0312 16.9468C7.27202 17.1875 7.66198 17.1876 7.90265 16.9468L14.0656 10.7838C14.186 10.6635 14.2462 10.5057 14.2462 10.3481Z"
                                                    fill="#303030" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ship