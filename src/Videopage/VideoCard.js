import React from "react";
import myHead from '../Header/Group-1.svg'
import './VideoCard.css'

const VideoCard = ({ image, title, channel, views, timestamp }) => {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="video_thumbnail"/>
      <div className="video_info">
          <img src={myHead} alt={channel} className="video_maker" />
          <div className="video_text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views}。{timestamp}</p>
          </div>
      </div>
    </div>
  );
};

export default VideoCard;
