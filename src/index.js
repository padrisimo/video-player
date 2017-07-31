import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBRyVvYo8VFFyelcmmNPfprIZ8WxM-dbAQ';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}

ReactDOM.render(
    <App />
  , document.querySelector('.container'));
