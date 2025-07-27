import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { useNavigate } from 'react-router-dom';
import Vred from '../../assets/Images/Vred.png';
import Placeholder from '../../assets/Images/Placeholder.png';
import image1 from '../../assets/Images/image1.png';
import Vredblack from '../../assets/Images/Vredblack.png';
import { Link } from 'react-router-dom';

const Story = () => {
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
        <div className="section3">
            <div className="container mt-5">
                <div className="row pt-5 align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 p-4 mb-4 mb-lg-0" data-aos="zoom-in">
                        <div className="w-100">
                            <h1 className="f s">Story about Our Brand</h1>
                            <p className="pt-2 urb lts gc">
                                Embrace timeless elegance and rugged quality with our Wool and Leather varsity jacket.
                                Crafted from premium materials, this jacket combines the warmth of wool with the durability
                                of leather. Stay stylish in any season, whether you're heading to the game or out for a
                                night on the town. A perfect blend of comfort, style, and versatility, this jacket is a
                                must-have for fashion-forward individuals.
                            </p>
                            <button onClick={() => { navigate('/Shop'); }} className="shop px-5 p-3 urb lts" type="button">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-none d-lg-block position-relative pt-sm-5" data-aos="zoom-in">
                        <img src={Vred} alt="Main Jacket"
                            className="img-fluid rounded-3 mx-auto d-block shadow-lg" style={{ width: '90%', objectFit: 'cover' }} />
                        <img src={Placeholder} alt="Top Jacket" className="position-absolute shadow-lg rounded-3"
                            style={{ top: '-50px', left: '-20px', width: '220px' }} />

                        <div className="position-absolute translate-middle-y p-3 rounded shadow-lg shadow-card d-flex align-items-center"
                            style={{ width: '350px', left: '-50px', bottom: '-120px', backgroundColor: 'rgb(237, 237, 237)' }}>
                            <img src={image1} alt="Card Jacket" className="me-2 rounded"
                                style={{ width: '150px', objectFit: 'cover' }} />
                            <div>
                                <h6 className="mb-0 urb lts fw-semibold">Versity Jacket</h6>
                                <small className="fw-medium urb lts">ZW-NC 4 Edition</small><br />
                                <span className="text-warning">★</span>
                                <span>4.9/5</span><br />
                                <button onclick="window.location.href='listing2.html'" className="shop2 p-2 px-3 mt-1 urb lts" type="button">See Product</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 d-block d-lg-none text-center pt-4">
                        <img src={Vredblack} alt="Main Jacket"
                            className="img-fluid rounded mb-4 mx-auto d-block" style={{ width: '90%', maxWidth: '100%' }} />

                        <img src={Placeholder} alt="Top Jacket" className="img-fluid rounded mb-4 mx-auto d-block"
                            style={{ width: '80%', maxWidth: '100%' }} />

                        <div className="bg-light p-3 rounded shadow d-flex flex-column align-items-center mx-auto"
                            style={{ maxWidth: '90%' }}>
                            <img src={image1} alt="Card Jacket" className="rounded mb-3"
                                style={{ width: '150px', objectFit: 'cover' }} />
                            <div className="text-center">
                                <h6 className="mb-0">Versity Jacket</h6>
                                <small className="fw-3">ZW-NC 4 Edition</small><br />
                                <span className="text-warning">★</span>
                                <span>4.9/5</span><br />
                                <Link to="/Product">
                                    <button className="shop2 p-2 px-3 mt-1 urb lts">See Product</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Story