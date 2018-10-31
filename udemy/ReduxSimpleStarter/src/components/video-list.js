/* 
State 가 필요 없는 컴포넌트 
*/

import React, {Component} from 'react';
import VideoListItem from './video-list-item';

/* const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
    {props.videos.length}
    </ul>
  );
}; */

class VideoList extends Component {
  
  render() {
    const videoItems = this.props.videos.map((video) => {
      return (
        <VideoListItem 
          onVideoSelect={this.props.onVideoSelect}
          key={video.etag} 
          video={video} />
      );
    });

    return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
    );
  }
}

export default VideoList;
