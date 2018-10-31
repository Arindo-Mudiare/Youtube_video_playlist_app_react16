import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBzVVlu4cUX88aoJWs0Pi9TfCvfOMRMNxs';
const App = () => <div> <SearchBar /> </div>;

ReactDOM.render(<App />,document.querySelector('.container'));

module.hot.accept();