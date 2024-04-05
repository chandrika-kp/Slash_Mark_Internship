import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from "../../asset/food_logo.png"

const Signin = () => {
    const [userType, setUserType] = useState('');
    const [secretKey, setSecretKey] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (userType === 'admin' && secretKey !== 'Chandu') {
            e.preventDefault();
            alert('Invalid Admin')
        }
        e.preventDefault();
        axios.post('http://localhost:6005/auth/signup', {
            username: userName,
            email: email,
            password: password,
            userType: userType
        })
            .then(response => {
                console.log(response);
                if (response.data.status) {
                    navigate('/login');
                } else {
                    alert('Already Registered')
                    navigate('/login')
                }
            }
            )
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className="flex bg-slate-200  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        SignUp to your account
                    </h2>
                    <div className="block text-sm font-medium leading-6 text-gray-900">
                        Register As
                        <input className='ml-4 mt-4' type="radio" name="userType" id="user" value='user' onChange={(e) => setUserType(e.target.value)} />User
                        <input className='ml-4 mt-4' type="radio" name="userType" id="admin" value='admin' onChange={(e) => setUserType(e.target.value)} />Admin
                    </div>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                        {userType === 'admin' ? (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Secret Key
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="name"
                                        required
                                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 outline-none"
                                        onChange={(e) => setSecretKey(e.target.value)}
                                    />
                                </div>
                            </div>
                        ) : null
                        }
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                UserName
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 outline-none"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 outline-none"
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#/" className="font-semibold text-orange-600 hover:text-orange-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder='  * * * * * *'
                                    // autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 pl-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 outline-none"
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <NavLink to="/login" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">
                            Login
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}



export default Signin