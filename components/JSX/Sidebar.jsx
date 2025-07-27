import React, { useState } from 'react';
import '../CSS/styles.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle button visible only on small devices */}
      <button
        className="btn btn-primary urb d-md-none mb-3"
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
        type="button"
      >
        ☰ Filters
      </button>

      {/* Sidebar container */}
      <div
        className={`sidebar-container ${isOpen ? 'open' : ''}`}
        onClick={(e) => {
          // Close sidebar if click on overlay outside sidebar-content
          if (e.target.classList.contains('sidebar-container')) {
            setIsOpen(false);
          }
        }}
      >
        <div className="sidebar-content">
          <div className="d-flex flex-column ps-2 col-lg-12">
            <div>
              <h3 className="ff pt-3">Categories</h3>
              <label className="containers urb lts">
                New in Closet (50)
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Varsity Jackets (150)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Bomber Jackets (220)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Hoodies (220)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Coach Jackets( 220)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Croped Varsity Jackets (80)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <hr className="mt-4" />

            <div>
              <h3 className="ff pt-3">Brands</h3>
              <label className="containers urb lts">
                Nike (430)
                <input type="checkbox" defaultChecked />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Puma (320)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Adidas (300)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Reebok (280)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Skechers (100)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
              <label className="containers urb lts">
                Others (80)
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>

            <hr className="mt-4 containers" />

            <div>
              <h3 className="ff pt-3">Size</h3>
              <div className="row pt-4 d-flex justify-content-center button-group">
                <div className="col-lg-4">
                  <button className="box py-3 px-4 w-100">
                    <h5 className="mb-0 urb fw-semibold">XS</h5>
                  </button>
                </div>
                <div className="col-lg-4">
                  <button className="box py-3 px-4 w-100">
                    <h5 className="mb-0 urb fw-semibold">S</h5>
                  </button>
                </div>
                <div className="col-lg-4">
                  <button className="box py-3 px-4 w-100">
                    <h5 className="mb-0 urb fw-semibold">M</h5>
                  </button>
                </div>
              </div>

              <div className="row pt-4 d-flex justify-content-center button-group">
                <div className="col-lg-4">
                  <button className="box py-3 px-4 w-100">
                    <h5 className="mb-0 urb fw-semibold">L</h5>
                  </button>
                </div>
                <div className="col-lg-4">
                  <button className="box py-3 px-4 w-100">
                    <h5 className="mb-0 urb fw-semibold">XL</h5>
                  </button>
                </div>
                <div className="col-lg-4">
                  <button className="box py-3 px-4 w-100">
                    <h5 className="mb-0 urb fw-semibold">2XL</h5>
                  </button>
                </div>
              </div>
            </div>

            <hr className="mt-5" />

            <div>
              <h3 className="ff pt-3">Price</h3>
              <div className="range-slid">
                <input type="range" min="0" max="100" defaultValue="20" id="slider-left" />
                <input type="range" min="0" max="100" defaultValue="80" id="slider-right" />
                <div className="slid-track">
                  <div className="slid-fill"></div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 p-2 d-flex-column">
                  <p className="mb-0 urb lts">Min. Price</p>
                  <div className="box2 px-3 py-3 mt-3 d-flex align-items-center">
                    <h5 className="ms-3 mb-0 urb lts">$100</h5>
                  </div>
                </div>
                <div className="col-lg-6 p-2 d-flex-column">
                  <p className="mb-0 urb lts">Max. Price</p>
                  <div className="box2 px-3 py-3 mt-3 d-flex align-items-center">
                    <h5 className="ms-3 mb-0 urb lts">$100</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a className="text-decoration-none fw-medium caf urb lts" href="index2.html">
                X CLEAR ALL FILTER
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay backdrop to close sidebar on small devices */}
      {isOpen && <div className="sidebar-backdrop d-md-none" onClick={() => setIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
