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
      <form class="form-inline active-cyan-3 active-cyan-4 search_form_pad">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input class="form-control form-control-sm ml-3 w-75 left-pad-search" type="text" placeholder="Search for youtube videos" aria-label="Search" onChange={(event) => this.onInputChange(event.target.value) } />
      </form>
    );
  }
  onInputChange(term) {
      this.setState({term});
       this.props.onSearchTermChange(term);
  }
}

export default SearchBar;