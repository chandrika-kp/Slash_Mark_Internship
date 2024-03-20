import React, { useEffect } from 'react'
import img from '../../asset/food_logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Dashboard = () => {
  const location = useLocation();

  const username = location.state ? location.state.username : null;
  console.log("Location state:", location.state);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
      .then(res => {
        if (res.data.status) {
        } else {
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error verifying user:', error);
        // navigate('/');
      });
  }, []);

  return (
    <>
      {<Header username={username.toString()} />}
      <div className="container mx-auto">
        {/* <p className='text-black'>Welcome to the website, {username}!</p> */}
        <img src={img} alt="Food Logo" />
      </div>
    </>

  )
}

export default Dashboard