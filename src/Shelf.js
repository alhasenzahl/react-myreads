import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {this.props.books.filter(book => book.shelf === this.props.id).map(book =>(
                    <li key={book.id}>
                        <Book 
                            book={ book }
                            updateShelf={ this.props.updateShelf }
                            currentShelf={ this.props.id }
                        />
                    </li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;