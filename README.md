# My Book Corner React Project

This is my 'MyReads' React books app project for the Front End Developer Nanodegree program through Udacity.  The purpose of the project was to help introduce those of us in the program to using React.  The app's basic structure and styling was given to us and we were responsible for converting it to React and adding all of its functionality.  

## Getting Started/Dependencies

In order to view the code for this project you are going to run the following two commands in your terminal while inside the project folder.  

* installs all project dependencies - `npm install`
* starts the development server - `npm start`

The following section of this README was given to us with the initial project instructions and I think it is useful to include with my version of the project to help others understand how the server is working and is connecting to the front end of the app.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Resources

I used the folllowing resources while building this project:

Project Walkthrough with Maeva: https://www.youtube.com/watch?v=i6L2jLHV9j8
React Docs: https://reactjs.org/docs/getting-started.html
React State Webinar with Rodrick: https://drive.google.com/drive/u/0/folders/1SMvuv0-r98pVfZQA2IKToBVfXtOuD01X
