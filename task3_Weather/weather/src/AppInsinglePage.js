import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import cloudImage from './assets/cloud.png';
import brokenClouds from './assets/Brokenclouds.png';
import clear from './assets/clear2.jpg';
import few from './assets/few clouds.png';
import rain from './assets/lightrains.jpg';
import strom from './assets/storm.png';
import snow from './assets/snow.png';
import mist from './assets/fog.png'
// import { FaCloudShowersHeavy, FaSun, FaMoon, FaCloud, FaCloudSun, FaCloudMoon } from 'react-icons/fa';
// import { BsClouds, BsCloudsFill } from "react-icons/bs";
function App() {
    const [city, setCity] = useState('India');
    const [hourForecast, setHourForecast] = useState([]);
    const [weatherForecast, setWeatherForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [displayHourly, setDisplayHourly] = useState(true);

    const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
    // Function to convert timestamp to day
    const getDay = (timestamp) => {
        const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
        const dayIndex = date.getDay();
        return days[dayIndex];
    };

    const weatherImageMapping = {
        'overcast clouds': cloudImage,
        "broken clouds": brokenClouds,
        "scattered clouds": few,
        "clear sky": clear,
        "few clouds": few,
        "light rain": rain,
        "shower rain": rain,
        "rain": rain,
        "snow": snow,
        "light snow": snow,
        "thunderstorm": strom,
        "mist": mist
        // Add more descriptions and corresponding image URLs as needed
    };

    // const WeatherIcon = ({ iconCode }) => {
    //   switch (iconCode) {
    //     case '10n':
    //       return <FaCloudShowersHeavy />;
    //     case '01d':
    //       return <FaSun />;
    //     case '02d':
    //       return <FaCloudSun />;
    //     case '03d':
    //       return <FaCloud />;
    //     case '04d':
    //       return < BsClouds />;
    //     case '01n':
    //       return <FaMoon />;
    //     case '02n':
    //       return <FaCloudMoon />;
    //     case '03n':
    //       return <FaCloud />;
    //     case '04n':
    //       return <BsCloudsFill />;
    //     case '09d':
    //       return <FaCloudShowersHeavy />;
    //     case '09n':
    //       return <FaCloudShowersHeavy />;
    //     // Add more cases as needed

    //     default:
    //       return null; // Return null for unknown codes
    //   }
    // };

    const handleSearch = async (e) => {
        // e.preventDefault();
        try {
            setLoading(true);
            setError('');
            if (e) {
                e.preventDefault();
            }
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
            );

            console.log(response)

            const hourlyForecast = response.data.list.filter((item, index) => index < 5);
            setHourForecast(hourlyForecast);
            console.log(hourlyForecast)

            // Extract daily forecast data (every 8th item in the list)
            const dailyForecast = response.data.list.filter((item, index) => index % 8 === 0);
            setWeatherForecast(dailyForecast);
            console.log(dailyForecast)
        } catch (error) {
            console.error('Error fetching weather forecast:', error);
            setError('Error fetching weather forecast. Please check spellings and try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        handleSearch(); // Call the fetchData function when the component mounts
    }, [city]);



    return (
        <div className='container'>
            <div className="container mx-auto max-w-screen-md mt-4 py-5 px-8 bg-gradient-to-br  text-white  from-cyan-600 to-cyan-900 h-fit shadow-xl shadow-gray-400">
                <h1 className='text-center text-5xl -z-10 py-3 my-2 font-bold '>Weather Forecast</h1>
                <form onSubmit={handleSearch}>
                    <div className="flex flex-row text-black items-center justify-center space-x-4">
                        <input
                            type="text"
                            value={city.toUpperCase()}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name"
                        />
                        <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                        <UilLocationPoint size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" />
                    </div>

                </form>

                <div className="flex justify-end space-x-4 mt-4">
                    <button
                        className={`text-white ${displayHourly ? 'bg-cyan-800' : 'bg-gray-600'
                            } px-4 py-2 rounded focus:outline-none`}
                        onClick={() => setDisplayHourly(true)}
                    >
                        Hourly
                    </button>
                    <button
                        className={`text-white ${!displayHourly ? 'bg-cyan-800' : 'bg-gray-600'
                            } px-4 py-2 rounded focus:outline-none`}
                        onClick={() => setDisplayHourly(false)}
                    >
                        Daily
                    </button>
                </div>
                <hr />
                {loading && <p>Loading...</p>}

                {error && <p className='border solid text-white m-6 p-6'>{error}</p>}


                {!error && displayHourly && hourForecast.length > 0 && (
                    <div >
                        <h2 className='font-bold text-orange-500 underline pt-6 mt-6 mb-2 text-4xl justify-center'>Hourly Forecast</h2>
                        <p>Weather Details For Every 3 Hours </p>
                        <h3 className='text-yellow-400 text-2xl'>{city.toUpperCase()}</h3>
                        <div className='flex flex-row justify-between p-3 m-6'>
                            {hourForecast.map((item, index) => (
                                <div className='flex flex-col justify-center hover:border-2 solid p-2 m-1' key={index}>
                                    {/* Display hourly forecast data */}
                                    <p className=' text-purple-800 font-bold text-xl'>{getDay(item.dt)}</p>
                                    <p>{(item.dt_txt.split(' ')[0]).slice(5).replace('-', '/')}</p>
                                    <p>{(item.dt_txt.split(' ')[1]).slice(0, -3)}</p>
                                    {weatherImageMapping[item.weather[0].description.toLowerCase()] && (
                                        <img className="w-12 h-10"
                                            src={weatherImageMapping[item.weather[0].description.toLowerCase()]}
                                            alt={item.weather[0].description}
                                        />
                                    )}
                                    <p>{item.main.temp}°C</p>
                                    <p>{item.weather[0].description}</p>

                                    {/* <p>Icon:{item.weather[0].icon}</p> */}

                                    {/* {item.weather[0].icon && (
                <WeatherIcon iconCode={item.weather[0].icon} />
              )} */}
                                </div>
                            ))}
                        </div>
                    </div>

                )}

                {!displayHourly && weatherForecast.length > 0 && (
                    <div >
                        <h2 className='font-bold text-orange-500 underline pt-6 mt-6 mb-2 text-4xl justify-center'>Hourly Forecast</h2>
                        <p>Weather Details For 5 Days </p>
                        <h3 className='text-yellow-400 text-2xl'>{city.toUpperCase()}</h3>
                        <div className='flex flex-row justify-between p-3 m-6'>
                            {/* <h2> 5-Day Forecast</h2> */}
                            {weatherForecast.map((item, index) => (
                                <div className='flex flex-col justify-center  hover:border-2 solid p-2 m-1' key={index}>
                                    <p className=' text-purple-800 font-bold text-xl'>{getDay(item.dt)}</p>
                                    <p>{(item.dt_txt.split(' ')[0]).slice(5).replace('-', '/')}</p>
                                    <p>{(item.dt_txt.split(' ')[1]).slice(0, -3)}</p>
                                    {weatherImageMapping[item.weather[0].description.toLowerCase()] && (
                                        <img className="w-12 h-10"
                                            src={weatherImageMapping[item.weather[0].description.toLowerCase()]}
                                            alt={item.weather[0].description}
                                        />
                                    )}
                                    <p>{item.main.temp}°C</p>
                                    <p>{item.weather[0].description}</p>
                                    {/* {item.weather[0].icon && (
                <WeatherIcon iconCode={item.weather[0].icon} />
              )} */}

                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default App;