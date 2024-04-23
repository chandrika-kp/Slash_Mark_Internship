import React, { useEffect } from 'react'
import axios from 'axios';
import { userDetails as fetchUserDetails, allUserDetails as allUsers, fetchItems } from '../../redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from './SideBar';


const AdminPage = () => {
    const userDetails = useSelector((state) => state.userdata);
    const AllUsers = useSelector((state) => state.AllUsers);
    const foodItems = useSelector((state) => state.itemsList);

    const dispatch = useDispatch();

    axios.defaults.withCredentials = true;
    useEffect(() => {
        dispatch(fetchUserDetails());
        dispatch(fetchItems());
        axios.get('http://localhost:6005/auth/usersList')
            .then(res => {
                dispatch(allUsers());
            })
    }, []);

    console.log(AllUsers)
    console.log(foodItems)

    return (
        <>

            <div className="flex flex-row text-white h-full">
                <SideBar />
                <div className="text-white-700 bg-gray-200 h-screen w-screen">
                    <div className="bg-gray-900 border-l-white border-2 text-center">
                        <p className='py-2 text-2xl'>ADMIN PANEL</p>
                    </div>
                    <p className='text-3xl text-black p-3 text-center bg-slate-300'>Welcome to Admin Panel</p>
                    <div className="flex flex-wrap justify-around bg-gray-100 py-10 p-14">
                        {/* Card for Total Users */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                                <div className="h-20 bg-orange-600 flex items-center">
                                    <p className="mr-0 text-white text-lg pl-5">Total Users</p>
                                </div>
                                <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                    <p>NO. OF USERS</p>
                                </div>
                                <p className="py-4 text-black text-3xl ml-5">{AllUsers.length - 1} +</p>
                            </div>
                        </div>

                        {/* Card for BT Subscribers */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-4">
                            <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                                <div className="h-20 bg-red-400 flex items-center justify-between">
                                    <p className="mr-0 text-white text-lg pl-5">Total FoodItems </p>
                                </div>
                                <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                                    <p>NO. OF FOODITEMS</p>
                                </div>
                                <p className="text-black py-4 text-3xl ml-5">{foodItems.length} +</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AdminPage