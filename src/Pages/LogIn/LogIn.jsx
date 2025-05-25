import { useContext, useState } from 'react';
import ReactiveButton from 'reactive-button';
import bg from '../../assets/doctor.jpg'
import animationData from '../../../public/final.json'
import Lottie from 'lottie-react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import AuthContext from '../../Share/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';



const LogIn = () => {
    const [state, setState] = useState('idle');
    const { userSignIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const { signInWithGoogle } = useContext(AuthContext)


    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error, "error")
            })

    }


    const onSubmitLogIn = (data) => {
        data.preventDefault()
        setState('loading');
        console.log("Its Working", data)
        const form = data.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userSignIn(email, password)
            .then(result => {
                console.log(result)
                setTimeout(() => {
                    setState('success');
                }, 3000);
                navigate('/')
            })
            .catch(error => {
                console.log("error", error)
            })


        // send an HTTP request

    };


    return (
        <div>
            <div className="hero min-h-screen max-h-screen pt-25"
                style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                        <Lottie className='w-90 h-90' animationData={animationData}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={onSubmitLogIn}>
                            <h1 className="text-2xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <ReactiveButton
                                    type="submit"
                                    buttonState={state}
                                    idleText="LOG IN"
                                    loadingText="Loading"
                                    successText="Done"
                                    size="w-full"
                                />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div className='flex gap-5 justify-center mb-5'>
                            <button className='btn btn-active rounded-4xl' onClick={handleSignInWithGoogle}> <FcGoogle className='text-2xl' /></button>
                            <button className='btn btn-active rounded-4xl'> <FaGithub className='text-2xl' /></button>
                            <button className='btn btn-active rounded-4xl'> <FaFacebook className='text-2xl' /></button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;