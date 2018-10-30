import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>My furst React Komponent!!</div>;

ReactDOM.render(<App />,document.querySelector('.container'));

module.hot.accept();