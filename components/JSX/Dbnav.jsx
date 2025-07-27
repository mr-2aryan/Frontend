import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import '../CSS/nav-styles.css';
import { Link } from 'react-router-dom';

const Dbnav = () => {
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
        <div class="section01">
            <div class="container-fluid bgf">
                <div class="row px-5 py-4 mt-4">
                    <div class="d-flex justify-content-start">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" clip-path="url(#clip0_74_2790)">
                                <path
                                    d="M16.6406 19.3743H3.35938C2.36859 19.3743 1.5625 18.5683 1.5625 17.5774V8.12354C1.5625 7.77838 1.8423 7.49854 2.1875 7.49854C2.5327 7.49854 2.8125 7.77838 2.8125 8.12354V17.5774C2.8125 17.879 3.05781 18.1243 3.35938 18.1243H16.6406C16.9422 18.1243 17.1875 17.879 17.1875 17.5774V8.12354C17.1875 7.77838 17.4673 7.49854 17.8125 7.49854C18.1577 7.49854 18.4375 7.77838 18.4375 8.12354V17.5774C18.4375 18.5682 17.6314 19.3743 16.6406 19.3743Z"
                                    fill="#303030" />
                                <path
                                    d="M19.375 10.3109C19.215 10.3109 19.0551 10.2499 18.9331 10.1278L11.1601 2.35491C10.5204 1.71522 9.4796 1.71522 8.83991 2.35491L1.06694 10.1279C0.822881 10.372 0.427139 10.372 0.183076 10.1279C-0.0610254 9.88382 -0.0610254 9.48808 0.183076 9.24401L7.95605 1.47101C9.08308 0.343975 10.9169 0.343975 12.0439 1.47101L19.8169 9.24397C20.061 9.48808 20.061 9.88378 19.8169 10.1278C19.6949 10.2499 19.535 10.3109 19.375 10.3109Z"
                                    fill="#303030" />
                                <path
                                    d="M12.5 19.3745H7.5C7.1548 19.3745 6.875 19.0947 6.875 18.7495V13.2026C6.875 12.1257 7.75117 11.2495 8.82812 11.2495H11.1719C12.2488 11.2495 13.125 12.1257 13.125 13.2026V18.7495C13.125 19.0947 12.8452 19.3745 12.5 19.3745ZM8.125 18.1245H11.875V13.2026C11.875 12.8149 11.5596 12.4995 11.1719 12.4995H8.82812C8.44043 12.4995 8.125 12.8149 8.125 13.2026V18.1245Z"
                                    fill="#303030" />
                            </g>
                            <defs>
                                <clippath id="clip0_74_2790">
                                    <rect width="20" height="20" fill="white" />
                                </clippath>
                            </defs>
                        </svg>
                        <Link className="ppp ms-2 me-4 mb-0 fw-medium urb lts" to="/Home">Home</Link>
                        <svg width="1" height="32" viewBox="0 0 1 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.25" width="1" height="32" fill="#303030" />
                        </svg>
                        <Link className="mb-0 ms-4 fw-medium ppp blc urb" to="/Design">Design Your Own Jacket</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dbnav