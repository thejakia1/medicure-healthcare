import React from 'react';
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        img: 'https://image.freepik.com/free-photo/doctor-standing-with-folder-stethoscope_1291-16.jpg?1',
        name: 'Dr. Sajjad Yousuf',
        specialized: 'Cancer and Radio Therapy'
    },
    {
        img: 'https://image.freepik.com/free-photo/cheerful-doctor-gesturing-thumb-up_23-2147896156.jpg',
        name: 'Dr. Mahfuzul Anwar',
        specialized: 'ENT specialist'
    },
    {
        img: 'https://image.freepik.com/free-photo/front-view-covid-recovery-center-female-doctor-with-stethoscope_23-2148847896.jpg',
        name: 'Dr. Krishna Dutta',
        specialized: 'Gynocologist'
    }
]

const Doctors = () => {
    return (
        <div className="container">
            <h2 className="text-warning fw-bold mt-5">Our Amazing Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;