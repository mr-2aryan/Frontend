import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../CSS/styles.css';
import size from '../../assets/Images/size.jpg';

const Body = () => {
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
        <div className="container" data-aos="zoom-in">
            <div className="row pt-3">
                <div className="col-lg-12 text-center mb-4">
                    <h1 className="urb lts fw-semibold og">BODY MEASUREMENTS</h1>
                    <p className="urb lts mt-4" />These are the measurements of your body (NOT JACKET). The sizes that we
                    recommend are only
                    suggestions. We are not responsible if you order an <br /> incorrect size. If you are unsure of your
                    size
                    please write to us first. All of our jackets are unisex athletic cut for both male and female. TALL
                    SIZES are 1.5” <br /> (4cm) longer in sleeves and body.<p />
                </div>
                <div className="col-lg-6 p-3">
                    <div className="bgc p-5 texc d-flex-column align-items-center">
                        <h3 className="urb lts fw-semibold og">CHEST</h3>
                        <p className="urb lts">Stand straight and measure the fullest part under the arm in circumference. The
                            tape measure
                            should be snug. Not so tight that it constricts breathing, but not so loose that the tape
                            measure slides down.</p>
                    </div>
                    <div className="mt-3 p-5 bgc texc d-flex-column align-items-center">
                        <h3 className="urb lts fw-semibold og">WAIST</h3>
                        <p className="urb lts">Measure across your natural waistline.</p>
                    </div>
                    <div className="mt-3 p-5 bgc texc d-flex-column align-items-center">
                        <h3 className="urb lts fw-semibold og">SLEEVE LENGTH</h3>
                        <p className="urb lts">Stand up straight with your arms down at your side and measure from your neck to
                            where wrist meets your hand.</p>
                    </div>
                    <div className="mt-3 p-5 bgc texc d-flex-column align-items-center">
                        <h3 className="urb lts fw-semibold og">BACK LENGTH</h3>
                        <p className="urb lts">Measure from the center of the neck at collar seam to the hem edge for back
                            length.</p>
                    </div>
                </div>
                <div className="col-lg-6 p-5 d-flex align-items-center">
                    <img src={size} alt="Size" className="img-fluid" width="100%" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 d-flex justify-centent-center">
                    <table className="table table-bordered">
                        <thead className="table-dark urb lts">
                            <tr>
                                <th>SIZE</th>
                                <th>YOUR CHEST</th>
                                <th>YOUR WAIST</th>
                                <th>YOUR SLEEVE</th>
                                <th>YOUR BACK LENGTH</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>XXS</td>
                                <td>28-30</td>
                                <td>20-22</td>
                                <td>28-29</td>
                                <td>23.0</td>
                            </tr>
                            <tr>
                                <td>XS</td>
                                <td>30-32</td>
                                <td>24-26</td>
                                <td>30-31</td>
                                <td>24.0</td>
                            </tr>
                            <tr>
                                <td>S</td>
                                <td>34-36</td>
                                <td>28-30</td>
                                <td>31-32</td>
                                <td>25.0</td>
                            </tr>
                            <tr>
                                <td>M</td>
                                <td>38</td>
                                <td>32</td>
                                <td>32</td>
                                <td>26.5</td>
                            </tr>
                            <tr>
                                <td>M/TALL</td>
                                <td>38</td>
                                <td>32</td>
                                <td>33-34</td>
                                <td>28.0</td>
                            </tr>
                            <tr>
                                <td>L</td>
                                <td>40-42</td>
                                <td>34-36</td>
                                <td>33-34</td>
                                <td>27.5</td>
                            </tr>
                            <tr>
                                <td>L/TALL</td>
                                <td>40-42</td>
                                <td>34-36</td>
                                <td>35-36</td>
                                <td>29.0</td>
                            </tr>
                            <tr>
                                <td>XL</td>
                                <td>44-46</td>
                                <td>38-40</td>
                                <td>34-35</td>
                                <td>28.5</td>
                            </tr>
                            <tr>
                                <td>XL/TALL</td>
                                <td>44-46</td>
                                <td>38-40</td>
                                <td>36.0</td>
                                <td>30.0</td>
                            </tr>
                            <tr>
                                <td>2XL</td>
                                <td>48-50</td>
                                <td>42-44</td>
                                <td>35-36</td>
                                <td>29.5</td>
                            </tr>
                            <tr>
                                <td>2XL/TALL</td>
                                <td>48-50</td>
                                <td>42-44</td>
                                <td>37.0</td>
                                <td>31.0</td>
                            </tr>
                            <tr>
                                <td>3XL</td>
                                <td>52-54</td>
                                <td>46-48</td>
                                <td>36-37</td>
                                <td>30.5</td>
                            </tr>
                            <tr>
                                <td>4XL</td>
                                <td>56-58</td>
                                <td>50-52</td>
                                <td>37-38</td>
                                <td>31.5</td>
                            </tr>
                            <tr>
                                <td>5XL</td>
                                <td>60-62</td>
                                <td>54-56</td>
                                <td>38-39</td>
                                <td>32.5</td>
                            </tr>
                            <tr>
                                <td>6XL</td>
                                <td>64-66</td>
                                <td>58-60</td>
                                <td>39-40</td>
                                <td>33.5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-lg-12 text-center mb-4">
                    <h1 className="urb lts fw-semibold og">JACKET MEASUREMENTS</h1>
                    <p className="urb lts mt-4">Please Note: These measurements are based on measuring a similar garment out
                        flat on a table, and measuring across the 5 points shown in the picture ONLY. Do not measure around
                        a physical body.
                        Individual finished garment measurements may vary by +/- .6 inch (1-2 cm). As our garments are
                        custom made to order, we don't offer exchanges or refunds for incorrect sizes or change of mind.
                        Please note that Column A shows across chest measurement of the finished garment and not
                        circumferencial measurement. In order to calculate chest size mulitply it by 2..</p>
                </div>
            </div>
            <div className="col-lg-12 col-sm-12 col-md-12 d-flex-column align-items-center justify-content-center ">
                <table className="table table-bordered">
                    <thead className="table-dark urb lts">
                        <tr>
                            <th>SIZE</th>
                            <th>1 – Chest</th>
                            <th>2 – Sleeves</th>
                            <th>3 – Across <br/> Shoulder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXS</td>
                            <td>18</td>
                            <td>24</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>XS</td>
                            <td>20</td>
                            <td>24.5</td>
                            <td>17</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>22</td>
                            <td>25</td>
                            <td>18</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>24</td>
                            <td>25.5</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>M/TALL</td>
                            <td>24</td>
                            <td>27</td>
                            <td>19</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>26</td>
                            <td>26</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>L/TALL</td>
                            <td>26</td>
                            <td>27.5</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>28</td>
                            <td>26.5</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>XL/TALL</td>
                            <td>28</td>
                            <td>28</td>
                            <td>21</td>
                        </tr>
                        <tr>
                            <td>2XL</td>
                            <td>30</td>
                            <td>27</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>2XL/TALL</td>
                            <td>30</td>
                            <td>28.5</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>3XL</td>
                            <td>32</td>
                            <td>27.5</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>4XL</td>
                            <td>34</td>
                            <td>28</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <td>5XL</td>
                            <td>36</td>
                            <td>28.5</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>6XL</td>
                            <td>38</td>
                            <td>29</td>
                            <td>26</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default Body