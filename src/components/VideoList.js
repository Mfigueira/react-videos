import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => (
    <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video}
    />
  ));

  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;
