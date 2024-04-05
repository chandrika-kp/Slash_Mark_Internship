// MenuItems.js

import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/Actions/action';
import { NavLink, useParams } from 'react-router-dom'; 
import axios from 'axios';
import Header from './Header';
import { FaCartShopping } from "react-icons/fa6";


const MenuItems = () => {
    const userDetails = useSelector((state) => state.userdata);
    const dispatch = useDispatch();
    const { id } = useParams();
    const cartItems = useSelector((state) => state.cartItems);
    // const foodItems = useSelector((state) => state.itemsList);
    const [foodItem, setfoodItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("AddItem");
    
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(`http://localhost:6005/foodItems/${id}`)
            .then((response) => {
                setfoodItem(response.data);
            })
        setLoading(false);
    }, [id]);

    const addFoodItem = (item) => {
        if (cartBtn === "AddItem") {
            dispatch(addToCart(item));
            setCartBtn("RemoveItem")
        } else {
            dispatch(removeFromCart(item));
            setCartBtn("AddItem")
        }
    }

    const increaseItemQuantity = (item) => {
        dispatch(increaseQuantity(item));
    }

    const decreaseItemQuantity = (item) => {
        dispatch(decreaseQuantity(item));
    }


    console.log(cartItems)
    const ItemQuantity = cartItems.find(cartItem => cartItem.id === foodItem.id)?.quantity

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
                            <p className="mb-2">Rating: {foodItem.rating}</p>
                            {/* <p className="mb-4">Rating: {foodItem.rating.rate} ({foodItem.rating.count} reviews)</p> */}
                            {/* <button className="btn">
                            {isItemInCart ? 'Remove from Cart' : 'Add to Cart'}
                        </button> */}
                            {/* <button onClick={()=>removeItem(foodItem)}>-</button> */}
                            <div className='flex'>
                                <button className="btn mr-3 "
                                    onClick={() => addFoodItem(foodItem)}>
                                    {cartBtn}</button>
                                {(cartBtn !== "AddItem") && (
                                    <p>Quantity :
                                        <button className='btn mr-3' onClick={() => decreaseItemQuantity(foodItem)}>-</button>
                                        {/* {foodItem.quantity || 0} */}
                                        {cartItems.find(cartItem => cartItem.id === foodItem.id)?.quantity || 0}
                                        <button className='btn mx-3' onClick={() => increaseItemQuantity(foodItem)}>+</button>
                                    </p>
                                )}
                                <div className='flex '>
                                    <p>Go to Cart:
                                        <button className="btn ml-3 px-3">
                                            <NavLink to="/cart"><FaCartShopping /></NavLink>
                                        </button>
                                        <sup className='text-xl mx-2 text-orange-600 font-bold hover:text-2xl'>{cartItems.length}</sup>
                                    </p>
                                </div>
                                {/* <p>Total Price: $ {foodItem.price * ItemQuantity} </p> */}
                            </div>
                            <p className='py-2'>
                                <NavLink className='navlink text-orange-600 underline' to="/menu">+ Add More</NavLink>
                            </p>
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
