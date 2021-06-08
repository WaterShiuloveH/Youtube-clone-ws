import React from "react";
import "./Videopage.css";
import VideoCard from "./VideoCard";
import Scene from "./scenery3.jpeg";

const Videopage = () => {
  return (
    <div className="videopage">
      <h2>Recommended</h2>
      <div className="videopage_videos">
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
        <VideoCard
          className="videopage"
          timestamp="3 days ago"
          views="2M views"
          title="Let's take our Journey!"
          channel="Water Shiu"
          image={Scene}
        />
      </div>
    </div>
  );
};

export default Videopage;
