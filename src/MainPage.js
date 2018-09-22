import React, { Component } from 'react';
import MyBook from './MyBook';

class MainPage extends Component {
	render() {
		/* console.log(this.props.books); Tested whether the array of books would be created for the Main Page and respective data would appear in the Console */
		console.log(this.props.books);
		return (
		  <div className="list-books">
		    <div className="list-books-title">
		      <h1>MyReads</h1>
		    </div>
		    <div className="list-books-content">
		      <div>
		        <div className="bookshelf">
		          <h2 className="bookshelf-title">Currently Reading</h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid"> {/* using the array of fetched books, filter the books to create another array of those books identified as Currently Reading; use map method on the array and populate the Currently Reading shelf; created a unique key identifier for the book element for DOM; use array from map method to populate item with book props for image and title and author */}
			            {
			            	this.props.books
			            	.filter(book => book.shelf === 'currentlyReading')
							.map(book => (
				              <li key={book.id}>
								<MyBook
									book={book}
									changeShelf={this.props.changeShelf}
									defaultShelf="currentlyReading"
								/> {/* Requirement: set to default shelf of current shelf location on drop down list to allow for movement to any other shelf */}
				              </li>
							))
			            }
		            </ol>
		          </div>
		        </div>
		        <div className="bookshelf">
		          <h2 className="bookshelf-title">Want to Read</h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid"> {/* using the array of fetched books, filter the books to create another array of those books identified as Want To Read; use map method on the array and populate the Want to Read shelf; created a unique key identifier for the book element for DOM; use array from map method to populate item with book props for image and title and author */}
                        {
                        	this.props.books
                        	.filter(book => book.shelf === 'wantToRead')
            				.map(book => (
            	              <li key={book.id}>
            					<MyBook
            						book={book}
            						changeShelf={this.props.changeShelf}
            						defaultShelf="wantToRead"
            					/> {/* Requirement: set to default shelf of current shelf location on drop down list to allow for movement to any other shelf */}
            	              </li>
            				))
                        }
		            </ol>
		          </div>
		        </div>
		        <div className="bookshelf">
		          <h2 className="bookshelf-title">Read</h2>
		          <div className="bookshelf-books">
		            <ol className="books-grid"> {/* using the array of fetched books, filter the books to create another array of those books identified as Read; use map method on the array and populate the Read shelf; created a unique key identifier for the book element for DOM; use array from map method to populate item with book props for image and title and author */}
		            	{
                        	this.props.books
                        	.filter(book => book.shelf === 'read')
            				.map(book => (
            	              <li key={book.id}>
            					<MyBook
									book={book}
									changeShelf={this.props.changeShelf}
									defaultShelf="read"
            					/> {/* Requirement: set to default shelf of current shelf location on drop down list to allow for movement to any other shelf */}
            	              </li>
            				))
                        }
		            </ol>
		          </div>
		        </div>
		      </div>
		    </div>
		    <div className="open-search">
		      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
		    </div>
		  </div>
		);
	}
}


export default MainPage;