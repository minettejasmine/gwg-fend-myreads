import React, { Component } from 'react'; /* connecting MainPage component via react */
import MyBook from './MyBook'; /* connecting MyBook component to the Main Page */

class MainPage extends Component {
	render() {
		return (
			  <div className="list-books"> {/* copied from original App.js file */}
			    <div className="list-books-title">
			      <h1>MyReads</h1>
			    </div>
			    <div className="list-books-content">
			      <div>
			        <div className="bookshelf">
			          <h2 className="bookshelf-title">Currently Reading</h2>
			          <div className="bookshelf-books">
			            <ol className="books-grid">
			              <li>
							<MyBook />
			              </li>
			            </ol>
			          </div>
			        </div>
			        <div className="bookshelf">
			          <h2 className="bookshelf-title">Want to Read</h2>
			          <div className="bookshelf-books">
			            <ol className="books-grid">
			              <li>
							<MyBook />
			              </li>

			            </ol>
			          </div>
			        </div>
			        <div className="bookshelf">
			          <h2 className="bookshelf-title">Read</h2>
			          <div className="bookshelf-books">
			            <ol className="books-grid">
			              <li>
							<MyBook />
			              </li>

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