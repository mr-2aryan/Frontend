import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { Link } from 'react-router-dom';
import fcc from '../../assets/Images/fcc.png';
import acoo from '../../assets/Images/acoo.png';
import yellow from '../../assets/Images/yellow.png';
import green from '../../assets/Images/green.png';

const Similar = () => {
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
        <div className="section8" >
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-lg-12">
                        <h1 className="ft">Similar Products</h1>
                        <hr className="mt-4" />
                    </div>
                    <div className="row mt-3 g-4">
                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                <Link to="/Product">
                                    <img src={acoo} alt="Product" className="img-fluid" />
                                </Link>
                                <div className="icon-container">
                                    <div className="icon-wrapper" title="Like">
                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Share">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Full Sacreen">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="add-to-cart urb lts">Add to Cart</div>
                            </div>
                            <div>
                                <h6 className="pp pt-4 urb lts fw-semibold">APPAREL</h6>
                                <h4 className="ff mb-0">No. 6 Basketball Jersey</h4>
                                <p className="pt-2 p2 fs-5">$93.12</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                <Link to="/Product">
                                    <img src={fcc} alt="Product" className="img-fluid" width="93%" />
                                </Link>
                                <div className="icon-container" aria-label="Product actions">
                                    <div className="icon-wrapper" title="Like">
                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Share">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Full Screen">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="add-to-cart urb lts">Add to Cart</div>
                            </div>
                            <div>
                                <h6 className="pp pt-4 urb lts fw-semibold">JACKETS</h6>
                                <h4 className="ff mb-0">Versity Jackets</h4>
                                <p className="pt-2 p2 fs-5">$141.75</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                <Link to="/Product">
                                    <img src={green} alt="Product" className="img-fluid" width="100%%" />
                                </Link>                                    <div className="icon-container" aria-label="Product actions">
                                    <div className="icon-wrapper" title="Like">
                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Share">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Full Screen">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="add-to-cart urb lts">Add to Cart</div>
                            </div>
                            <div>
                                <h6 className="pp pt-4 urb lts fw-semibold">JACKETS</h6>
                                <h4 className="ff mb-0">Versity Jackets</h4>
                                <p className="pt-2 p2 fs-5">$141.75</p>
                            </div>  
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12" data-aos="zoom-in">
                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                <Link to="/Product">
                                    <img src={yellow} alt="Product" className="img-fluid" width="100%" />
                                </Link>                                         <div className="icon-container" aria-label="Product actions">
                                    <div className="icon-wrapper" title="Like">
                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Share">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                        </svg>
                                    </div>
                                    <div className="icon-wrapper" title="Full Screen">
                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="add-to-cart">Add to Cart</div>
                            </div>
                            <div>
                                <h6 className="pp pt-4 urb lts fw-semibold">JACKETS</h6>
                                <h4 className="ff mb-0">Versity Jackets</h4>
                                <p className="pt-2 p2 fs-5">$141.75</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/Shop">
                                <button className="view px-5 py-3 urb lts fw-semibold" type="button">
                                    VIEW ALL
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Similar