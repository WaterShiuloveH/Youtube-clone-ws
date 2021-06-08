import React from "react";
import "./VideoRow.css";

const VideoRow = ({
  views,
  timestamp,
  title,
  channel,
  description,
  subs,
  image,
}) => {
  return (
    <div className="videoRow">
      <img className="videoRow_Img" src={image} alt="" />
      <div className="videoRow_text">
        <h3>{title}</h3>
        <p className="videoRow_headline">
          {channel}。
          <span className="videoRow_subs">
            <span className="videoRow_subsNumber">{subs} </span>
            Subscribers
          </span>
          。{views} views。{timestamp}
        </p>
        <p className="videoRow_description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
