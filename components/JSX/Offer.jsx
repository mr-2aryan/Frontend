import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { useNavigate } from 'react-router-dom';
import image2 from '../../assets/Images/image2.png';

const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );

  return { days, hours, minutes };
};

const Offer = () => {
  const navigate = useNavigate();

  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: 'mobile',
      offset: 250,
      throttleDelay: 100,
    });

    window.addEventListener('scroll', AOS.refresh);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="section6">
      <div className="container">
        <div className="row mt-2 pt-2 mt-lg-3 pt-lg-5">
          <div className="col-lg-7" data-aos="zoom-out">
            <img src={image2} alt="" className="img-fluid" />
          </div>
          <div
            className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center text-center mt-4 mt-lg-0 px-3"
            data-aos="zoom-out"
          >
            <div className="d-flex align-items-center px-3 py-1 b">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="#101010" />
              </svg>
              <h4 className="mb-0 ms-2 fw-normal urb lts">BEST OFFER</h4>
            </div>
            <div className="mt-3">
              <h1 className="ff fw-bold">
                Discount up to 50% <br /> for Group Collection
              </h1>
            </div>
            <div className="row mt-3 justify-content-center text-center">
              <div className="col-3 mx-1">
                <div className="bgg d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-0 h11 lts urb fw-semibold" id="day">
                    {String(timeLeft.days).padStart(2, '0')}
                  </h1>
                  <p className="mb-0 lts urb fw-normal fs-5">Days</p>
                </div>
              </div>
              <div className="col-3 mx-1">
                <div className="bgg d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-0 h11 lts urb fw-semibold" id="hour">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </h1>
                  <p className="mb-0 lts urb fw-normal fs-5">Hours</p>
                </div>
              </div>
              <div className="col-3 mx-1">
                <div className="bgg d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-0 h11 lts urb fw-semibold" id="minute">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </h1>
                  <p className="mb-0 lts urb fw-normal fs-5">Minutes</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <button
                onClick={() => {
                  navigate('/Shop');
                }}
                className="shop6 px-5 py-3 fw-semibold urb lts"
                type="button"
              >
                SEE COLLECTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
