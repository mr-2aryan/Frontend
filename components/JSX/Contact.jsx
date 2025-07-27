import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';

const Contact = () => {
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
        <div>
            <div className="container-fluid">
                <div className="row text-center pt-3" data-aos="zoom-in">
                    <div className="col-lg-12 bgc p-5 texc">
                        <h1 className="urb lts fw-semibold mb-0">CONTACT US</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-5 d-flex-column align-items-center" data-aos="zoom-in-right">
                        <h2 className="og fw-semibold urb lts">Get In Touch</h2>
                        <p className="urb fw-light lts">Simply fill in this form and we’ll get back to you. We’re more than happy to
                            answer any question
                            you might have, even to arrange a time to chat about your order.</p>
                        <h2 className="og fw-semibold urb lts mt-4">Easy Jackets</h2>
                        <p className="fw-bold urb lts">Faisal Munir Butt</p>
                        <p className="urb lts fw-light">+1-718-255-7191</p>
                        <p className="urb lts fw-light">info@easyjackets.com</p>
                        <p className="urb lts fw-light">5900 BALCONES AUSTIN TX 78731,</p>
                        <h2 className="og fw-semibold urb lts mt-4">Our Location</h2>
                        <p className="urb lts fw-light">Find us at our headquarters:</p>
                        <p className="urb lts fw-light">A1 : 5900 BALCONES AUSTIN TX 78731</p>
                    </div>
                    <div className="col-lg-6 p-5" data-aos="zoom-in-left">
                        <label for="name" className="form-label urb lts">Full Name:</label>
                        <input type="text" className="form-control urb lts" id="name" placeholder="Please Enter Your Full Name" />
                        <label for="email" className="form-label mt-4 urb lts">Email:</label>
                        <input type="email" className="form-control urb lts" id="name" placeholder="Please Enter Your Email" />
                        <label for="area" className="form-label mt-4 urb lts">Comment or Message</label>
                        <textarea className="form-control" id="area" rows="3"></textarea>
                        <button className="quote px-4 py-2 mt-4">
                            SUBMIT
                        </button>
                        <h2 className="og fw-semibold urb lts mt-4">FAQS</h2>
                        <p className="fw-semibold urb lts mb-0">How can I track my order?</p>
                        <p className="urb lts fw-light">After placing your order, you will receive a tracking number via email.</p>
                        <p className="fw-semibold urb lts mb-0">What is your return policy?</p>
                        <p className="urb lts fw-light">You can return any item within 30 days of receipt for a full refund.</p>
                        <p className="fw-semibold urb lts mb-0">How can I contact customer support?</p>
                        <p className="urb lts fw-light mb-0">For any issues, you can reach out to us through the contact form or
                            call us
                            at +1-718-255-7191.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact