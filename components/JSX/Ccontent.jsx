import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { Link } from 'react-router-dom';
import photo3 from '../../assets/Images/Photo-3.png';

const Ccontent = () => {

    useEffect(() => {

        const selectAllCheckbox = document.getElementById('selectAllCheckbox');

    selectAllCheckbox.addEventListener('change', () => {
        // Get all other checkboxes except the selectAllCheckbox
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:not(#selectAllCheckbox)');

        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });


  function setupStepper(stepperId) {
    const stepper = document.getElementById(stepperId);
    if (!stepper) return;

    const input = stepper.querySelector('input[type="number"]');
    const btnDecrement = stepper.querySelector('.decrement');
    const btnIncrement = stepper.querySelector('.increment');

    if (!input || !btnDecrement || !btnIncrement) return;

    btnDecrement.onclick = () => {
        const min = input.min ? Number(input.min) : -Infinity;
        const step = input.step ? Number(input.step) : 1;
        let val = Number(input.value) || 0;
        val = Math.max(val - step, min);
        input.value = val;
        input.dispatchEvent(new Event('change'));
    };

    btnIncrement.onclick = () => {
        const max = input.max ? Number(input.max) : Infinity;
        const step = input.step ? Number(input.step) : 1;
        let val = Number(input.value) || 0;
        val = Math.min(val + step, max);
        input.value = val;
        input.dispatchEvent(new Event('change'));
    };
}


    setupStepper('stepper1');
    setupStepper('stepper2');
    setupStepper('stepper3');
    setupStepper('stepper4');

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
            <div className="section2">
                <div className="container">
                    <div className="row pt-4" data-aos="zoom-in-right">
                        <h1 className="ff">Cart</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-2 py-2 back" data-aos="fade-up">
                        <div className="col-lg-12 col-sm-12 col-md-12 d-flex">
                            <label className="containerss fw-medium urb">
                                Select All
                                <input type="checkbox" id="selectAllCheckbox" />
                                <span className="checkmark"></span>
                            </label>
                            <button className="del py-3 px-5 ms-auto urb" type="button">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section3">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 p-2">
                            <div className="container-fluid p-0">
                                <div className="row">
                                    <div className="col-lg-1 pe-0 me-0">
                                        <label className="containerss fw-medium me-0">
                                            <input type="checkbox" className="individual-checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="col-lg-2 pt-3 ps-0 ms-0">
                                        <div className="bgc p-3 d-flex justify-content-center">
                                            <img src={photo3} alt="#" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pt-4 ps-4">
                                        <h3 className="ff mb-0">Tropical Paysuit</h3>
                                        <h4 className="fw-bold urb pt-2">Size: L</h4>
                                    </div>
                                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                        <div className="number-stepper" id="stepper1">
                                            <button type="button" className="stepper-btn decrement">−</button>
                                            <input type="number" value="1" min="1" max="10" step="1" />
                                            <button type="button" className="stepper-btn increment">+</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-column justify-content-center">
                                        <h5 className="fw-medium gc text-decoration-line-through">$25.00</h5>
                                        <h3 className="ff fw-medium gc">$15.00</h3>
                                    </div>
                                    <div className="col-lg-1 d-flex justify-content-right align-items-center">
                                        <Link to="/Cart">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.874 7.802L19.0067 19.9445C18.9319 20.9911 18.0611 21.802 17.0118 21.802H8.73626C7.68698 21.802 6.8161 20.9911 6.74134 19.9445L5.87402 7.802M10.874 11.802V17.802M14.874 11.802V17.802M15.874 7.802V4.802C15.874 4.24972 15.4263 3.802 14.874 3.802H10.874C10.3217 3.802 9.87402 4.24972 9.87402 4.802V7.802M4.87402 7.802H20.874"
                                                    stroke="#B4642F" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <hr className="mt-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-1 pe-0 me-0">
                                        <label className="containerss fw-medium me-0">
                                            <input type="checkbox" className="individual-checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="col-lg-2 pt-3 ps-0 ms-0">
                                        <div className="bgc p-3 d-flex justify-content-center">
                                            <img src={photo3} alt="#" className="img-fluid" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pt-4 ps-4">
                                        <h3 className="ff mb-0">Tropical Paysuit</h3>
                                        <h4 className="fw-bold pt-2 urb">Size: L</h4>
                                    </div>
                                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                        <div className="number-stepper" id="stepper2">
                                            <button type="button" className="stepper-btn decrement">−</button>
                                            <input type="number" value="1" min="1" max="10" step="1" />
                                            <button type="button" className="stepper-btn increment">+</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-column justify-content-center">
                                        <h5 className="fw-medium gc text-decoration-line-through">$25.00</h5>
                                        <h3 className="ff fw-medium gc">$15.00</h3>
                                    </div>
                                    <div className="col-lg-1 d-flex justify-content-right align-items-center">
                                        <Link to="/Cart">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.874 7.802L19.0067 19.9445C18.9319 20.9911 18.0611 21.802 17.0118 21.802H8.73626C7.68698 21.802 6.8161 20.9911 6.74134 19.9445L5.87402 7.802M10.874 11.802V17.802M14.874 11.802V17.802M15.874 7.802V4.802C15.874 4.24972 15.4263 3.802 14.874 3.802H10.874C10.3217 3.802 9.87402 4.24972 9.87402 4.802V7.802M4.87402 7.802H20.874"
                                                    stroke="#B4642F" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <hr className="mt-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-1 pe-0 me-0">
                                        <label className="containerss fw-medium me-0">
                                            <input type="checkbox" className="individual-checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="col-lg-2 pt-3 ps-0 ms-0">
                                        <div className="bgc p-3 d-flex justify-content-center">
                                            <img src={photo3} alt="#" className="img-fluid" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pt-4 ps-4">
                                        <h3 className="ff mb-0">Tropical Paysuit</h3>
                                        <h4 className="fw-bold pt-2 urb">Size: L</h4>
                                    </div>
                                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                        <div className="number-stepper" id="stepper3">
                                            <button type="button" className="stepper-btn decrement">−</button>
                                            <input type="number" value="1" min="1" max="10" step="1" />
                                            <button type="button" className="stepper-btn increment">+</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-column justify-content-center">
                                        <h5 className="fw-medium gc text-decoration-line-through">$25.00</h5>
                                        <h3 className="ff fw-medium gc">$15.00</h3>
                                    </div>
                                    <div className="col-lg-1 d-flex justify-content-right align-items-center">
                                        <Link to="/Cart">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.874 7.802L19.0067 19.9445C18.9319 20.9911 18.0611 21.802 17.0118 21.802H8.73626C7.68698 21.802 6.8161 20.9911 6.74134 19.9445L5.87402 7.802M10.874 11.802V17.802M14.874 11.802V17.802M15.874 7.802V4.802C15.874 4.24972 15.4263 3.802 14.874 3.802H10.874C10.3217 3.802 9.87402 4.24972 9.87402 4.802V7.802M4.87402 7.802H20.874"
                                                    stroke="#B4642F" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <hr className="mt-4" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-1 pe-0 me-0">
                                        <label className="containerss fw-medium me-0">
                                            <input type="checkbox" className="individual-checkbox" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="col-lg-2 pt-3 ps-0 ms-0">
                                        <div className="bgc p-3 d-flex justify-content-center">
                                            <img src={photo3} alt="#" className="img-fluid" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pt-4 ps-4">
                                        <h3 className="ff mb-0">Tropical Paysuit</h3>
                                        <h4 className="fw-bold pt-2 urb">Size: L</h4>
                                    </div>
                                    <div className="col-lg-3 d-flex justify-content-center align-items-center">
                                        <div className="number-stepper" id="stepper4">
                                            <button type="button" className="stepper-btn decrement">−</button>
                                            <input type="number" value="1" min="1" max="10" step="1" />
                                            <button type="button" className="stepper-btn increment">+</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 d-flex flex-column justify-content-center">
                                        <h5 className="fw-medium gc text-decoration-line-through">$25.00</h5>
                                        <h3 className="ff fw-medium gc">$15.00</h3>
                                    </div>
                                    <div className="col-lg-1 d-flex justify-content-right align-items-center">
                                        <Link to="/Cart">
                                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.874 7.802L19.0067 19.9445C18.9319 20.9911 18.0611 21.802 17.0118 21.802H8.73626C7.68698 21.802 6.8161 20.9911 6.74134 19.9445L5.87402 7.802M10.874 11.802V17.802M14.874 11.802V17.802M15.874 7.802V4.802C15.874 4.24972 15.4263 3.802 14.874 3.802H10.874C10.3217 3.802 9.87402 4.24972 9.87402 4.802V7.802M4.87402 7.802H20.874"
                                                    stroke="#B4642F" stroke-width="2" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 p-4">
                            <div className="bgc brr p-4" data-aos="zoom-in">
                                <h3 className="ff fw-medium">Have a Coupan?</h3>
                                <input type="email" placeholder="Input your email here" className="p-3 in w-100 mt-2" />
                                <button className="coup p-3 px-5 mt-4  lts urb">
                                    Apply Coupan
                                </button>
                            </div>
                            <div className="bgc brr p-4 mt-4" data-aos="zoom-in">
                                <h3 className="ff fw-medium">Order Summary</h3>
                                <div className="d-flex align-items-center">
                                    <p className="p-0 urb lts">Striped T-Shirt</p>
                                    <p className="ms-auto p-0 urb lts">$24</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="p-0 urb lts">Black Longsleve T-Shirt</p>
                                    <p className="ms-auto p-0 urb lts">$32</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="p-0 urb lts">Striped Blue Windbreaker...</p>
                                    <p className="ms-auto fw-medium p-0 urb lts">$58</p>
                                </div>
                                <hr className="mt-2" />
                                <div className="d-flex align-items-center">
                                    <p className="p-0 gc urb lts">Total Price (item)</p>
                                    <p className="ms-auto gc fw-medium p-0 urb lts">$114</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="p-0 gc urb lts">Shipping Tax & Fee</p>
                                    <p className="ms-auto gc fw-medium p-0 urb lts">$10</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="p-0 urb lts">Shipping Tax & Fee</p>
                                    <p className="ms-auto fw-medium p-0 urb lts">$10</p>
                                </div>
                                <button onClick={() => window.location.href = '/Checkout'} className="check w-100 py-3 urb">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ccontent;