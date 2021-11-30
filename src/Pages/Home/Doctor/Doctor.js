import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { name, img, specialized } = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div>
                <img className="w-75" src={img} alt="" />
                <h3>{name}</h3>
                <h5 className="text-warning">{specialized}</h5>
            </div>
            <Link to="/appointment"><button className="btn btn-warning">Book Appoinment</button></Link>
        </div>
    );
};

export default Doctor;