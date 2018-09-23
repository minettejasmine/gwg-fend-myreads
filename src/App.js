import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
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

/* Requirement: move books from one shelf to another; create changeShelf method to update state of books in array; Then reset state for all books to refresh the UI */
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    /* console.log(this.state.books); Tested whether the array of books would appear in the Console */
    /* populates Main Page with current state of books in the array */
    /* Requirement: move books from one shelf to another; changeShelf method passed as props to the Main Page */
    /* populates Search Page with current state of user query results in the array */
    /* Requirement: move books from one shelf to another; changeShelf method passed as props to the Search Page */
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <MainPage
          books={this.state.books}
          changeShelf={this.changeShelf}
         />
        )}/>
        <Route exact path='/search' render={() => (
          <SearchPage
            changeShelf={this.changeShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
