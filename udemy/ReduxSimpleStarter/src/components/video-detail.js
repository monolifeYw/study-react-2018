import React from 'react';

const VideoDetail = ({video}) => {

  // 초반 값이 undefined 대비, Loading bar
  if (!video) {
    return <div>Loading...</div>;
  }

  const {snippet, id} = video;
  const videoUrl = `https://www.youtube.com/embed/${id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive" src={videoUrl}></iframe>
      </div>
      <div className="details ">
        <div>{snippet.title}</div>
        <div>{snippet.description}</div> 
      </div>
    </div>
  );
};

export default VideoDetail;