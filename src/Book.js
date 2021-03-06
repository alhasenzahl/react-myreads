import React, { Component } from 'react'

class Book extends Component {
    render() {
        let bookImage = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : 'http://via.placeholder.com/128x192?text=No%20Cover'
        return(
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${ bookImage }")` }}></div>
                    <div className="book-shelf-changer">
                        <select
                            onChange={ (event) => this.props.updateShelf(this.props.book, event.target.value) }
                            value={ this.props.currentShelf }
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book;