import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
    const { name, image, specialty, actions, availableTime, fees, _id } = doctor;

    return (
        <div className="card bg-base-300 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg shadow-md hover:shadow-lg transition duration-500">
            <figure className="px-4 pt-4">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl w-full h-48 object-cover "
                    loading="lazy"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg md:text-xl font-semibold">{name}</h2>
                <p className="text-sm md:text-base text-gray-500">{specialty}</p>
                <div>
                    {
                        actions.map(action => <li>{action}</li>)
                    }
                </div>
                <div className="divider"></div>
                <p>Available Time:{availableTime}</p>
                <p>Fees: {fees}</p>
                <div className="card-actions">
                    <Link to={`/doctors/${_id}`}>
                        <button className="btn btn-ghost  border-b-amber-400 rounded-l ">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;
