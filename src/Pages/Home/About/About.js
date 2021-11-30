import React from 'react';

const About = () => {
    return (
        <div className="container text-center mt-5 mb-2">
            <h2 className="text-warning text-center mb-4 fw-bold">WHO WE ARE</h2>
            <div className="d-lg-flex col-lg-12">
                <img className="img-fluid px-5 mb-4 rounded" src="https://image.freepik.com/free-vector/flat-hand-drawn-hospital-reception-scene_52683-54613.jpg" alt="" />
                <p className="my-auto">Established by Dr Prathap C Reddy in 1983, Medicure Center has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Medicure Hospitals has touched more than 120 million lives from over 120 countries, offering the best clinical outcomes.</p>
            </div>
        </div>
    );
};

export default About;