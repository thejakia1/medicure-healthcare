import React from 'react';
import { useParams } from 'react-router';
import useDetails from '../../../hooks/useDetails';

const Details = () => {
    const [details] = useDetails();
    const { serviceId } = useParams();
    const serviceSelection = details?.find((details) => details.id === Number(serviceId));
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-5">
                    <img src={serviceSelection?.img} alt="" className="image img-fluid" />
                    <h4 className="mt-5 text-warning fw-bold">DEPARTMENT: <span className="service-name">{serviceSelection?.name}</span></h4>
                    <p>{serviceSelection?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;










// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import ServiceDetails from '../ServiceDetails/ServiceDetails';

// const Details = () => {
//     const [services, setServices] = useState([]);
//     const {serviceId} = useParams()
//     useEffect(() =>
//         fetch('/services.json/${serviceId}')
//         .then(res => res.json())
//         .then(data => setServices(data))
//         , []);
//     return (
//         <div className="container">
//             <div className="row">
//                 {
//                     services.map(service => 
//                         <ServiceDetails service={service}>

//                         </ServiceDetails>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default Details;