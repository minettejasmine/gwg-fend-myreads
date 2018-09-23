import React, { Component } from 'react';
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
			    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
			    <div className="search-books-input-wrapper">
			      {/*
			        NOTES: The search from BooksAPI is limited to a particular set of search terms.
			        You can find these search terms here:
			        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

			        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			        you don't find a specific author or title. Every search is limited by search terms.
			      */}
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