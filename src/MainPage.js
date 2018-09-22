import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Book Corner</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {Object.keys(this.props.shelf).map((shelf) => (
                            <Shelf 
                                key={this.props.shelf[shelf].key}
                                id={this.props.shelf[shelf].id}
                                name={this.props.shelf[shelf].name}
                                books={this.props.books}
                                updateShelf={this.props.updateShelf}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link 
                        to='/search'
                        >Add a book
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage;