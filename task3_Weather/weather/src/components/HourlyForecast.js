// HourlyForecast.js
import React from 'react';

const HourlyForecast = ({ hourForecast, getDay, weatherImageMapping, city }) => (
    <div>
        <h2 className='font-bold text-orange-500 underline pt-6 mt-6 mb-2 text-4xl justify-center'>Hourly Forecast</h2>
        <p>Weather Details For Every 3 Hours</p>
        <h3 className='text-yellow-400 text-2xl'>{city.toUpperCase()}</h3>
        <div className='flex flex-row justify-between p-3 m-6'>
            {/* Render hourly forecast data */}
            {hourForecast.map((item, index) => (
                <div className='flex flex-col justify-center hover:border-2 solid p-2 m-1' key={index}>
                    <p className='text-purple-800 font-bold text-xl'>{getDay(item.dt)}</p>
                    <p>{item.dt_txt.split(' ')[0].slice(5).replace('-', '/')}</p>
                    <p>{item.dt_txt.split(' ')[1].slice(0, -3)}</p>
                    {weatherImageMapping[item.weather[0].description.toLowerCase()] && (
                        <img
                            className="w-12 h-10"
                            src={weatherImageMapping[item.weather[0].description.toLowerCase()]}
                            alt={item.weather[0].description}
                        />
                    )}
                    <p>{item.main.temp}°C</p>
                    <p>{item.weather[0].description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default HourlyForecast;
