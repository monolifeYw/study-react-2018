/** 
* 1. 어디서 비디오 리스트를 가져오고, 어떤 컴포넌트가 실제로 이 정보를 복사할 권리를 갖는 지
*/


'use strict';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyCondW_bBdQdZDyLdxvHcgWfmWeGxfKJ7g';

/*
- factory 형태의 함수
- 인스턴스가 아닌 클래스 
- 실제 DOM 에 렌더링되는 컴포넌트의 인스턴스를 만듬
- 함수형 컴포넌트

const App = () => {
  return <div>test</div>;
}

*/

/*
함수형 컴포넌트
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};
*/

// 함수형 컴포넌트를 클래스 기반 컴포넌트로 Refactoring
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      console.log('return datas', videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          // callback
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}


// DOM 에 렌더링 하기 전에 컴포넌트를 인스턴스 화 하여야 함 
//ReactDom.render(App, document.querySelector('.container'));
ReactDom.render(<App />, document.querySelector('.container'));