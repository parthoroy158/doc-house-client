import React, { useEffect, useState } from 'react';
import useAxios from '../../Share/Hooks/useAxios';
import Banner from '../Home/Banner/Banner';
import ViewDocBanner from './ViewDocBanner/ViewDocBanner';
import DoctorCard from './DoctorCard/DoctorCard';

const ViewAllDoctors = () => {
    const [doctors, setDoctors] = useState([])
    const useAxiosSecure = useAxios()
    useEffect(() => {
        useAxiosSecure.get('/doctors')
            .then(res => {
                setDoctors(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div >
            <ViewDocBanner></ViewDocBanner>
            <p className='text-4xl uppercase font-bold text-center m-5'>Here All The Doctors</p>
            <div className="grid grid-cols-4 gap-4 bg-base-200 p-10">
                {
                    doctors.map(doctor => <DoctorCard doctor={doctor}></DoctorCard>)
                }
            </div>
        </div>
    );
};

export default ViewAllDoctors;