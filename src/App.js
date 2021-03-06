import React from 'react'
import { Route } from 'react-router-dom'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    updateState() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(this.updateState())
    }
    render() {
        const shelf = [
            {
                name: 'Currently Reading',
                id: 'currentlyReading',
                key: 1
            },
            {
                name: 'Want To Read',
                id: 'wantToRead',
                key: 2
            },
            {
                name: 'Read',
                id: 'read',
                key: 3
            }
        ]
        return (
            <div className="app">
                 <Route exact path='/' render={() => (
                    <MainPage 
                        shelf={shelf}
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                    />
                )}/>
                <Route path='/search' render={() => (
                    <SearchPage 
                        books={this.state.books}
                        updateShelf={this.updateShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp;
