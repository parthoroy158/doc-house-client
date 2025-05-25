import { useContext, useState } from 'react';
import ReactiveButton from 'reactive-button';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import animationData from '../../../public/signUp2.json'
import bg from '../../assets/final.jpg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Share/Hooks/useAuth';
import AuthContext from '../../Share/AuthContext/AuthContext';
import { useNavbar } from '@heroui/react';




const SignUp = () => {
    const [state, setState] = useState('idle');
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmitLogIn = data => {
        setState('loading');

        createUser(data.email, data.password)
            .then(result => {
                console.log(result)
                setTimeout(() => {
                    setState('success');
                }, 1000);
                userUpdateProfile(data.name, data.photoURL)
                    .then(result => {
                        console.log(result)
                    })
                    .catch(error => {
                        console.log(error, "Error")
                    })

                navigate('/');
            })
            .catch(error => {
                console.log('Error', error)
            })



        // send an HTTP request

    };
    return (
        <div>
            <div className="hero min-h-screen max-h-screen pt-25 bg-cover bg-center"
                style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col gap-15 lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        {/* <h1 className="text-5xl font-bold text-center pb-10">Sign Up!</h1> */}
                        <Lottie className='w-90 h-90' animationData={animationData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit(onSubmitLogIn)}>
                            <h1 className="text-2xl font-bold text-center "> Create An Account!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" placeholder="name" {...register('name')} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" placeholder="Photo URL" {...register('photoURL')} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email')} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"  {...register('password')} className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <ReactiveButton
                                    type="submit"
                                    buttonState={state}
                                    idleText="SIGN UP"
                                    loadingText="Loading"
                                    successText="Done"
                                    size="w-full"
                                />
                            </div>
                            <p>Already have an account? <span className='text-amber-800 font-bold'><Link to='/logIn'>Click Here</Link></span></p>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex gap-5 justify-center mb-5'>
                            <button className='btn btn-active rounded-4xl'> <FcGoogle className='text-2xl' /></button>
                            <button className='btn btn-active rounded-4xl'> <FaGithub className='text-2xl' /></button>
                            <button className='btn btn-active rounded-4xl'> <FaFacebook className='text-2xl' /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;