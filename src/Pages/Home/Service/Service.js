import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
    
    const { id, name, info, img } = service;
    

    const history = useHistory()

    const handleDetails = (id) => {
        const uri = `/details/${id}`
        history.push(uri)
    }
    return (
        <div className="service p-4">
            <img className="rounded" src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{info}</p>
            <Link to={`/Details/${id}`}><button onClick={() => handleDetails(id)} className="btn btn-warning">View Details</button></Link>
        </div>
    );
};

export default Service;

