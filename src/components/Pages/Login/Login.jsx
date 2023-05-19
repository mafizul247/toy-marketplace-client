import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { loginUser, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        setError('')
        setSuccess('')

        if (password.length < 6) {
            setError('Password length must 6 character');
            return
        } else if (!/(?=.*?[A-Z])/.test(password)) {
            setError('At least one upper case English letter');
            return
        } else if (!/(?=.*?[a-z])/.test(password)) {
            setError('At least one lower case English letter');
            return
        } else if (!/(?=.*?[0-9])/.test(password)) {
            setError('At least one digit');
            return
        } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError('At least one special character #?!@$%^&*-');
            return
        }
        // console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess('User Login Successfully');
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
            event.target.reset();

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Google SignIn Successfullty');
            })
            .then(error => {
                console.log(error.message)
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password<span className='text-red-600'>*</span></span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">Login With Google</div>
                        </div>
                        <div className='text-center'>
                            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                G
                            </button>
                        </div>
                        <label className="label">
                            <p>Don't have an account? Please <Link to='/register' className="text-orange-600 link link-hover">Register</Link></p>
                        </label>
                        <label className="label">
                            <p className='text-green-600'> {success} </p>
                            <p className='text-red-600'> {error} </p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;