import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';

const Leather = () => {
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
        <div className="section7">
            <div className="container">
            </div>
            <div className="container">
                <div className="row mt-5 g-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 align-items-center" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div
                            className="hover-bg text-white text-left p-4 py-5 position-relative overflow-hidden h-100 align-items-center">
                            <div className="bg-image"></div>
                            <div className="position-relative z-2">
                                <svg width="60" height="68" viewBox="0 0 60 68" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white"
                                        d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z" />
                                </svg>
                                <h3 className="ff pt-5">Genuine Leather</h3>
                                <p className="mb-0 pt-1 urb lts fw-normal">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 align-items-center" data-aos="fade-up"
                        data-aos-duration="3000">
                        <div
                            className="hover-bg text-white text-left p-4 py-5 position-relative overflow-hidden h-100 align-items-center">
                            <div className="bg-image"></div>
                            <div className="position-relative z-2">
                                <svg width="60" height="68" viewBox="0 0 60 68" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white"
                                        d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z" />
                                </svg>
                                <h3 className="ff pt-5">Genuine Leather</h3>
                                <p className="mb-0 pt-1 urb lts fw-normal">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 align-items-center" data-aos="fade-down"
                        data-aos-duration="3000">
                        <div
                            className="hover-bg text-white text-left p-4 py-5 position-relative overflow-hidden h-100 align-items-center">
                            <div className="bg-image"></div>
                            <div className="position-relative z-2">
                                <svg width="60" height="68" viewBox="0 0 60 68" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white"
                                        d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z" />
                                </svg>
                                <h3 className="ff pt-5">Genuine Leather</h3>
                                <p className="mb-0 pt-1 urb lts fw-normal">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 align-items-center" data-aos="fade-down"
                        data-aos-duration="3000">
                        <div
                            className="hover-bg text-white text-left p-4 py-5 position-relative overflow-hidden h-100 align-items-center">
                            <div className="bg-image"></div>
                            <div className="position-relative z-2">
                                <svg width="60" height="68" viewBox="0 0 60 68" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="white"
                                        d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z" />
                                </svg>
                                <h3 className="ff pt-5">Genuine Leather</h3>
                                <p className="mb-0 pt-1 urb lts fw-normal">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                                    consectetur, adipisci velit</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Leather