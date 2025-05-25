import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp, IoMegaphone, IoPhoneLandscape } from "react-icons/io5";
import { useState } from 'react';
import ReactiveButton from 'reactive-button';
import { useForm } from 'react-hook-form';

const BookingFrom = () => {
    const [state, setState] = useState('idle');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setState('loading');
        console.log("Its Working", data)


        // send an HTTP request
        setTimeout(() => {
            setState('success');
        }, 3000);
    };

    return (

        <section className="bg-[#0f3c33] py-16 px-4 md:px-10 lg:px-20 text-white">
            <div >
                {/* Left Section */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Contact With Us</h2>
                        <p className="mb-6">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                        </p>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-center gap-3">
                                <span className="material-icons"><FaPhoneAlt /></span>
                                <p>+8801738579393</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons"><IoLocationSharp /></span>
                                <p>Dinajpur,Bangladesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" {...register('name')} className="input input-bordered w-full text-black dark:text-white" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" {...register('email')} className="input input-bordered w-full text-black dark:text-white" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" placeholder="Phone Number" {...register('PhoneNumber')} className="input input-bordered w-full text-black dark:text-white" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Doctor Name</span>
                                </label>
                                <input type="text" placeholder="Doctor Name" {...register('DoctorName')} className="input input-bordered w-full text-black dark:text-white" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="Date"  {...register('date')} className="input input-bordered w-full text-black dark:text-white" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Select Time</span>
                                </label>
                                <select  {...register('time')} className="select select-bordered w-full text-black dark:text-white">
                                    <option disabled selected>Time</option>
                                    <option>10:00 AM</option>
                                    <option>2:00 PM</option>
                                    <option>6:00 PM</option>
                                </select>
                            </div>
                        </div>
                        {/* <input type="email" placeholder="Email" className="input input-bordered w-full" />
                    <input type="tel" placeholder="Mobile Number" className="input input-bordered w-full" />
                    <input type="text" placeholder="Doctor Name" className="input input-bordered w-full" />
                    <input type="date" className="input input-bordered w-full" /> */}

                        <div className="text-center mt-5 w-full" >
                            <ReactiveButton
                                type="submit"
                                buttonState={state}
                                idleText="BOOK NOW"
                                loadingText="Loading"
                                successText="Done"
                                size="w-full"
                            />
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
};

export default BookingFrom;