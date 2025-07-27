import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import '../CSS/nav-styles.css';
import logor from '../../assets/Images/logor.png';

const OffcanvasMenu = ({ id, labelledby, children, show, onHide }) => {
  return ReactDOM.createPortal(
    <div
      className={`offcanvas offcanvas-end custom-offcanvas ${show ? 'show' : ''}`}
      tabIndex={-1}
      id={id}
      aria-labelledby={labelledby}
      onTransitionEnd={(e) => {
        if (!show && e.propertyName === 'transform') {
          onHide();
        }
      }}
    >
      {children}
    </div>,
    document.body
  );
};

const Snavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 250,
      throttleDelay: 100,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openOffcanvas = () => setShowOffcanvas(true);
  const hideOffcanvas = () => {
    setShowOffcanvas(false);
    setSearchActive(false);
  };

  const primaryNavLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2" to="/Home" onClick={hideOffcanvas}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2 active" to="/Shop" onClick={hideOffcanvas}>
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2" to="/Design" onClick={hideOffcanvas}>
          Design Your Jacket
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2" to="/Guide" onClick={hideOffcanvas}>
          Guides
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2" to="/BulkOrder" onClick={hideOffcanvas}>
          Bulk Orders
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2" to="/AboutUs" onClick={hideOffcanvas}>
          About Us
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link mx-lg-2" to="/ContactUs" onClick={hideOffcanvas}>
          Contact Us
        </Link>
      </li>
    </>
  );

  return (
    <div className="container urb" data-aos="fade-up">
      <nav className="navbar navbar-expand-lg sticky-top mt-3">
        <div className="container d-flex align-items-center justify-content-between">
          <Link to="/Home" className="navbar-brand">
            <img src={logor} alt="EJ Commerce logo" className="logo-img" />
          </Link>

          <div className="d-none d-lg-flex align-items-center ms-auto flex-nowrap">
            <ul className="navbar-nav flex-row mb-0 me-4">{primaryNavLinks}</ul>
            <ul className="navbar-nav flex-row mb-0">
              <li className="nav-item d-flex align-items-center">
                {!searchActive ? (
                  <button
                    className="btn p-0 search-btn me-2"
                    type="button"
                    aria-label="Search"
                    onClick={() => setSearchActive(true)}
                  >
                    <svg
                      className="icon-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="black"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M10 2a8 8 0 105.293 14.293l5.707 5.707 1.414-1.414-5.707-5.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                    </svg>
                    <span className="visually-hidden">Search</span>
                  </button>
                ) : (
                  <input
                    type="text"
                    className="form-control search-input me-2"
                    placeholder="Search..."
                    autoFocus
                    onBlur={() => setSearchActive(false)}
                  />
                )}
              </li>
              <li className="nav-item">
                <button
                  className="btn nav-item me-3"
                  type="button"
                  aria-label="Shopping Cart"
                  onClick={() => {
                    hideOffcanvas();
                    navigate('/Cart');
                  }}
                >
                  <svg
                    className="icon-svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M10.0049 0.5C13.3186 0.5 16.0049 3.18629 16.0049 6.5V7.5H20.0049V9.5H18.8379L18.0813 18.583C18.0381 19.1013 17.6048 19.5 17.0847 19.5H2.92502C2.40493 19.5 1.97166 19.1013 1.92847 18.583L1.17088 9.5H0.00488281V7.5H4.00488V6.5C4.00488 3.18629 6.69117 0.5 10.0049 0.5ZM16.8309 9.5H3.17788L3.84488 17.5H16.1639L16.8309 9.5ZM11.0049 11.5V15.5H9.0049V11.5H11.0049ZM7.00488 11.5V15.5H5.00488V11.5H7.00488ZM15.0049 11.5V15.5H13.0049V11.5H15.0049ZM10.0049 2.5C7.86269 2.5 6.1138 4.18397 6.00978 6.30036L6.00488 6.5V7.5H14.0049V6.5C14.0049 4.3578 12.3209 2.60892 10.2045 2.5049L10.0049 2.5Z" />
                  </svg>
                  <span className="visually-hidden">Shopping Cart</span>
                </button>
              </li>
              <li className="nav-item">
                <button className="register-btn px-4 nav-item" type="button" onClick={hideOffcanvas}>
                  Register
                </button>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={openOffcanvas}
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <OffcanvasMenu id="offcanvasNavbar" labelledby="offcanvasNavbarLabel" show={showOffcanvas} onHide={hideOffcanvas}>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={hideOffcanvas}></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav pe-3">
              {primaryNavLinks}

              {/* Search input for mobile inside offcanvas */}
              <li className="nav-item mt-3 d-lg-none">
                <input type="text" className="form-control" placeholder="Search..." autoFocus />
              </li>

              {/* Shopping Cart button for mobile offcanvas */}
              <li className="nav-item mt-3 d-lg-none">
                <button
                  className="btn nav-item"
                  type="button"
                  aria-label="Shopping Cart"
                  onClick={() => {
                    hideOffcanvas();
                    navigate('/Cart');
                  }}
                  style={{ width: '100%' }}
                >
                  <svg
                    className="icon-svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M10.0049 0.5C13.3186 0.5 16.0049 3.18629 16.0049 6.5V7.5H20.0049V9.5H18.8379L18.0813 18.583C18.0381 19.1013 17.6048 19.5 17.0847 19.5H2.92502C2.40493 19.5 1.97166 19.1013 1.92847 18.583L1.17088 9.5H0.00488281V7.5H4.00488V6.5C4.00488 3.18629 6.69117 0.5 10.0049 0.5ZM16.8309 9.5H3.17788L3.84488 17.5H16.1639L16.8309 9.5ZM11.0049 11.5V15.5H9.0049V11.5H11.0049ZM7.00488 11.5V15.5H5.00488V11.5H7.00488ZM15.0049 11.5V15.5H13.0049V11.5H15.0049ZM10.0049 2.5C7.86269 2.5 6.1138 4.18397 6.00978 6.30036L6.00488 6.5V7.5H14.0049V6.5C14.0049 4.3578 12.3209 2.60892 10.2045 2.5049L10.0049 2.5Z" />
                  </svg>
                  <span className="visually-hidden">Shopping Cart</span>
                </button>
              </li>
            </ul>
          </div>
        </OffcanvasMenu>
      </nav>
    </div>
  );
};

export default Snavbar;
