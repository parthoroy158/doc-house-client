import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { IoCalendar, IoCash, IoLocationSharp } from "react-icons/io5";
import { FaDollarSign } from 'react-icons/fa6';


const PopularDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        fetch('popularDoctor.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data);
                console.log(data);
            });
    }, []);

    return (
        <div className="px-4">
            <Swiper
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                spaceBetween={15}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper mt-10 mb-5"
            >
                {doctors.map((doctor, index) => (
                    <SwiperSlide key={index}>
                        <div className="card bg-base-300w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto shadow-sm mb-10">
                            <figure className="px-10 pt-10">
                                <img
                                    src={doctor.image}
                                    alt={doctor.name}
                                    className="rounded-xl h-60 object-cover w-60"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{doctor.name}</h2>
                                <p>{doctor.specialty}</p>
                                <Rating className='h-7'
                                    style={{ maxWidth: 180 }}
                                    value={doctor.rating}
                                    readOnly
                                />
                            </div>
                            <div className="divider"></div>
                            <div className='pl-5 flex items-center gap-4'>
                                <IoLocationSharp />
                                <p> {doctor.location}</p>
                            </div>
                            <div className='pl-5 flex items-center gap-4'>
                                <IoCalendar />
                                <p> {doctor.availableTime}</p>
                            </div>
                            <div className='pl-5 flex items-center gap-4'>
                                <FaDollarSign />
                                <p> {doctor.availableTime}</p>
                            </div>
                            <div className="card-actions w-full p-5">
                                <button className="btn btn-ghost border-amber-600 rounded-xl w-full p-5 text-amber-500">View Profile</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PopularDoctor;
