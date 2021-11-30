import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/404.png'
const NotFound = () => {
    return (
        <div className="mb-5">
            <img className='w-50' src={notfound} alt="" />
            <br />
            <Link to="/">
                <button className="btn btn-warning px-4 fw-bold">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;