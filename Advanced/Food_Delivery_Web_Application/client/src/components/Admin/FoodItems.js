import React, { useEffect, useState } from 'react';
import { fetchItems } from '../../redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SideBar from './SideBar';
import { MdDeleteForever } from 'react-icons/md';
import { NavLink, useParams } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import UpdateFoodItems from './UpdateFoodItems';

const FoodItems = () => {
    const [text, setText] = useState({
        name: '',
        image: '',
        price: '',
        desc: '',
        category: '',
        rating: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [selectedItem, setSelectedItem] = useState([]);

    const foodItems = useSelector((state) => state.itemsList);
    const dispatch = useDispatch();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    // Add Food items
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:6005/fooditems', {
            id: foodItems.length + 1,
            img: text.image,
            name: text.name,
            price: text.price,
            desc: text.desc,
            category: text.category,
            rating: text.rating
        }).then(response => {
            dispatch(fetchItems())
            setShowForm(false);
            console.log(response);
        }).catch((err) => console.log(err));
    };

    const onChangeFunct = (e) => {
        setText({ ...text, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    // Delete selected fooditem
    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:6005/fooditems/${id}`);
            dispatch(fetchItems());
        } catch (error) {
            console.error('Axios Error:', error);
            // Handle the error gracefully (e.g., show an error message to the user)
        }
    }
    // Update
    const handleEditClick = (item) => {
        console.log("Clicked item:", item);
        setSelectedItem(item); // Set the selected item when edit button is clicked
    }
    console.log(selectedItem)


    return (
        <div className="flex flex-row text-white">
            <SideBar />
            <div className="w-fill sm:w-3/4" style={{ width: '-webkit-fill-available' }}>
                <div className="bg-gray-900 border-l-white border-2 text-end">
                    <button
                        className="btn p-2 m-4 bg-white text-2xl"
                        onClick={() => setShowForm(true)}
                    >
                        AddItem
                    </button>
                </div>

                <div className="px-4 py-2 sm:px-16 sm:py-4 flex text-gray-700 bg-gray-200 overflow-x-auto">
                    {showForm ? (
                        <div className="w-full sm:w-auto flex bg-slate-200  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-auto">
                            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">CREATE</h2>

                            <form onSubmit={handleSubmit} className="flex flex-col items-center  border-red-200 border-2 p-4">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                    Name
                                </label>
                                <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="name" id="name" value={text.name} onChange={onChangeFunct} />

                                <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
                                    Image
                                </label>
                                <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="image" id="image" value={text.image} onChange={onChangeFunct} />
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Price
                                </label>
                                <input type="number" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="price" id="price" onChange={onChangeFunct} />

                                <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Description
                                </label>
                                <textarea className="text-black border border-gray-300 rounded-md p-1 mb-2" name="desc" id="desc" onChange={onChangeFunct}></textarea>

                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Category
                                </label>
                                <select className="text-black border border-gray-300 rounded-md p-1 mb-2" name="category" id="category" onChange={onChangeFunct}>
                                    <option>--Select--</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                </select>

                                <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                    Rating
                                </label>
                                <input type="number" step="0.1" min="0" max="5" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="rating" id="rating" onChange={onChangeFunct} />

                                {/* Add other input fields similarly */}

                                <button
                                    type="submit"
                                    className="w-40 bg-orange-600 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
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
                                        <th className='p-2'>Rate</th>
                                        <th className='p-2'>Price</th>
                                        <th className='p-2'>Edit</th>
                                        <th className='p-2'>Remove</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {foodItems.map((each, index) => (
                                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={each.id}>
                                            <td className='p-2'>{index + 1}</td>
                                            {/* <td className='p-2'>{each.id}</td> */}
                                            <td className='p-2'>{each.name}</td>
                                            <td className='p-2'>{each.category}</td>
                                            <td className='p-2'>{each.rating}</td>
                                            <td className='p-2'>{each.price}</td>
                                            <td className='p-2'>
                                                <button className="btn-close text-2xl text-orange-600" onClick={() => handleEditClick(each)}>
                                                    <NavLink to={{
                                                        pathname: `/editItems/${each.id}`
                                                    }}>
                                                        <FaEdit />
                                                    </NavLink>
                                                </button>

                                            </td>
                                            <td className='p-2'>
                                                <button className="btn-close text-2xl items-center text-orange-600" onClick={() => deleteItem(each._id)} ><MdDeleteForever /></button>
                                            </td>
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


// const FoodItems = () => {
//     const [name, setName] = useState('');
//     const [image, setImage] = useState('');
//     const [price, setPrice] = useState('');
//     const [desc, setDesc] = useState('');
//     const [category, setCategory] = useState('');
//     const [rating, setRating] = useState('');
//     const [showForm, setShowForm] = useState(false);

//     const foodItems = useSelector((state) => state.itemsList);
//     const dispatch = useDispatch();

//     axios.defaults.withCredentials = true;

//     useEffect(() => {
//         dispatch(fetchItems());
//     }, []);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:6005/fooditems', {
//             id: foodItems.length + 1,
//             img: image,
//             name: name,
//             price: price,
//             desc: desc,
//             category: category,
//             rating: rating,
//         }).then(response => {
//             setShowForm(false);
//             console.log(response);
//         }).catch((err) => console.log(err));
//     };

//     return (
//         <div className="flex flex-row text-white">
//             <SideBar />
//             <div className="w-fill sm:w-3/4" style={{ width: '-webkit-fill-available' }}>
//                 <div className="bg-gray-900 border-l-white border-2 text-end">
//                     <button
//                         className=" btn p-2 m-4 bg-white text-2xl"
//                         onClick={() => setShowForm(true)}
//                     >
//                         AddItem
//                     </button>
//                 </div>

//                 <div className="px-4 py-2 sm:px-16 sm:py-4 flex text-gray-700 bg-gray-200 overflow-x-auto">
//                     {showForm ? (
//                         <div className="w-full sm:w-auto">
//                             <form onSubmit={handleSubmit} className="flex flex-col items-center">
//                                 <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
//                                     Name
//                                 </label>
//                                 <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="name" id="name" onChange={(e) => setName(e.target.value)} />

//                                 <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
//                                     Image
//                                 </label>
//                                 <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="name" id="name" onChange={(e) => setImage(e.target.value)} />
//                                 <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
//                                     Price
//                                 </label>
//                                 <input type="number" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="price" id="price" onChange={(e) => setPrice(e.target.value)} />

//                                 <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
//                                     Description
//                                 </label>
//                                 <textarea className="text-black border border-gray-300 rounded-md p-1 mb-2" name="desc" id="desc" onChange={(e) => setDesc(e.target.value)}></textarea>

//                                 <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
//                                     Category
//                                 </label>
//                                 <select className="text-black border border-gray-300 rounded-md p-1 mb-2" name="category" id="category" onChange={(e) => setCategory(e.target.value)}>
//                                     <option value="breakfast">Breakfast</option>
//                                     <option value="lunch">Lunch</option>
//                                     <option value="dinner">Dinner</option>
//                                 </select>

//                                 <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
//                                     Rating
//                                 </label>
//                                 <input type="number" step="0.1" min="0" max="5" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="rating" id="rating" onChange={(e) => setRating(e.target.value)} />

//                                 <button
//                                     type="submit"
//                                     className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
//                                 >
//                                     Add item
//                                 </button>
//                             </form>
//                         </div>
//                     ) : (
//                         <div className="w-full sm:w-auto" style={{ width: '-webkit-fill-available' }}>
//                             <table className="w-full text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                                 <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                                     <tr>
//                                         <th className='p-2'>ID</th>
//                                         <th className='p-2'>Item</th>
//                                         <th className='p-2'>Category</th>
//                                         <th className='p-2'>Rate</th>
//                                         <th className='p-2'>Price</th>
//                                         <th className='p-2'>Remove</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody className="divide-y divide-gray-200">
//                                     {foodItems.map((each, index) => (
//                                         <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={each.id}>
//                                             <td className='p-2'>{index + 1}</td>
//                                             <td className='p-2'>{each.name}</td>
//                                             <td className='p-2'>{each.category}</td>
//                                             <td className='p-2'>{each.rating}</td>
//                                             <td className='p-2'>{each.price}</td>
//                                             <td className='p-2'>
//                                                 <button className="btn-close text-2xl text-orange-600" ><MdDeleteForever /></button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodItems;
