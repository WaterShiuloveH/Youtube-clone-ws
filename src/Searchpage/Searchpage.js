import React from "react";
import "./Searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import myHead from "./Group-1.svg";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import Scene2 from "./scenery1.jpeg";

const Searchpage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        description="Let's gonna be powerful!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        noOfVideos={300}
        verified
        subs="100K"
        channel="Water Shiu"
        image={myHead}
      />
      <hr />
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />{" "}
      <VideoRow
        description="YoHoHo"
        subs="300K"
        timestamp="3 days ago"
        views="2M views"
        title="Let's take our Journey!"
        channel="Water Shiu"
        image={Scene2}
      />
    </div>
  );
};

export default Searchpage;
