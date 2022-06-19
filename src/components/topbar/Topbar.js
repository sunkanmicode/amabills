import React from 'react'
// import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import  NotificationsNoneIcon  from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";


export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo">PROPERTY MANAGER</span> */}
          {/* <SearchIcon /> */}
          <input
            className="searchInput"
            type="search"
            placeholder="search" 
          
          />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {/* <Language /> */}
            {/* <span className="topIconBadge">2</span> */}
            <p>Hi, Olayinka</p>
          </div>
          <div className="topbarIconContainer">{/* <Settings /> */}</div>
          <img
            src="/assets/profile.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
