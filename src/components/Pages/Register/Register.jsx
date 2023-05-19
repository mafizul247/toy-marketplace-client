import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Register = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirm.value;
        // console.log(name, photo, email, password, confirmPass);

        setError('')
        setSuccess('')

        if(password !== confirmPass) {
            setError('Password dose not matched');
            return
        }else if(password.length < 6) {
            setError('Password length must 6 character');
            return
        }else if(!/(?=.*?[A-Z])/.test(password)) {
            setError('At least one upper case English letter');
            return
        }else if(!/(?=.*?[a-z])/.test(password)) {
            setError('At least one lower case English letter');
            return
        }else if(!/(?=.*?[0-9])/.test(password)) {
            setError('At least one digit');
            return
        }else if(!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('At least one special character #?!@$%^&*-');
            return
        }
        // console.log(name, photo, email, password, confirmPass);

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="url" name='photo' placeholder="Your Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="Confirm Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='text-center'>
                                <button className="btn btn-circle btn-outline">
                                    G
                                </button>
                            </div>
                            <label className="label">
                                <p>Have already an account? Please <Link to='/login' className="text-orange-600 link link-hover">Login</Link></p>
                            </label>
                            <label className="label">
                                <p className='text-green-600'> {success} </p>
                                <p className='text-red-600'> {error} </p>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;