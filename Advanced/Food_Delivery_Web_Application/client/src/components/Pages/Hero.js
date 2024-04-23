import React from 'react'
import img1 from '../../asset/img1.jpg';
import img2 from '../../asset/img2.jpg';
import { NavLink } from 'react-router-dom';
const heroData = {
    top: {
        appType: 'Food app',
        tagLine: "Why stay hungry when you can order from Chandu's Food",
        description: 'Tasty items available now in chandu’s food ',
        mainActionText: 'Register',
        extraActionText: 'Login',
        backgroundImage: img1
    },
    bottom: {
        appType: 'Food app',
        tagLine: 'Download the app now.',
        description: 'Available on your favourite store. Start your experience now.',
        mainActionText: 'Playstore',
        extraActionText: 'App Store',
        backgroundImage: img2
    }
};

const Hero = (heroData) => {
    return (
        <>
            {Object.entries(heroData).map(([key, values]) => (

                <div key={key}>
                    <div style={{ textShadow: '0px 1px 1px gray', backgroundImage: `url(${values.backgroundImage})` }} className="flex flex-col items-center justify-start font-sans min-h-96 bg-gray-50 lg:pt-10 lg:pb-20 lg:bg-hero lg:bg-cover">
                        <div>
                            <p className="p-3 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">{values.appType}</p>
                        </div>
                        <div>
                            <p className="p-2 text-4xl font-bold text-center lg:mx-auto lg:w-4/6 lg:text-5xl lg:text-gray-100">
                                {values.tagLine}
                            </p>
                        </div>
                        <div>
                            <p className="p-4 pt-6 font-sans text-2xl leading-10 text-center text-gray-500 lg:text-gray-200">
                                {values.description}
                            </p>
                        </div>
                        <div className="relative z-50 flex flex-col items-center justify-between h-48 lg:space-x-8 pt-7 lg:pt-0 lg:flex-row lg:justify-between lg:w-90">
                            <button
                                className="pt-3 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all bg-orange-600 rounded-full shadow-2xl lg:ml-5 hover:bg-orange-700 focus:outline-none ring-4 ring-orange-600 lg:ring-2 lg:font-medium "
                            >
                                {values.mainActionText === 'Register' ?
                                    <NavLink className='navlink' to="/signup">Register</NavLink> : values.mainActionText
                                }
                            </button>
                            <button
                                className="pt-3 pb-3 text-2xl font-semibold text-center text-orange-500 transition-all rounded-full shadow-2xl lg:mr-5 hover:text-orange-500 hover:bg-gray-50 pl-11 pr-11 bg-gray-50 focus:outline-none ring-4 ring-orange-500 lg:font-medium lg:text-gray-50 lg:bg-opacity-0 lg:ring-2 lg:ring-white"
                            >
                                {values.extraActionText === 'Login' ?
                                    <NavLink className='navlink' to="/login">Login</NavLink> : values.extraActionText
                                }
                            </button>
                        </div>

                    </div>

                </div>

            ))
            }
        </>

    )
}




export { Hero, heroData };

