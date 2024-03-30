import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, userDetails as fetchUserDetails } from '../../redux/Actions/action';
import axios from 'axios';
import Header from './Header';
import { NavLink, useNavigate } from 'react-router-dom';

const Menu = () => {

    const dispatch = useDispatch();
    const foodItems = useSelector((state) => state.itemsList);
    const userDetails = useSelector((state) => state.userdata);
    const [selectedCategory, setSelectedCategory] = useState("");

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {

        axios.get('http://localhost:6005/auth/verify')
            .then(res => {
                if (res.data.status) {
                    dispatch(fetchItems());
                    dispatch(fetchUserDetails());
                } else {
                    navigate('/');
                }
            })
            .catch(error => {
                console.error('Error verifying user:', error);
                navigate('/');
            });
    }, [dispatch]);

    // Function to get unique categories from food items
    const getUniqueCategories = (items) => {
        const categories = items.map(item => item.category);
        return [...new Set(categories)];
    };

    console.log(userDetails);
    console.log(foodItems)

    return (
        <>
            {<Header username={userDetails ? userDetails : ''} />}
            <div className="container">
                <div className='sideBlock mx-5'>
                    <h3 className='text-center p-3 rounded-full bg-orange-300 text-white'>Filter</h3>
                    <hr className="my-4" />
                    
                    <p className='font-bold text-2xl m-4 '>Select Category:</p>
                    <select className='text-sxl w-40 bg-orange-100 py-3 m-4 mb-0 rounded-xl border-2 border-orange-600' onChange={e => setSelectedCategory(e.target.value)}>
                        <option className=' bg-orange-600 p-2 m-2 rounded-xl border-2 border-orange-600' value="">All</option>
                        {/* Map over unique categories */}
                        {getUniqueCategories(foodItems).map((category) => (
                            <option className=' p-3 m-4 rounded-xl border-2 border-orange-600' key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
                    <h1 className='text-3xl mb-4 text-center underline'>Menu</h1>
                    {foodItems.length === 0 ? (
                        <p className='NoMatch text-center fs-3 m-1'>No items found</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {foodItems.map((item) => {
                                if (selectedCategory === "" || item.category === selectedCategory) {
                                    return (
                                        <a key={item.id} className="group h-200 border-2 border-orange-300 p-3 rounded-xl">
                                            <div className="h-30 w-30 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img className='h-30 w-auto object-cover object-center group-hover:opacity-75' src={item.img} alt={item.name} />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                                            <p>{item.desc}</p>
                                            <p className="mt-1 text-lg font-medium text-gray-900">Price: ${item.price}</p>
                                            <button className='btn'>
                                                <NavLink to={`/menu/${item.id}`} >Order Now</NavLink></button>


                                        </a>
                                    );
                                } else {
                                    return null;
                                }
                            })
                            }
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Menu;