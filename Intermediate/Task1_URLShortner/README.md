# URL Shortener

A simple URL shortener service built with Node.js, Express, and MongoDB.

## Overview

URL shorteners are tools that take long URLs and convert them into shorter, more manageable links. This project provides a web application where users can input long URLs and receive shortened versions that redirect to the original URL when visited.

## Features

- Shorten long URLs into compact, easy-to-share links
- View a list of all shortened URLs along with the original URLs and the number of clicks
- Click on shortened links to be redirected to the original URLs
- Simple and intuitive user interface
- Secure and efficient URL generation and redirection

## Installation

1. Clone the repository:
   https://github.com/chandrika-kp/Slash_Mark_Internship.git

   Navigate to the project directory.

   cd Intermediate/Task1_URLShortner

2. Install dependencies:

   `npm install`

3. Connect MongoDB
    `mongodb://localhost/urlShortner`

4. Start the server:
    `npm run dev`

5. Access the application in your web browser at `http://localhost:5000`.

## Usage

1. Enter a long URL in the input field on the homepage.
2. Click the "Shrink" button to generate a shortened URL.
3. Copy the shortened URL and share it with others.
4. Visit the shortened URL to be redirected to the original URL.

## Technologies Used

- Node.js
- Express
- MongoDB
- EJS (Embedded JavaScript) templating engine
- Bootstrap for styling

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with y
