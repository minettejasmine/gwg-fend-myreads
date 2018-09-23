import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MyBook from './MyBook';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
	state = {
		query: '',
		bookSearches: []
	}
	updateQuery = (query) => {
		this.setState({ // updates the state of the query based on user input
			query: query
		})
		this.updateBookSearches(query); // calls this method to populate the bookSearches array with books that match the search
	}
	updateBookSearches = (query) => { // fetch books that match the query and populate those matching items into the bookSearches array
		if (query) {
			BooksAPI.search(query).then((bookSearches) => {
				if (bookSearches.error) { // If the user's search is in error, then the Search Page will show a blank array; no search results
					this.setState({ bookSearches: [] });
				} else {
					this.setState({ bookSearches: bookSearches });
				}
			})
		} else {
			this.setState({ bookSearches: [] }); // If user does not execute a query, then the Search Page will display the results of the bookSearches which is an empty array; If user's search does not have any matches, then the bookSearches array is empty
		}
	}
	render() {
		return (
			<div className="search-books">
			  <div className="search-books-bar">
			    <Link
					to="/"
			    	className="close-search"
			    	>Close
		    	</Link>
			    <div className="search-books-input-wrapper">
			      <input
			      	type="text"
			      	placeholder="Search by title or author"
			      	value={this.state.query}
			      	onChange={(event) => this.updateQuery(event.target.value)}
			      />
			    </div>
			  </div>
			  <div className="search-books-results">
			    <ol className="books-grid"> {/* Display the books that match the search criteria by rendering the UI */}
			    {
			    	this.state.bookSearches.map(bookSearch => (
			    		<li key={bookSearch.id}>
			    			<MyBook
			    				book={bookSearch}
			    				changeShelf={this.props.changeShelf}
		    				/>
	    				</li>
			    	))
			    }
			    </ol>
			  </div>
			</div>
		);
	}
}


export default SearchPage;