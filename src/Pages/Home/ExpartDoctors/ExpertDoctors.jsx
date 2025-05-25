import React from 'react';
import { Link } from 'react-router-dom';

const ExpertDoctors = () => {
    return (
        <div className='text-center mb-3'>
            <Link to='/viewAllDoctors'>
                <button className='btn btn-ghost border-b-amber-800 text-amber-500 rounded-xl'>View All Doctors Profile</button>
            </Link>
        </div>
    );
};

export default ExpertDoctors;