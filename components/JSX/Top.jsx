import React from 'react';
import '../CSS/styles.css';

const Top = () => {
    return (
        <div className="top urb">
            <div className="container-fluid">
                <div className="row align-items-center bgb px-4">
                    <div className="col-lg-6 col-12 text-md-start text-center">
                        <h3>
                            <svg width="12" height="15" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4.73511 11.9887C4.80063 12.0869 4.91094 12.146 5.02905 12.146C5.14716 12.146 5.25748 12.087 5.323 11.9887C6.15905 10.7346 7.39048 9.18585 8.2486 7.6107C8.93475 6.35127 9.26831 5.27711 9.26831 4.3269C9.26831 1.98938 7.36658 0.0876465 5.02905 0.0876465C2.69153 0.0876465 0.789795 1.98938 0.789795 4.3269C0.789795 5.27711 1.12335 6.35127 1.8095 7.6107C2.66699 9.18465 3.90077 10.7372 4.73511 11.9887ZM5.02905 0.794189C6.97699 0.794189 8.56177 2.37897 8.56177 4.3269C8.56177 5.15601 8.25638 6.11959 7.62817 7.27269C6.88849 8.63041 5.83296 10.0077 5.02905 11.1655C4.22527 10.0078 3.16967 8.63048 2.42994 7.27269C1.80173 6.11959 1.49634 5.15601 1.49634 4.3269C1.49634 2.37897 3.08111 0.794189 5.02905 0.794189Z"
                                    fill="white" />
                                <path
                                    d="M5.02905 6.44653C6.19782 6.44653 7.14868 5.49567 7.14868 4.3269C7.14868 3.15814 6.19782 2.20728 5.02905 2.20728C3.86029 2.20728 2.90942 3.15814 2.90942 4.3269C2.90942 5.49567 3.86029 6.44653 5.02905 6.44653ZM5.02905 2.91382C5.80823 2.91382 6.44214 3.54773 6.44214 4.3269C6.44214 5.10608 5.80823 5.73999 5.02905 5.73999C4.24988 5.73999 3.61597 5.10608 3.61597 4.3269C3.61597 3.54773 4.24988 2.91382 5.02905 2.91382Z"
                                    fill="white" />
                            </svg>
                            <span className="text-light fs-6 ps-2 fw-light">123 Main Street Chicago, IL 60601 United States</span>
                        </h3>
                    </div>
                    <div
                        className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-end align-items-center text-center text-lg-end">
                        <div className="btn-group">
                            <button id="currencyDropdown" className="btn bgb btn-sm text-light dropdown-toggle"
                                type="button" data-bs-toggle="dropdown" aria-expanded="false">USD</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">USD </a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">IND </a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">PKR </a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">EURO </a></li>
                            </ul>
                        </div>
                        <span className="text-light mx-2">|</span>
                        <div className="btn-group">
                            <button id="lang" className="btn bgb btn-sm text-light dropdown-toggle" type="button"
                                data-bs-toggle="dropdown" aria-expanded="false">EN</button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">EN</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">GERMAN</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">URDU</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">RUSSIAN</a></li>
                            </ul>
                        </div>
                        <span className="text-light mx-2">|</span>
                        <div className="d-inline">
                            <span><a className="text-light text-decoration-none ms-2" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=2679s">Track Your Order</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;