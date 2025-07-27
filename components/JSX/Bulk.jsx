import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { useNavigate } from 'react-router-dom';

const Bulk = () => {
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
        <div className=" section2 container-fluid bg" data-aos="zoom-in">
            <div className="row px-md-5 pt-3 g-4">
                <div className="ho col-12 col-lg-4 mb-4 d-flex justify-content-center text-center" data-aos="zoom-in">
                    <div className="p-3 p-md-5 w-100">
                        <svg className="icon mx-auto mb-3" width="60" height="68" viewBox="0 0 60 68"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z"
                                fill="currentColor" />
                        </svg>
                        <h4 className="f pt-3">Custom Design</h4>
                        <p className="urb lts">Every single order ships for free. No minimums, no tiers, no fine print
                            whatsoever.
                        </p>
                        <button onClick={() => { navigate('/Design'); }} className="dbtn px-4 py-3 text-nowrap urb"
                            type="button">Design Custom Jackets</button>
                    </div>
                </div>
                <div className="ho col-12 col-lg-4 mb-4 d-flex justify-content-center text-center" data-aos="zoom-in">
                    <div className="p-3 p-md-5 w-100">
                        <svg className="icon mx-auto mb-3" width="60" height="68" viewBox="0 0 60 68"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z"
                                fill="currentColor" />
                        </svg>
                        <h4 className="f pt-3">Bulk Orders</h4>
                        <p className="urb lts">Every single order ships for free. No minimums, no tiers, no fine print
                            whatsoever.</p>
                        <button onClick={() => { navigate('/BulkOrder'); }} className="dbtn px-5 py-3 text-nowrap urb"
                            type="button">Bulk Orders</button>
                    </div>
                </div>
                <div className="ho col-12 col-lg-4 mb-4 d-flex justify-content-center text-center" data-aos="zoom-in">
                    <div className="p-3 p-md-5 w-100">
                        <svg className="icon mx-auto mb-3" width="60" height="68" viewBox="0 0 60 68"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M26.6667 58.75V35.9166L6.66667 24.3333V47.1666L26.6667 58.75ZM33.3333 58.75L53.3333 47.1666V24.3333L33.3333 35.9166V58.75ZM26.6667 66.4166L3.33333 53C2.27778 52.3888 1.45833 51.5833 0.875 50.5833C0.291667 49.5833 0 48.4722 0 47.25V20.75C0 19.5277 0.291667 18.4166 0.875 17.4166C1.45833 16.4166 2.27778 15.6111 3.33333 15L26.6667 1.58329C27.7222 0.972182 28.8333 0.666626 30 0.666626C31.1667 0.666626 32.2778 0.972182 33.3333 1.58329L56.6667 15C57.7222 15.6111 58.5417 16.4166 59.125 17.4166C59.7083 18.4166 60 19.5277 60 20.75V47.25C60 48.4722 59.7083 49.5833 59.125 50.5833C58.5417 51.5833 57.7222 52.3888 56.6667 53L33.3333 66.4166C32.2778 67.0277 31.1667 67.3333 30 67.3333C28.8333 67.3333 27.7222 67.0277 26.6667 66.4166ZM43.3333 22.4166L49.75 18.75L30 7.33329L23.5 11.0833L43.3333 22.4166ZM30 30.1666L36.5 26.4166L16.75 15L10.25 18.75L30 30.1666Z"
                                fill="currentColor" />
                        </svg>
                        <h4 className="f pt-3">Ready To Ship</h4>
                        <p className="urb lts">Every single order ships for free. No minimums, no tiers, no fine print
                            whatsoever.</p>
                        <button onClick={() => { navigate('/Shop'); }} className="dbtn px-5 py-3 text-nowrap urb"
                            type="button">Shop</button>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Bulk
