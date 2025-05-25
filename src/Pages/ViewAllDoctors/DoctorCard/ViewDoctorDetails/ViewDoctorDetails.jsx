import { div } from 'framer-motion/client';
import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
// import doctor from '../../../assets/doc.jpg'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { IoLocationSharp } from 'react-icons/io5';
import BookingFrom from '../../../Home/BookingFrom/BookingFrom';


const ViewDoctorDetails = () => {

    const details = useLoaderData()
    const { name, image, specialty, qualifications, actions, availableTime, fees, _id, rating, location } = details



    return (
        <div>
            <div className='max-w-7xl mx-auto '>
                <div
                    className="hero h-150  bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{
                        backgroundImage:
                            `url(${image})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold flex justify-right ">{name}</h1>
                            <p className="max-w-1/2">
                                {availableTime}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-10  mb-10 bg-base-200 flex'>
                <div className='p-5'>
                    <img className='w-45 rounded-xl ml-10 ' src={image} alt="" />
                </div>
                <div className='p-5 '>
                    <h2 className='font-bold'>{name} </h2>
                    <p>{qualifications} {specialty}</p>
                    <Rating className='h-6'
                        style={{ maxWidth: 180 }}
                        value={rating}
                        readOnly
                    />
                    <p className='flex items-center gap-3'> <IoLocationSharp />{location}</p>
                </div>
            </div>
            <BookingFrom></BookingFrom>
        </div>
    );
};

export default ViewDoctorDetails;