import React, { useState } from 'react'
import img from '../../asset/food_logo.png'
import { NavLink } from 'react-router-dom';
import { Hero, heroData } from './Hero';
import Steps from './Steps';

const Home = () => {
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
                            <NavLink to="/contact">Contact</NavLink>
                        </div>
                        <div className="flex flex-wrap items-center justify-between space-x-6 pr-4">
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/signup">SignUp</NavLink>
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

