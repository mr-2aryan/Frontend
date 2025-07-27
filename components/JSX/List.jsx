import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import acoo from '../../assets/Images/acoo.png';
import fcc from '../../assets/Images/fcc.png';
import green from '../../assets/Images/green.png';

const List = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            disable: 'mobile',
            offset: 200,
            throttleDelay: 100
        });
        window.addEventListener('scroll', function () {
            AOS.refresh();
        });
    }, []);

    return (
        <div className="section03">
            <div className="container">
                <div className="row pt-4 justify-content-center">
                    <div className="d-flex-column ps-2 col-lg-3">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="row px-0">
                            <div className="col-lg-8 col-md-8 pb-3">
                                <div className="d-flex pt-2 align-items-center">
                                    <p className="urb lts">Showing 1 - 15 of 150 results.</p>
                                    <p className="gc ms-auto urb lts">Sort by</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="d-flex pt-1 align-items-center">
                                    <svg width="2" height="24" viewBox="0 0 2 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.0834961" width="1.68634" height="24" fill="#B4642F" />
                                    </svg>
                                    <div className="btn-group dropd ms-4 mt-0 fw-medium btn-sm">
                                        <select className="form-select urb lts" aria-label="Sort by popularity">
                                            <option value="popularity">Popularity</option>
                                            <option value="priceLowHigh">Price Low to High</option>
                                            <option value="priceHighLow">Price High to Low</option>
                                            <option value="newestFirst">Newest First</option>
                                        </select>
                                    </div>
                                    <a href="index2.htm" className="ms-auto">
                                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <path d="M2.02881 4.5H19.7354V6H2.02881V4.5Z" fill="#303030" />
                                                <path d="M2.02881 11.25H19.7354V12.75H2.02881V11.25Z" fill="#303030" />
                                                <path d="M2.02881 18H19.7354V19.5H2.02881V18Z" fill="#303030" />
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <hr className="mt-3" />
                            <div className="section8">
                                <div className="container">
                                    <div className="row mt-3 g-4 justify-content-center">
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg position-relative">
                                                <Link to="/Product">
                                                    <img src={acoo} alt="Product" className="img-fluid" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">APPAREL</h6>
                                                <h4 className="ff mb-0">No. 6 Basketball Jersey</h4>
                                                <p className="pt-2 p2 fw-semibold">$93.12</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={fcc} alt="Product" className="img-fluid" width="93%" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">JACKETS</h6>
                                                <h4 className="ff mb-0">Versity Jackets</h4>
                                                <p className="pt-2 p2 fw-semibold">$141.75</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={green} alt="Product" className="img-fluid"
                                                        width="100%" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">JACKETS</h6>
                                                <h4 className="ff mb-0">Versity Jackets</h4>
                                                <p className="pt-2 p2 fw-semibold">$141.75</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={acoo} alt="Product" className="img-fluid" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">APPAREL</h6>
                                                <h4 className="ff mb-0">No. 6 Basketball Jersey</h4>
                                                <p className="pt-2 p2 fw-semibold">$93.12</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={fcc} alt="Product" className="img-fluid" width="93%" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">JACKETS</h6>
                                                <h4 className="ff mb-0">Versity Jackets</h4>
                                                <p className="pt-2 p2 fw-semibold">$141.75</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={green} alt="Product" className="img-fluid"
                                                        width="100%" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">JACKETS</h6>
                                                <h4 className="ff mb-0">Versity Jackets</h4>
                                                <p className="pt-2 p2 fw-semibold">$141.75</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={acoo} alt="Product" className="img-fluid" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">APPAREL</h6>
                                                <h4 className="ff mb-0">No. 6 Basketball Jersey</h4>
                                                <p className="pt-2 p2 fw-semibold">$93.12</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={fcc} alt="Product" className="img-fluid" width="93%" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">JACKETS</h6>
                                                <h4 className="ff mb-0">Versity Jackets</h4>
                                                <p className="pt-2 p2 fw-semibold">$141.75</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in">
                                            <div className="p-4 py-5 d-flex justify-content-center bg">
                                                <Link to="/Product">
                                                    <img src={green} alt="Product" className="img-fluid"
                                                        width="100%" />
                                                </Link>
                                                <div className="icon-container" aria-label="Product actions">
                                                    <div className="icon-wrapper" title="Icon 1">
                                                        <svg width="25" height="22" viewBox="0 0 21 18"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M10.7592 1.62881L10.46 1.93141L10.1608 1.62795C9.12742 0.598863 7.73519 0.0253071 6.28701 0.0320566C4.83883 0.038806 3.45186 0.625315 2.42783 1.66399C1.4038 2.70267 0.82556 4.10948 0.818906 5.57837C0.812251 7.04726 1.37772 8.4594 2.3923 9.50758L2.69148 9.81104L10.46 17.6907L18.2285 9.81104L18.5277 9.50758C19.5342 8.45777 20.0928 7.04826 20.0827 5.58393C20.0726 4.11961 19.4946 2.71817 18.4737 1.68277C17.4527 0.647364 16.071 0.061221 14.6273 0.0511227C13.1836 0.0410244 11.7941 0.607783 10.7592 1.62881Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 2">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M15.6258 13.1872C14.7028 13.1872 13.8713 13.5857 13.2941 14.2198L8.10289 11.0046C8.24148 10.6498 8.31835 10.2645 8.31835 9.86132C8.31835 9.45803 8.24148 9.07267 8.10289 8.71802L13.2941 5.50271C13.8713 6.13675 14.7028 6.53548 15.6258 6.53548C17.3645 6.53548 18.779 5.12102 18.779 3.38234C18.779 1.64365 17.3645 0.22934 15.6258 0.22934C13.8871 0.22934 12.4727 1.6438 12.4727 3.38248C12.4727 3.78563 12.5497 4.17099 12.6881 4.52578L7.49707 7.74095C6.91991 7.10691 6.08834 6.70817 5.16535 6.70817C3.42667 6.70817 2.01221 8.12278 2.01221 9.86132C2.01221 11.6 3.42667 13.0145 5.16535 13.0145C6.08834 13.0145 6.91991 12.6159 7.49707 11.9817L12.6881 15.1969C12.5497 15.5516 12.4727 15.937 12.4727 16.3403C12.4727 18.0788 13.8871 19.4933 15.6258 19.4933C17.3645 19.4933 18.779 18.0788 18.779 16.3403C18.779 14.6016 17.3645 13.1872 15.6258 13.1872Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="icon-wrapper" title="Icon 3">
                                                        <svg width="25" height="24" viewBox="0 0 21 20"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2.55249 12.2693V17.6873H7.97049M12.7866 7.45334L17.6026 2.63734M12.7866 2.03534H18.2046V7.45334M7.16787 13.072L3.15454 17.0853"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                stroke-width="1.1" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="add-to-cart">Add to Cart</div>
                                            </div>
                                            <div>
                                                <h6 className="pp pt-4">JACKETS</h6>
                                                <h4 className="ff mb-0">Versity Jackets</h4>
                                                <p className="pt-2 p2 fw-semibold">$141.75</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="pagination d-flex justify-content-center pt-4" data-aos="zoom-in">
                                <a className="active" href="index2.html">&laquo;</a>
                                <a href="index2.html">1</a>
                                <a className="active" href="index2.html">2</a>
                                <a href="index2.html">3</a>
                                <a href="index2.html">..</a>
                                <a href="index2.html">10</a>
                                <a href="index2.html">&raquo;</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default List