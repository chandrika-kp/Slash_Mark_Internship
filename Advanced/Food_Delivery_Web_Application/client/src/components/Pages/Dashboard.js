import React, { useEffect } from 'react'
import img from '../../asset/food_logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { userDetails as fetchUserDetails } from '../../redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';

const Dashboard = () => {

  const dispatch = useDispatch();

  // const location = useLocation();
  // const username = location.state ? location.state.username : null;
  // console.log("Location state:", location.state);

  const userDetails = useSelector((state) => state.userdata);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  useEffect(() => {
    dispatch(fetchUserDetails());
    axios.get('http://localhost:6005/auth/verify')
      .then(res => {
        console.log(res)
        if (!res.data.status) {
          navigate('/');
        }
      })
      .catch(error => {
        console.error('Error verifying user:', error);
        navigate('/');
      });
  }, []);

  // console.log(userDetails);


  return (
    <>
      {<Header username={userDetails ? userDetails : ''} />}
      <div className="container mx-auto">
        {/* <p className='text-black'>Welcome to the website, {username}!</p> */}
        <img src={img} alt="Food Logo" />
      </div>
    </>

  )
}

export default Dashboard