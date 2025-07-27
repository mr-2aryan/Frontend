import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import '../JS/1.js';

const Drop = () => {

    document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent navigation
            var dropdownButton = this.closest('.dropdown').querySelector('.dropdown-toggle');
            dropdownButton.textContent = this.textContent;
        });
    });
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
        <div className="drop">
            <div className="container">
                <div className="row justify-content-center pt-5">
                    <div className="col-lg-4 p-5" data-aos="zoom-in-right">
                        <label htmlFor="productSelect" className="form-label urb lts fw-semibold fs-5">Select Product:</label>
                        <select className="form-select bo urb lts text-start w-100" id="productSelect" defaultValue="Wool and Leather Varsity Jacket">
                            <option value="Wool and Leather Varsity Jacket">Wool and Leather Varsity Jacket</option>
                            <option value="Wool Varsity Jacket">Wool Varsity Jacket</option>
                            <option value="Hooded Letterman Jacket">Hooded Letterman Jacket</option>
                            <option value="All Leather Varsity Jacket">All Leather Varsity Jacket</option>
                            <option value="Cotton Twill Varsity Jacket">Cotton Twill Varsity Jacket</option>
                            <option value="Fleece Varsity Jacket">Fleece Varsity Jacket</option>
                            <option value="Softshell Varsity Jacket">Softshell Varsity Jacket</option>
                            <option value="Nylon Bomber Jacket">Nylon Bomber Jacket</option>
                            <option value="Softshell Bomber Jacket">Softshell Bomber Jacket</option>
                            <option value="Cotton Twill Bomber Jacket">Cotton Twill Bomber Jacket</option>
                            <option value="Cropped Wool and Leather Varsity Jacket">Cropped Wool and Leather Varsity Jacket</option>
                            <option value="Cropped Wool Varsity Jacket">Cropped Wool Varsity Jacket</option>
                            <option value="Cropped Satin Jacket">Cropped Satin Jacket</option>
                            <option value="Nylon Coach Jacket">Nylon Coach Jacket</option>
                            <option value="Fleece Hoodie">Fleece Hoodie</option>
                        </select>

                        <label htmlFor="b" className="form-label urb lts pt-4 fw-semibold fs-5">Add 1/2 Zipout Lining:</label><br />

                        <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
                            <label className="btn btn-outline-custom" htmlFor="btnradio1">YES</label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
                            <label className="btn btn-outline-custom" htmlFor="btnradio2">NO</label>
                        </div>


                        <label htmlFor="b" className="form-label urb lts pt-4 fw-semibold fs-5">Add Flap Closure:</label><br />

                        <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio3" id="btnradio3" autoComplete="off" />
                            <label className="btn btn-outline-custom" htmlFor="btnradio3">YES</label>

                            <input type="radio" className="btn-check" name="btnradio3" id="btnradio4" autoComplete="off" />
                            <label className="btn btn-outline-custom" htmlFor="btnradio4">NO</label>
                        </div>

                    </div>
                    <div className="col-lg-4 p-5" data-aos="zoom-in-left">
                        <label for="ee" className="form-label urb lts fw-semibold fs-5">Product Quantities (Minimum 10):</label>
                        <input type="number" className="w-100 form-control bo" />
                        <label htmlFor="frontClosure" className="form-label urb lts fw-semibold fs-5 pt-4">Front Closure:</label>
                        <select className="form-select bo urb lts text-start w-100" id="frontClosure" defaultValue="Buttons">
                            <option value="Buttons">Buttons</option>
                            <option value="Pullover">Pullover</option>
                            <option value="Zipper">Zipper</option>
                            <option value="Flap">Flap</option>
                        </select>

                        <label htmlFor="linings" className="form-label urb lts fw-semibold fs-5 pt-4">Linings:</label>
                        <select className="form-select bo urb lts text-start w-100" id="linings" defaultValue="Quilted Lining">
                            <option value="Plain Cotton Lining">Plain Cotton Lining</option>
                            <option value="Quilted Lining">Quilted Lining</option>
                            <option value="Satin Sublimated Lining">Satin Sublimated Lining</option>
                        </select>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 pt-2 px-5 pb-0">
                        <h3 className="urb lts fw-semibold">Select Custom Design Locations</h3>
                        <div className="row">
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Front Center</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio5" id="btnradio5" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio5">YES</label>

                                    <input type="radio" className="btn-check" name="btnradio5" id="btnradio6" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio6">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Right Chest</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio7" id="btnradio7" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio7">YES</label>

                                    <input type="radio" className="btn-check" name="btnradio7" id="btnradio8" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio8">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Left Chest</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio9" id="btnradio9" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio9">YES</label>

                                    <input type="radio" className="btn-check" name="btnradio9" id="btnradio99" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio99">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Right Pocket</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradi9" id="btnrad9" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad9">YES</label>

                                    <input type="radio" className="btn-check" name="btnradi9" id="btnradio999" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio999">NO</label>
                                </div>

                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Left Pocket</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio55" id="btnradi5" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradi5">YES</label>

                                    <input type="radio" className="btn-check" name="btnradio55" id="btnradi6" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradi6">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Right Sleeve</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradi7" id="btnrad7" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad7">YES</label>

                                    <input type="radio" className="btn-check" name="btnradi7" id="btnrad8" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad8">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Left Sleeve</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnra987" id="btnradio99921" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio99921">YES</label>

                                    <input type="radio" className="btn-check" name="btnra987" id="btnradio9981" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio9981">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Right Cuff</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradi97" id="btnrad977" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad977">YES</label>

                                    <input type="radio" className="btn-check" name="btnradi97" id="btnradio996" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio996">NO</label>
                                </div>

                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Left Cuff</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio555" id="btnradi55" autoComplete="off" defaultChecked />
                                    <label className="btn btn-outline-custom" htmlFor="btnradi55">YES</label>

                                    <input type="radio" className="btn-check" name="btnradio555" id="btnradi66" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradi66">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Back Top</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradi77" id="btnrad77" autoComplete="off" defaultChecked />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad77">YES</label>

                                    <input type="radio" className="btn-check" name="btnradi77" id="btnrad88" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad88">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Back Middle</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnra99" id="btnradio9999" autoComplete="off" defaultChecked />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio9999">YES</label>

                                    <input type="radio" className="btn-check" name="btnra99" id="btnradio9988" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio9988">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Back Bottom</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradi977" id="btnrad9776" autoComplete="off" defaultChecked />
                                    <label className="btn btn-outline-custom" htmlFor="btnrad9776">YES</label>

                                    <input type="radio" className="btn-check" name="btnradi977" id="btnradio9966" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradio9966">NO</label>
                                </div>

                            </div>
                        </div>
                        <div className="row pt-3 align-items-center">
                            <div className="col-lg-3">
                                <label htmlFor="b" className="form-label urb lts pt-1 fw-semibold fs-5">Nick Name</label><br />

                                <div className="btn-group btn-group-sm w-100" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio5554" id="btnradi554" autoComplete="off" defaultChecked />
                                    <label className="btn btn-outline-custom" htmlFor="btnradi554">YES</label>

                                    <input type="radio" className="btn-check" name="btnradio5554" id="btnradi646" autoComplete="off" />
                                    <label className="btn btn-outline-custom" htmlFor="btnradi646">NO</label>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <label for="b" className="form-label urb lts pt-1 fw-semibold fs-5">Upload Your Design</label>
                                <br />
                                <input className="form-control form-control" id="formFileSm" type="file" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Drop