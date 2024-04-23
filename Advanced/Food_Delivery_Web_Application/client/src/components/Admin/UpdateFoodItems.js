import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchItems } from '../../redux/Actions/action';

const UpdateFoodItems = ({ selectedItem }) => {
  const { id } = useParams();

  const [text, setText] = useState({
    name: '',
    img: '',
    price: '',
    desc: '',
    category: '',
    rating: ''
  });

  const onChangeFunct = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    onLoadUpdate();
  }, []);

  const onLoadUpdate = async () => {
    const itemDetails = await axios.get('http://localhost:6005/fooditems/' + id)
    setText(itemDetails.data)
    console.log(itemDetails.data)
  };

  const onsubmitUpdate = async (e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:6005/foodItems/${id}`, text);
    navigate('/fooditems')
  };

  return (
    <div className="flex bg-slate-200  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-auto">
      <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">UPDATE</h2>
      <form onSubmit={e => onsubmitUpdate(e)} className="flex flex-col items-center border-red-200 border-2 p-4">
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
          Name
        </label>
        <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="name" id="name" value={text.name} onChange={onChangeFunct} />

        <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900 mb-1">
          Image
        </label>
        <input type="text" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="image" id="image" value={text.img} onChange={onChangeFunct} />
        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          Price
        </label>
        <input type="number" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="price" id="price" value={text.price} onChange={onChangeFunct} />

        <label htmlFor="desc" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          Description
        </label>
        <textarea className="text-black border border-gray-300 rounded-md p-1 mb-2" name="desc" id="desc" value={text.desc} onChange={onChangeFunct}></textarea>

        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          Category
        </label>
        <select className="text-black border border-gray-300 rounded-md p-1 mb-2" name="category" id="category" value={text.category} onChange={onChangeFunct}>
          {/* <option>--Select--</option> */}
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
          Rating
        </label>
        <input type="number" step="0.1" min="0" max="5" className="text-black border border-gray-300 rounded-md p-1 mb-2" name="rating" id="rating" value={text.rating} onChange={onChangeFunct} />

        {/* Add other input fields similarly */}

        <button
          type="submit"
          className="w-40 bg-orange-600 text-white font-semibold py-2 rounded-md shadow-sm hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 "
        >
          Update
        </button>
      </form>
    </div>
  );
};


export default UpdateFoodItems