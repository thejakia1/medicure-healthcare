import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
// import banner1 from '../../../images/banner/banner1.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="bg-img min-h-screen text-center flex items-center justify-center">
                {/* <img src={banner1} className="img-fluid" alt="" /> */}
                <div>
                    <h1 className="banner-title">Medicure Center</h1>
                    <p className="banner-info">Medicure Center always ready to support better health care services for patients <br /> to achieve a high degree of patient satisfaction.</p>
                    <Link to="/appointment"><button className="btn btn-warning fw-bold p-3">Book Appointment</button></Link>
                </div>
            </div>
        </>
    );
};

export default Banner;

// className="banner-img min-h-screen text-center flex items-center justify-center" 