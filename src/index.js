import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'; 
const API_KEY = 'AIzaSyBzVVlu4cUX88aoJWs0Pi9TfCvfOMRMNxs';



class App extends Component {
  constructor(props) {
    super(props);

// initial state
    this.state = { 
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('');
  }
  videoSearch (term){
    YouTubeSearch({key:API_KEY, term: term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0] 
        });
    });
  }

  render() {
    // throttle search function with Lodash
    const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    return (
      <div> 
      <h1 className="app_header">Mini Youtube App</h1>
        <SearchBar onSearchTermChange={videoSearch} />
        
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} /> 
          <VideoDetail video={this.state.selectedVideo}/>
      </div>
    );
  }
} 

ReactDOM.render(<App />,document.querySelector('.container'));

module.hot.accept();