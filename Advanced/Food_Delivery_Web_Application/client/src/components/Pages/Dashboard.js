import React, { useEffect } from 'react'
import pastha from '../../asset/pastha.png'
import steak from '../../asset/steak.png'
import salad from '../../asset/salad.png'
import Noodels from '../../asset/Noodels.png'
import d1 from '../../asset/d1.png'
import d2 from '../../asset/d2.jpg'
import d3 from '../../asset/d3.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { userDetails as fetchUserDetails } from '../../redux/Actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

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
      {/* <div className="container mx-auto"> */}
      {/* <p className='text-black'>Welcome to the website, {username}!</p> */}
      {/* <img src={img} alt="Food Logo" />
      </div> */}
      <div className='m-2 p-2'>
        <hr className='text-gray-600 ' />

        <div className="flex flex-col bg-white m-auto p-auto">
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
            What's on your mind?
          </h1>
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar mx-5">
            <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={steak} alt='steak' />
                  <p className="text-lg text-center font-bold">Steak</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={pastha} />
                  <p className="text-lg text-center font-bold">Pastha</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={Noodels} />
                  <p className="text-lg text-center font-bold">Noodles</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={salad} />
                  <p className="text-lg text-center font-bold">Salad</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={steak} />
                  <p className="text-lg text-center font-bold">Steak</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={pastha} />
                  <p className="text-lg text-center font-bold">Pastha</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={Noodels} />
                  <p className="text-lg text-center font-bold">Noodels</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={salad} />
                  <p className="text-lg text-center font-bold">Salad</p>
                </div>
              </div>
              <div className="inline-block px-3 mx-6">
                <div className="w-36 h-40 max-w-xs overflow-hidden rounded-lg ">
                  <img className="object-cover w-32 h-32 rounded-full shadow" src={pastha} />
                  <p className="text-lg text-center font-bold">Pastha</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <hr className='text-gray-600 ' />

        <div>
          <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 mx-5 font-bold text-4xl text-gray-800">
            Top offer's in chandu's food
          </h1>
          <div className='flex overflow-x-scroll hide-scroll-bar p-3 m-3'>

            <div className="inline-block px-3 mx-6">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img className="w-64 h-64" src={d1} alt="" />
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img className="w-64 h-64" src={d2} alt="" />

              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img className="w-64 h-64" src={d3} alt="" />
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img className="w-64 h-64" src={d1} alt="" />

              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img className="w-64 h-64" src={d2} alt="" />
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img className="w-64 h-64" src={d3} alt="" />
              </div>
            </div>
          </div>

        </div>
        {/* 
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-x-auto whitespace-nowrap">

        <div>
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Oliver Aguilerra</p>
            <p className="mb-4 text-xs text-gray-800">Product Manager</p>

          </div>
        </div>
        <div>
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Marta Clermont</p>
            <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>

          </div>
        </div>
        <div>
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Alice Melbourne</p>
            <p className="mb-4 text-xs text-gray-800">Human Resources</p>

          </div>
        </div>
        <div>
          <img
            className="object-cover w-24 h-24 rounded-full shadow"
            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col justify-center mt-2">
            <p className="text-lg font-bold">Martin Garix Potter</p>
            <p className="mb-4 text-xs text-gray-800">Good guy</p>

          </div>
        </div>
      </div> */}

        <div className="mb-16">

          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                      <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a className="mx-5"><FaLinkedin /></a>
                        <a className="mx-5"><FaGithub /></a>
                        <a className="mx-5"><FaInstagram /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                      <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a className="mx-5"><FaLinkedin /></a>
                        <a className="mx-5"><FaGithub /></a>
                        <a className="mx-5"><FaInstagram /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                      <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a className="mx-5"><FaLinkedin /></a>
                        <a className="mx-5"><FaGithub /></a>
                        <a className="mx-5"><FaInstagram /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

    </>

  )
}

export default Dashboard