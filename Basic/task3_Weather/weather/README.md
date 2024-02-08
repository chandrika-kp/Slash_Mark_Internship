
# Weather Forecast App

This is a simple weather forecast web application built with React.js. It provides users with hourly and daily weather forecasts for a specific city.

## Features

- **Hourly Forecast**: View weather details for every 3 hours.
- **Daily Forecast**: View weather details for 5 days.
- **Search**: Search for weather forecasts by city name.
- **Responsive Design**: The app is responsive and works well on different screen sizes.

## Technologies Used

1) React.js

    # Getting Started with Create React App
    
    This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
    
    ## Available Scripts
    
    In the project directory, you can run:
    
    ### `npm start`
    
    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
    
2) Axios for HTTP requests

    # Install axios for get request in this app
     
    ###  `npm install axios`

3) OpenWeatherMap API for weather data

    After signin in this website https://openweathermap.org/ , we got API.

    Create a `.env` file in the root directory and add your OpenWeatherMap API key.

    REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key

4) Tailwind CSS for styling

    Please check https://tailwindcss.com/docs/installation for steps to follow


## Getting Started

To run this app locally, follow these steps:

1. Clone this repository to your local machine.

git clone https://github.com/chandrika-kp/Slash_Mark_Internship.git

2. Navigate to the project directory.

cd Basic/task3_Weather/weather

3. Install dependencies using npm or yarn.

npm install

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key.

REACT_APP_OPENWEATHERMAP_API_KEY=your-api-key

5. Start the development server.

npm start

6. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- Enter a city name in the search input field and press Enter or click the search button.
- Toggle between hourly and daily forecasts using the buttons at the top.
- View weather details such as temperature, description, and weather icons.

## Credits

- Icons from [Unicons](https://iconscout.com/unicons) and [OpenWeatherMap](https://openweathermap.org/weather-conditions).

## Extra

If you want to display images based on icons of the obtained data ..see mostly comments of the file `./src/APPInsinglePage.js` 

In that, I used Icons from https://react-icons.github.io/react-icons/ 
