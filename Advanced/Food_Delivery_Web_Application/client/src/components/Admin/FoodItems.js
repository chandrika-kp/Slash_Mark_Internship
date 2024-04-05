import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SideBar from './SideBar';

const FoodItems = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [showForm, setShowForm] = useState(false);

    const foodItems = useSelector((state) => state.itemsList);
    const dispatch = useDispatch();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:6005/fooditems', {
            id: foodItems.length+1,
            img: image,
            name: name,
            price: price,
            desc: desc,
            category: category,
            rating: rating,
        }).then(response => {
            setShowForm(false);
            console.log(response);
        }).catch((err) => console.log(err));
    };

    return (
        <div className="flex flex-row text-white">
            <SideBar />
            <div className="w-fill sm:w-3/4" style={{ width: '-webkit-fill-available' }}>
                <div className="bg-gray-900 border-l-white border-2 text-end">
                    <button
                        className=" btn p-2 m-4 bg-white text-2xl"
                        onClick={() => setShowForm(true)}
                    >
                        AddItem
                    </button>
                </div>

                <div className="px-4 py-2 sm:px-16 sm:py-4 flex text-gray-700 bg-gray-200 overflow-x-auto">
                    {showForm ? (
                        <div className="w-full sm:w-auto">
                            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                    Name
                                </label>
                                <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="name" id="name" onChange={(e) => setName(e.target.value)} />

                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                    Image
                                </label>
                                <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="name" id="name" onChange={(e) => setImage(e.target.value)} />
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Price
                                </label>
                                <input type="number" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />

                                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Description
                                </label>
                                <textarea className="text-black border border-gray-300 rounded-md p-1 mb-2" name="desc" id="desc" onChange={(e) => setDesc(e.target.value)}></textarea>

                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Category
                                </label>
                                <select className="text-black border border-gray-300 rounded-md p-1 mb-2" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                </select>

                                <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Rating
                                </label>
                                <input type="number" step="0.1" min="0" max="5" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="rating" id="rating" onChange={(e) => setRating(e.target.value)} />

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
                                >
                                    Add item
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="w-full sm:w-auto" style={{ width: '-webkit-fill-available' }}>
                            <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className='p-2'>ID</th>
                                        <th className='p-2'>Item</th>
                                        <th className='p-2'>Category</th>
                                        <th className='p-2'>Rating</th>
                                        <th className='p-2'>Price</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {foodItems.map((each,index) => (
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={each.id}>
                                            <td className='p-2'>{index+1}</td>
                                            <td className='p-2'>{each.name}</td>
                                            <td className='p-2'>{each.category}</td>
                                            <td className='p-2'>{each.rating}</td>
                                            <td className='p-2'>{each.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodItems;
