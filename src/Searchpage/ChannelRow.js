import React from "react";
import "./ChannelRow.css";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const ChannelRow = ({
  image,
  channel,
  subs,
  verified,
  noOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <img className="channelRow_head" src={image} alt={channel} />
      <div className="channelRow_text">
        <h4>
          {channel} {verified && <CheckCircleOutlinedIcon />}
        </h4>
        <p>
          {subs} Subscribes 。{noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default ChannelRow;
