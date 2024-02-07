import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import cloudImage from './assets/cloud.png';
import brokenClouds from './assets/Brokenclouds.png';
import clear from './assets/clear2.jpg';
import few from './assets/few clouds.png';
import rain from './assets/lightrains.jpg';
import strom from './assets/storm.png';
import snow from './assets/snow.png';
import mist from './assets/fog.png';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

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
    const date = new Date(timestamp * 1000);
    const dayIndex = date.getDay();
    return days[dayIndex];
  };

  const weatherImageMapping = {
    'overcast clouds': cloudImage,
    'broken clouds': brokenClouds,
    'scattered clouds': few,
    'clear sky': clear,
    'few clouds': few,
    'light rain': rain,
    'shower rain': rain,
    "rain": rain,
    "snow": snow,
    "light snow": snow,
    "thunderstorm": strom,
    "mist": mist
  };

  const handleSearch = async (e) => {
    try {
      setLoading(true);
      setError('');
      if (e) {
        e.preventDefault();
      }
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
      );
      // console.log(response)

      const hourlyForecast = response.data.list.filter((item, index) => index < 5);
      setHourForecast(hourlyForecast);
      // console.log(hourlyForecast)

      // Extract daily forecast data (every 8th item in the list)
      const dailyForecast = response.data.list.filter((item, index) => index % 8 === 0);
      setWeatherForecast(dailyForecast);
      // console.log(dailyForecast)

    } catch (error) {
      // console.error('Error fetching weather forecast:', error);
      setError('Error fetching weather forecast. Please check spellings and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [city]);

  return (
    <div className='container'>
      <div className="container mx-auto max-w-screen-md mt-4 py-5 px-8 bg-gradient-to-br text-white from-cyan-600 to-cyan-900 h-fit shadow-xl shadow-gray-400">
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
          <HourlyForecast
            hourForecast={hourForecast}
            getDay={getDay}
            weatherImageMapping={weatherImageMapping}
            city={city}
          />
        )}

        {!displayHourly && weatherForecast.length > 0 && (
          <DailyForecast
            weatherForecast={weatherForecast}
            getDay={getDay}
            weatherImageMapping={weatherImageMapping}
            city={city}
          />
        )}
      </div>
    </div>
  );
}

export default App;