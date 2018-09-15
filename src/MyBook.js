import React, { Component } from 'react'; //connecting MyBook component via react

class MyBook extends Component {
	render() {
		return (
			<div className="book"> {/* copied from original App.js file */}
			  <div className="book-top">
			    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: '' }}></div>
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
			  <div className="book-title"></div>
			  <div className="book-authors"></div>
			</div>
		);
	}
}


export default MyBook;