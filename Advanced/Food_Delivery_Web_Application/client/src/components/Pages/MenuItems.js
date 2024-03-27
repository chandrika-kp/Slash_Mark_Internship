// MenuItems.js

import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/Actions/action';
import { NavLink, useNavigate, useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';
import Header from './Header';
import { FaCartShopping } from "react-icons/fa6";


const MenuItems = () => {


    const userDetails = useSelector((state) => state.userdata);
    const dispatch = useDispatch();
    const { id } = useParams();
    const cartItems = useSelector((state) => state.addToCart);
    // const foodItems = useSelector((state) => state.itemsList);
    const [foodItem, setfoodItem] = useState([]);

    const [loading, setLoading] = useState(false);

    // const navigate = useNavigate();
    const addFoodItem = (item) => {
        dispatch(addToCart(item));
    }
    const removeItem = (item) => {
        dispatch(removeFromCart(item));
    }

    console.log(cartItems)

    useEffect(() => {

        axios.get(`http://localhost:6005/foodItems/${id}`)
            .then((response) => {
                setfoodItem(response.data);
                // dispatch(addToCart());
            })
        setLoading(false);
    }, [dispatch, id]); // Add id to dependency array


    return (
        <>
            {<Header username={userDetails ? userDetails : ''} />}
            <div className="container mx-auto py-10 bg-slate-300">
                {loading ? (
                    <Skeleton height={400} width={400} />
                ) : foodItem ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5">
                        <div>
                            <img src={foodItem.img} alt={foodItem.name} className="mx-auto md:w-80" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">{foodItem.name}</h2>
                            <p className="text-lg mb-4">{foodItem.desc}</p>
                            <p className="mb-2">Category: {foodItem.category}</p>
                            <p className="mb-2">Price: ${foodItem.price}</p>
                            {/* <p className="mb-4">Rating: {foodItem.rating.rate} ({foodItem.rating.count} reviews)</p> */}
                            {/* <button className="btn">
                            {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
                        </button> */}
                            {/* <button onClick={()=>removeItem(foodItem)}>-</button> */}
                            <button className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold  hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"
                                onClick={() => addFoodItem(foodItem)}>
                                AddItem</button>
                            <button className="bg-transparent mx-3 hover:bg-orange-500 text-orange-700 text-xl hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded">
                                <NavLink to="/cart"><FaCartShopping /></NavLink></button>
                            <button onClick={() => addFoodItem(foodItem)}>+</button>

                        </div>
                    </div>
                ) : (
                    <p className="text-center">Product not found.</p>
                )}
            </div>
        </>

    );
};

export default MenuItems;
