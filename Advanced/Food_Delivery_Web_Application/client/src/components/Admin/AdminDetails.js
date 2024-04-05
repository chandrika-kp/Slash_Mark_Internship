import React from 'react'
import SideBar from './SideBar'
import { useSelector } from 'react-redux'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AdminDetails = () => {
    const allUsers = useSelector((state) => state.AllUsers);
    return (
        <div className="flex flex-row text-white h-full">
            <SideBar />

            {allUsers.map((each) => (
                each.userType === 'admin' &&
                (
                    <>
                        <div className="text-gray-700 bg-gray-200 h-screen w-screen">
                            <div className="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
                                <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg ZFtransform   duration-200 easy-in-out">
                                    <h1 className='text-2xl text-black font-bold text-center p-'>ADMIN DETAILS</h1>
                                    <div className=" h-32 overflow-hidden" >
                                        <img className="w-full" src='https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80' alt="" />
                                    </div>
                                    <div className="flex justify-center px-5  -mt-12">
                                        <img className="h-32 w-32 bg-white p-2 rounded-full   " src="https://randomuser.me/api/portraits/women/76.jpg" alt="" />

                                    </div>
                                    <div className=" ">
                                        <div className="text-center px-14">
                                            <h2 className="text-gray-800 text-3xl font-bold">{each.username}</h2>
                                            <a className="text-gray-400 mt-2 hover:text-blue-500" href="#" target="BLANK()">{each.email}</a>
                                            <p className="mt-2 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                                        </div>
                                        <hr className="mt-6" />
                                        <div className="flex  bg-gray-50 ">
                                            <div className="flex flex-row text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                                <a href="https://www.linkedin.com/in/poorna-chandrika-konathala-2b3376232/" target="_blank"
                                                    className="transition hover:opacity-75 py-1 pr-2 text-xl">
                                                    <FaLinkedin />
                                                </a>
                                                <p className="font-semibold">1.0k </p> Followers
                                            </div>
                                            <div className="border"></div>
                                            <div className="flex flex-row text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                                                <a href="https://github.com/chandrika-kp" target="_blank"
                                                    className="transition hover:opacity-75 py-1 pr-2 text-xl">
                                                    <FaGithub />
                                                </a>
                                                <p className="font-semibold">4.0 </p> Followers
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            )
            )}

        </div>
    )
}

export default AdminDetails