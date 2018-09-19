import React, { Component } from 'react';

class MyBook extends Component {
	render() {
		return (
			<div className="book">
			  <div className="book-top">
			    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}"` }}></div> {/* Populate the book list item with the book cover image */}
			    <div className="book-shelf-changer">
			      <select>
			        <option value="move" disabled>Move to...</option>
			        <option value="currentlyReading">Currently Reading</option>
			        <option value="wantToRead">Want to Read</option>
			        <option value="read">Read</option>
			        <option value="none">None</option>
			      </select>
			    </div>
			  </div>
			  <div className="book-title">{this.props.book.title}</div> {/* Populate the book list item with the props for the book title data */}
			  <div className="book-authors">{this.props.book.authors}</div> {/* Populate the book list item with the the props for the book author or authors */}
			</div>
		);
	}
}


export default MyBook;