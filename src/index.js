import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyBzVVlu4cUX88aoJWs0Pi9TfCvfOMRMNxs';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};
    YouTubeSearch({key:API_KEY, term: 'Anthony Joshua boxing'}, (videos) => this.setState({ videos }))
  }
  render() {
    return (
      <div> 
        <SearchBar />
        <VideoList videos={this.state.videos} /> 
      </div>
    );
  }
} 

ReactDOM.render(<App />,document.querySelector('.container'));

module.hot.accept();