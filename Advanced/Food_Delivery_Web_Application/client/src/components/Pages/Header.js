import React, { useState } from 'react';
import img from '../../asset/food_logo.png';
import { NavLink } from 'react-router-dom';

const Header = (username) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav id='header' className='bg-white text-black border-red-200'>
                <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                    <div className="logo-Wrapper pl-10 flex-none items-center">
                        <img src={img} alt="Food Logo" className='w-30 h-20' />
                    </div>
                    <div className={`nav-menu-wrapper ${isMenuOpen ? 'block' : 'hidden'} flex justify-around grow pr-4 md:flex flex-wrap items-center space-x-6`}>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/menu">Menu</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">
                            <p>WELCOME , {username.username}</p>
                            <NavLink to="/cart">Cart</NavLink>
                            <NavLink to="/logout">Logout</NavLink>
                        </div>
                    </div>
                    <div className="block md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
