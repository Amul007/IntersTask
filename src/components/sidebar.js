import React from 'react'
import './sidebar.css';
const Sidebar = () => {
  return (
    <div className="sideBarContainer">
        <div className="title">SideBar</div>
        <div className="SideBarItems">
            <span></span>
            <p>Dashboard.</p>
            <p>Shortcuts.</p>
            <p>Overview.</p>
            <p>Profile.</p>
            <p>Settings.</p>
        </div>
    </div>
  )
}

export default Sidebar