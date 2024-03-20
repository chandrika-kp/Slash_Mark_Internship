import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/Actions/action';

const Menu = () => {
    
    const dispatch = useDispatch();
    const foodItems = useSelector((state) => state.itemsList);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    // Function to get unique categories from food items
    const getUniqueCategories = (items) => {
        const categories = items.map(item => item.category);
        return [...new Set(categories)];
    };

    return (
        <>
            <div className="container">
                <div className='sideBlock'>
                    <h3 className='text-center'>Filter</h3>
                    <p>Select Category:</p>
                    <select style={{ width: '85%' }} onChange={e => setSelectedCategory(e.target.value)}>
                        <option value="">All</option>
                        {/* Map over unique categories */}
                        {getUniqueCategories(foodItems).map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h1 className='"sr-only"'>Menu</h1>
                    {foodItems.length === 0 ? (
                        <p className='NoMatch text-center fs-3 m-1'>No items found</p>
                    ) : (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {foodItems.map((item) => {
                                if (selectedCategory === "" || item.category === selectedCategory) {
                                    return (
                                        <a key={item.id} className="group">
                                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                                <img className='h-30 w-auto object-cover object-center group-hover:opacity-75' src={item.img} alt={item.name} />
                                            </div>
                                            <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                                            <p>{item.desc}</p>
                                            <p className="mt-1 text-lg font-medium text-gray-900">Price: ${item.price}</p>
                                            {/* Render other details of the item */}
                                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                                Add to cart</button>
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