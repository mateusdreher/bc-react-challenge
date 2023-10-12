# Giphy API GIF Search Frontend

This is a simple frontend application that allows you to search for GIFs using the Giphy API. It's built with React and designed to be easy to set up and use.

## Prerequisites

Before you can use this application, you need to obtain a Giphy API key. Here's how you can get one:

1. Visit the [Giphy Developers](https://developers.giphy.com) website.

2. Sign in or create a Giphy account.

3. Once logged in, go to your account settings and create an application. This will provide you with an API key.

4. Copy your Giphy API key for use in this application.

## Setup

1. Clone this repository to your local machine.

   ```
   git clone https://github.com/your-username/giphy-api-frontend.git
   cd giphy-api-frontend
	```

2. Create a .env file in the root of the application and put your Giphy API key in it as follows:

	```
	REACT_APP_GIPHY_API_KEY=YOUR_GIPHY_API_KEY
	```
	You can use the provided .env.example file as a template.


3. Install the project dependencies.
	
	```
	npm install
	```

## Usage

Once you have set up your Giphy API key and installed the dependencies, you can start the application by running:

	```bash
	npm start
	```


The application will start, and you can access it in your web browser at http://localhost:3000.

Enter your search query in the input field and press Enter to see GIFs related to your query.