import React, { useEffect } from 'react'
import { userDetails as fetchUserDetails, allUserDetails as allUsers, fetchItems } from '../../redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SideBar from './SideBar';

const Users = () => {

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
                <div className="px-16 py-4 text-gray-700 bg-gray-200 h-screen w-screen ">
                    <h1 className='text-2xl text-center font-bold'>USERS</h1>
                    <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className='p-2'>ID</th>
                                <th className='p-2'>Username</th>
                                <th className='p-2'>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllUsers.map((each, index) => (<>
                                {each.userType === 'user' && (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={each.id}>
                                        <td className='p-2'>{index}</td>
                                        <td className='p-2'>{each.username}</td>
                                        <td className='p-2'>{each.email}</td>
                                    </tr>
                                )}
                            </>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>


        </>
    )
}

export default Users