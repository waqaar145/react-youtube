import React from 'react'
import ReactDom from 'react-dom'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCyPk3OiQex5m__CGvypmS6Ygm12bTNvkM';


// This is component to generate some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('.container'));
