import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="row footer-color mt-5 mb-3 p-5 text-center ">
                <div className="col-md-4">
                    <h1 className="fw-bold m-2">Medicure</h1>
                    <h5 className="mt-3">Chittagong, Bangladesh</h5>
                    <p>info@gmail.com</p>
                    <p>+880 1755555555</p>

                </div>
                <div className="col-md-4">
                    <h2 className="fw-bold">Category</h2>
                    <h6 className="mt-3">Cardiology Center</h6>
                    <h6>Dental Care</h6>
                    <h6>Audiology Department</h6>
                    <h6>Ultrasonography</h6>
                    <h6>Lab Test</h6>
                </div>
                <div className="col-md-4 footer-link mb-5">
                    <h2 className="fw-bold">Quick Links</h2>
                    <a href="/"><h6>Privacy Policy</h6></a>
                    <a href="/"><h6>Discussion</h6></a>
                    <a href="/"><h6>Terms & Conditions</h6></a>
                    <a href="/"><h6>Customer Support</h6></a>
                </div>

                <div>
                    <p>© Copyright 2021, Medicure Center | All Rights Reserved by Jakia</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;