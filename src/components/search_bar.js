import React, { Component } from 'react';

// class based component
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }
  render() {
    return (
    <div>
      <br></br>
      <input onChange={(event) => this.setState({ term: event.target.value}) }/>
    </div> 
    );
  }
}

export default SearchBar;