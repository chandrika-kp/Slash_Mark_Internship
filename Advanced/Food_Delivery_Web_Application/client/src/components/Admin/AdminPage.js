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
                    <div className='text-black'>
                        {userDetails}...
                        users...
                        {AllUsers.length - 1}
                        fooditems..{foodItems.length}
                        {/* {AllUsers.map((each) => (
                            each.userType === 'admin' &&
                            (
                                <>
                                    <p>{each.username}</p>
                                </>
                            )
                        )
                        )} */}
                    </div>

                </div>
            </div>
            {/* {<Header username={userDetails ? userDetails : ''} />}
            <hr className='text-gray-600 ' />

            <div id='users'>AdminPage</div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {AllUsers.map((each, index) => (<>
                        {each.userType === 'user' && (
                            <tr key={each.id}>
                                <td>{index}</td>
                                <td>{each.username}</td>
                                <td>{each.email}</td>
                            </tr>
                        )}
                    </>
                    ))}
                </tbody>
            </table>

            <table className='border-orange-600 border-2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>category</th>
                        <th>Rating</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className='border-orange-600 border-2'>
                    {foodItems.map((each, index) => (
                        <>
                            <tr key={each.id}>
                                <td>{index + 1}</td>
                                <td>{each.name}</td>
                                <td>{each.category}</td>
                                <td>{each.rating}</td>
                                <td>{each.price}</td>
                            </tr>

                        </>
                    ))}
                </tbody>
            </table>
 */}

        </>
    )
}

export default AdminPage