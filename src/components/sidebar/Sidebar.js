import React from 'react'
import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ContactsIcon from "@mui/icons-material/Contacts";
import PolylineIcon from "@mui/icons-material/Polyline";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MessageIcon from "@mui/icons-material/Message";
import AddTaskIcon from "@mui/icons-material/AddTask";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebar_logo">
            <div className="logo_img">
              <img className="logo" src="/assets/logo1.png" />
            </div>
            <div className="logo_title">
              <p>360 Corporation</p>
            </div>
          </div>
          <ul className="sidebarList">
            {/* <NavLink style={activeLink} to="/home" className="link"> */}
            <li className="sidebarListItem active">
              <GridViewIcon className="sidebarIcon" />
              Dashboard
            </li>
            {/* </NavLink> */}
            <li className="sidebarListItem">
              <SettingsIcon className="sidebarIcon" />
              Settings
            </li>
            <li className="sidebarListItem">
              <ChatBubbleIcon className="sidebarIcon" />
              feeds
            </li>
            <li className="sidebarListItem">
              <FolderCopyIcon className="sidebarIcon" />
              <span>User managements</span>
            </li>
            <li className="sidebarListItem">
              <ContactsIcon className="sidebarIcon" />
              <span>Contact managements</span>
            </li>
            <li className="sidebarListItem">
              <PolylineIcon className="sidebarIcon" />
              <span>Departments</span>
            </li>
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              Schedule & Report
            </li>
            <li className="sidebarListItem">
              <DoorSlidingIcon className="sidebarIcon" />
              <span>Inventory</span>
            </li>
            <li className="sidebarListItem">
              <LocalOfferIcon className="sidebarIcon" />
              <span>Sales & Payments</span>
            </li>
            <li className="sidebarListItem">
              <LocationOnIcon className="sidebarIcon" />
              Companies
            </li>
            <li className="sidebarListItem">
              <BeenhereIcon className="sidebarIcon" />
              Requests
            </li>
            <li className="sidebarListItem">
              <MessageIcon className="sidebarIcon" />
              Messaging
            </li>
            <li className="sidebarListItem">
              <AddTaskIcon className="sidebarIcon" />
              Conferencing
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar