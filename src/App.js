import React from 'react';
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
  render() {
    /* console.log(this.state.books); Tested whether the array of books would appear in the Console */
    return (
      <div className="app">
        <MainPage
          books={this.state.books}
          /* populates Main Page with current state of books in the array */
        />
      </div>
    )
  }
}

export default BooksApp
