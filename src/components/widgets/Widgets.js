import React from 'react'
import TakeoutDiningOutlinedIcon from "@mui/icons-material/TakeoutDiningOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

const Widgets = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="featuredMoneyContainer">
          <span className="featuredTitle">
            <p>Product</p>
            <p>3</p>
          </span>
          <TakeoutDiningOutlinedIcon className="sidebarIcon2" />
        </div>
      </div>
      <div className="featuredItem">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="featuredMoneyContainer">
          <span className="featuredTitle">
            <p>Sales</p>
            <p>N16,500.00</p>
          </span>
          <TrendingUpOutlinedIcon className="sidebarIcon2" />
        </div>
      </div>
      <div className="featuredItem">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="featuredMoneyContainer">
          <span className="featuredTitle">
            <p>Posts</p>
            <p>177</p>
          </span>
          <PostAddOutlinedIcon className="sidebarIcon2" />
        </div>
      </div>
      <div className="featuredItem">
        <div className="box1"></div>
        <div className="box2"></div>
        <div className="featuredMoneyContainer">
          <span className="featuredTitle">
            <p>Users</p>
            <p>103</p>
          </span>
          <PeopleAltOutlinedIcon className="sidebarIcon2" />
        </div>
      </div>
    </div>
  );
}

export default Widgets