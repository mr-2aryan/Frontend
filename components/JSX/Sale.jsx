import React, { useEffect, useState, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import { useNavigate } from 'react-router-dom';
import grey from '../../assets/Images/grey.png';

// Countdown calculation function moved outside component
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

const Sale = () => {
  const navigate = useNavigate();

  // Memoize target date 2 days from now (adjust as needed)
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    return date;
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1000,
      once: false,
      disable: 'mobile',
      offset: 250,
      throttleDelay: 100,
    });

    window.addEventListener('scroll', AOS.refresh);

    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="section11">
      <div className="container">
        <div className="row mt-3">
          <div
            className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center text-center p-lg-0 p-sm-2 mb-lg-0 mb-sm-2"
            data-aos="zoom-in"
          >
            <img src={grey} alt="#" width="100%" />
          </div>
          <div
            className="col-lg-7 col-sm-12 col-md-7 bgo p-5 m-lg-0 m-sm-2"
            data-aos="zoom-in"
          >
            <h1 className="ff fss ps-4 pt-3">CLEARENCE SALE</h1>
            <h3 className="ps-4 pt-3 urb lts fw-semibold">
              Up to 50% Off. All Sales are Final!
            </h3>
            <div className="row mt-5 ps-4 justify-content-left">
              <div className="col-3 mx-1">
                <div className="bg-white bgw text-dark px-sm-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-0 h11 urb lts fw-semibold" id="day">
                    {String(timeLeft.days).padStart(2, '0')}
                  </h1>
                  <p className="mb-0 urb lts fs-5">Days</p>
                </div>
              </div>
              <div className="col-3 mx-1">
                <div className="bg-white bgw text-dark px-sm-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-0 h11 urb lts fw-semibold" id="hour">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </h1>
                  <p className="mb-0 urb lts fs-5">Hours</p>
                </div>
              </div>
              <div className="col-3 mx-1">
                <div className="bg-white bgw text-dark px-sm-5 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="mb-0 h11 urb lts fw-semibold" id="minute">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </h1>
                  <p className="mb-0 urb lts fs-5">Minutes</p>
                </div>
              </div>
            </div>
            <h4 className="fw-light ps-4 mt-4 mb-0 urb lts">
              Last chance to take advantage of our discount!
            </h4>
            <button
              onClick={() => {
                navigate('/Shop');
              }}
              className="shopn px-5 py-3 ms-3 mt-4 urb lts fw-semibold"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
