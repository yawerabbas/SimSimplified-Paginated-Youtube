# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### create-react-app [project directory]
## Project Demo
[Video Link](https://drive.google.com/file/d/1RXJS63y3aEt4ksrN5wJi2V0wXVQXiFlg/view?usp=sharing)
## Install Dependencies
### `npm install tailwindcss postcss autoprefixer@^9.8.6`
### `npm i @tailwindcss/line-clamp axios js-abbreviation-number react-player moment`
### `npm i react-router-dom react-icons`
### `npm i react-paginate`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.


## Api Used- Custom Api 
### curl --location --request GET 'https://internship-service.onrender.com/videos?page=0'
`page` starts with 0 and you should call the API with incremented values for Pagination.

## Deployment on Netlify
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
