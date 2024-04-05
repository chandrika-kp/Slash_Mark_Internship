import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { FaUserFriends } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';


const SideBar = () => {
    const userName = useSelector((state) =>state.userdata);
    console.log(userName)
    return (
        <>
            <nav className="bg-gray-900 w-40  justify-between flex flex-col h-auto">
                <div className="mt-10 mb-10 ">
                    <div className='flex flex-col items-center'>
                        <a href="/admin">
                            <img src="https://randomuser.me/api/portraits/women/76.jpg" className="rounded-full w-10 h-10 mb-3 mx-auto" />
                        </a>
                        <p className='font-semibold justify-center'>{userName}</p>
                    </div>
                    <hr className="my-4" />

                    <div className="my-20 flex p-3">
                        <ul className='items-center hover:cursor-pointer'>
                            <li className="mb-6">
                                <div className='flex  md:flex'>
                                    <p className='btn text-3xl p-0 border-none hover:rounded-full'><CgProfile /> </p>
                                    <NavLink className='pb-2 navlink' to="/admindetails">Admin</NavLink>
                                </div>
                            </li>

                            <li className="mb-6">
                                <div className='flex md:flex'>
                                    <p className='btn text-3xl p-0 border-none hover:rounded-full'><FaUserFriends /></p>
                                    <NavLink className='pb-2 navlink' to="/users">Users</NavLink>
                                </div>
                            </li>

                            <li className="mb-6">
                                <div className='flex md:flex'>
                                    <p className='btn text-3xl p-0 border-none hover:rounded-full'><IoFastFood /></p>
                                    <NavLink className='pb-2 navlink' to="/fooditems">FoodItems</NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-4" />

                    <div className="flex p-3">
                        <ul>
                            <li>
                                <div className='flex md:flex'>
                                    <p className='btn text-3xl p-0 border-none hover:rounded-full'><LiaSignOutAltSolid /></p>
                                    <NavLink className='pb-2 navlink' to="/logout">Logout</NavLink>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default SideBar