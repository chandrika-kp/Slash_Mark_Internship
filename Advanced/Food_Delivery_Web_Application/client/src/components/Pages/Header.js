import React from 'react'
import img from '../../asset/food_logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav id='header' className='bg-white text-black border-red-200'>
            <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                <div className="logo-Wrapper pl-10 flex items-center">
                    <img src={img} alt="" className='w-30 h-20' />
                </div>
                <div className="nav-menu-wrapper flex flex-wrap items-center justify-between space-x-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <div>About</div>
                </div>
                <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">
                    <div>Cart</div>
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">SignUp</NavLink>               
                </div>
            </div>

        </nav>
    )
}

export default Header;