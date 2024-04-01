import React from 'react'
import img from '../../asset/food_logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-5">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="lg:flex lg:items-start lg:gap-8">
                    <div className="w-40 h-40">
                        <img src={img} />
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                        <div className="col-span-2">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get the latest news!</h2>

                                <p className="mt-4 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
                                    molestias.
                                </p>
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                            <form className="w-full">
                                <label for="UserEmail" className="sr-only"> Email </label>

                                <div className="border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4 dark:border-gray-800">
                                    <input type="email" id="UserEmail" placeholder="john@rhcp.com" className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm dark:bg-gray-900 dark:text-white outline-none"
                                    />

                                    <button className="mt-1 w-full bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-orange-600 sm:mt-0 sm:w-auto sm:shrink-0">
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900 dark:text-white">Services to:</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Bangalore
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Puducherry
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Delhi
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Chennai
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        SEO Optimisation
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900 dark:text-white">Company</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Review
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900 dark:text-white">Contact us</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Help & Support
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Mail to us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <p className="font-medium text-gray-900 dark:text-white">Legal</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Terms & Conditions
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Returns Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                        Refund Policy
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                            <li>
                                <a href="#" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    <span className="sr-only">Facebook</span>

                                    <FaFacebook />
                                </a>
                            </li>

                            <li>
                                <a href="#" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    <span className="sr-only">Instagram</span>

                                    <FaInstagram />
                                </a>
                            </li>

                            <li>
                                <a href="#" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    <span className="sr-only">Twitter</span>

                                    <FaTwitter />
                                </a>
                            </li>

                            <li>
                                <a href="#" target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
                                    <span className="sr-only">GitHub</span>

                                    <FaGithub />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"

                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                                >
                                    <span className="sr-only">LinkedIn</span>

                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-100 pt-8 dark:border-gray-800">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            &copy; 2024.Chandu's food. All rights reserved.
                        </p>

                        <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="text-gray-500 transition hover:opacity-75 dark:text-gray-400">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

