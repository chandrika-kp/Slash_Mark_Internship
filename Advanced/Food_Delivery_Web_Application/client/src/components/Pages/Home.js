import React, { useState } from 'react'
import img from '../../asset/food_logo.png'
import { NavLink } from 'react-router-dom';
import { Hero, heroData } from './Hero';
import Steps from './Steps';
import { CgMenuGridR} from "react-icons/cg";
import { MdRestaurantMenu } from "react-icons/md";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <>
            <nav id='header' className='bg-white text-black border-red-200 font-bold'>
                <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
                    <div className="logo-Wrapper pl-10 flex-none items-center">
                        <img src={img} alt="Food Logo" className='w-30 h-20' />
                    </div>
                    <div className={`nav-menu-wrapper ${isMenuOpen ? 'block' : 'hidden'} flex justify-around grow pr-4 md:flex flex-wrap items-center space-x-6`}>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">
                            <NavLink className='navlink' to="/">Home</NavLink>
                            <NavLink className='navlink' to="/about">About</NavLink>
                            <NavLink className='navlink' to="/contact">Contact</NavLink>
                        </div>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">
                            <NavLink className='navlink' to="/login">Login</NavLink>
                            <NavLink className='navlink' to="/signup">SignUp</NavLink>
                        </div>
                    </div>
                    <div className="block md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? (
                             <p className='text-4xl float-left text-orange-600'>
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
            <div className="box-border">
                <div className="flex flex-col">

                    <Hero data={heroData.top} />
                    {/* <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
                        <img className="absolute left-0 lg:left-auto lg:-mt-64 lg:-ml-24 -skew-y-12 lg:skew-x-0 lg:m-0" src="https://tailwind-landing-page.netlify.app/static/media/Rectangle_3.2ca0ade5.png" alt="" />
                        <img className="absolute right-0 lg:right-auto lg:ml-64 lg:-mt-60 -skew-x-12 lg:skew-x-0 " src="https://tailwind-landing-page.netlify.app/static/media/Rectangle_3.2ca0ade5.png" alt="" />
                    </div> */}
                    <div className="z-0 flex flex-row items-start justify-center w-screen h-screen pt-20 -mb-16 bg-gray-50 lg:bg-white lg:mb-20 lg:w-full lg:h-96 lg:pt-0">
                        <img className="absolute left-0 lg:left-auto lg:-mt-64" src="https://tailwind-landing-page.netlify.app/static/media/Rectangle_1.30c3b5ed.png" alt="" />
                        <img className="absolute right-0 lg:right-auto lg:ml-24 lg:-mt-16" src="https://tailwind-landing-page.netlify.app/static/media/Rectangle_2.71c48fa9.png" alt="" />
                    </div>
                    
                    <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>

                    <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-orange-800 lg:font-bold">How the app works </div>

                    <Steps />
                    <Hero data={heroData.bottom} />
                </div>
            </div>
        </>
    );
}


export default Home

