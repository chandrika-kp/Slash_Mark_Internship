import React, { useState } from 'react';
import img from '../../asset/food_logo.png';
import { NavLink } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { CgMenuGridR, CgProfile } from "react-icons/cg";
import { MdRestaurantMenu } from "react-icons/md";
import { useSelector } from 'react-redux';

const Header = (username) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cartItems = useSelector((state) => state.cartItems);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav id='header' className='bg-white text-black border-red-200'>
                <div className='container flex flex-wrap items-center justify-between mt-0 py-2 sm:flex '>
                    <div className="logo-Wrapper pl-10 flex-none items-center">
                        <img src={img} alt="Food Logo" className='w-30 h-20' />
                    </div>
                    <div className={`nav-menu-wrapper ${isMenuOpen ? 'block' : 'hidden'} flex justify-around grow pr-4 md:flex flex-wrap items-center space-x-6 `}>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pl-4 ">
                            {/* <NavLink className='navlink' to="/">Home</NavLink> */}
                            <NavLink className='navlink' to="/about">About</NavLink>
                            <NavLink className='navlink' to="/menu">Menu</NavLink>
                            <NavLink className='navlink' to="/contact">Contact</NavLink>
                        </div>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">

                            <div className='flex justify-center md:flex'>

                                <p className='btn text-3xl p-0 border-none hover:rounded-full'><CgProfile /> </p>
                                <p className='font-semibold'>{username.username}</p>
                            </div>

                            <NavLink className='pb-2 navlink' to="/logout">Logout</NavLink>
                            <div className='flex justify-center'>

                                <NavLink className='navlink btn rounded-full' to="/cart"><FaCartShopping /></NavLink>
                                <sup className='text-xl text-orange-600 font-bold hover:text-2xl'>{cartItems.length}</sup>
                            </div>
                        </div>

                    </div>
                    <div className="block md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                            <p className='text-4xl text-orange-600 hover:text-close'>
                                <MdRestaurantMenu />
                            </p>
                        ) : (
                            <p className='text-4xl'>
                            <CgMenuGridR />
                            </p>
                        )}
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Header;
