import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import photo3 from '../../assets/Images/Photo-3.png';

const Check = () => {
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
        <div class="section3">
            <div class="container">
                <div class="row mt-5" data-aos="zoom-in">
                    <div class="col-12">
                        <h1 class="ft">Checkout</h1>
                        <h4 class="ft mt-4">Billing Detials</h4>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-lg-8">
                        <hr />
                        <div class="row mt-5">
                            <div class="col-lg-6" data-aos="zoom-in">
                                <label for="firstName" class="form-label fw-medium">First Name</label>
                                <input type="text" class="form-control pyy" id="firstName" />
                            </div>
                            <div class="col-lg-6" data-aos="zoom-in">
                                <label for="lastName" class="form-label fw-medium">Last Name</label>
                                <input type="text" class="form-control pyy" id="lastName" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="Country" class="form-label fw-medium">Country</label>
                                <input type="text" class="form-control pyy" id="Country" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="Street" class="form-label fw-medium">Street Address</label>
                                <input type="text" class="form-control pyy" id="Street"
                                    placeholder="House Number or No Apt" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="Town" class="form-label fw-medium">Town/City</label>
                                <input type="text" class="form-control pyy" id="Town" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="State" class="form-label fw-medium">State</label>
                                <input type="text" class="form-control pyy" id="State" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="post" class="form-label fw-medium">Postcode</label>
                                <input type="text" class="form-control pyy" id="post" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="phone" class="form-label fw-medium">Phone Number</label>
                                <input type="text" class="form-control pyy" id="phone" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in">
                                <label for="email" class="form-label fw-medium">Email Address</label>
                                <input type="email" class="form-control pyy" id="email" />
                            </div>
                            <div class="col-lg-12 mt-4" data-aos="zoom-in-">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
                                    <label class="form-check-label fw-medium ms-2" for="checkDefault">Create an
                                        account?</label>
                                </div>
                            </div>
                            <div class="col-lg-12 mt-5" data-aos="zoom-in">
                                <h2 class="ft">Additional Information</h2>
                                <div class="mt-3">
                                    <label for="area1" class="form-label fw-medium">Order Notes (Optional)</label>
                                    <textarea class="form-control" id="area1" placeholder="Notes about your order"
                                        rows="8"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 mt-3 mx-auto mx-sm-0" data-aos="zoom-in">
                        <div class="bg d-flex flex-column justify-content-start p-5 rb">
                            <h3 class="ft">Order Summary</h3>
                            <div class="row mt-4">
                                <div class="col-lg-4">
                                    <div class="d-flex justify-content-center bgs p-2 rb">
                                        <img src={photo3} alt="#" class="img-fluid" width="100%" />
                                    </div>
                                </div>
                                <div class="col-lg-8 d-flex align-items-center">
                                    <div class="d-flex flex-column">
                                        <h6>Varisty Jacket</h6>
                                        <h5 class="oc">$8.21 x1</h5>
                                    </div>
                                </div>
                                <hr class="mt-4" />
                                <div class="col-lg-4 mt-2">
                                    <div class="d-flex justify-content-center bgs p-2 rb">
                                        <img src={photo3} alt="#" class="img-fluid" width="100%" />
                                    </div>
                                </div>
                                <div class="col-lg-8 d-flex align-items-center">
                                    <div class="d-flex flex-column">
                                        <h6>Varisty Jacket</h6>
                                        <h5 class="oc">$8.21 x1</h5>
                                    </div>
                                </div>
                                <hr class="mt-4" />
                                <div class="col-lg-4 mt-2">
                                    <div class="d-flex justify-content-center bgs p-2 rb">
                                        <img src={photo3} alt="#" class="img-fluid" width="100%" />
                                    </div>
                                </div>
                                <div class="col-lg-8 d-flex align-items-center">
                                    <div class="d-flex flex-column">
                                        <h6>Varisty Jacket</h6>
                                        <h5 class="oc">$8.21 x1</h5>
                                    </div>
                                </div>
                                <hr class="mt-4" />
                            </div>
                            <div class="row mt-3">
                                <div class="ppp col-lg-6 d-flex justify-content-start">
                                    <h6>Total Price (item)</h6>
                                </div>
                                <div class="ppp col-lg-6 d-flex justify-content-end">
                                    <h6>$114</h6>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="ppp col-lg-6 d-flex justify-content-start">
                                    <h6>Shipping Tax & Fee</h6>
                                </div>
                                <div class="ppp col-lg-6 d-flex justify-content-end">
                                    <h6>$10</h6>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-lg-6 d-flex justify-content-start">
                                    <h6>Grand Total</h6>
                                </div>
                                <div class="col-lg-6 d-flex justify-content-end">
                                    <h6>$1</h6>
                                </div>
                            </div>
                            <button class="b-btn py-3 mt-4 mb-0">
                                Proceed To Payment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Check