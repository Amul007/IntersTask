// Sidebar.js

import React, { useState } from 'react';
import './sidebar.css';
import menu_icon from './icons/menu.svg'
const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <div className={`toggleButton ${showSidebar ? 'hide' : ''}`} onClick={toggleSidebar}>
                <img src={menu_icon} alt="" />
            </div>
            <div className={`sideBarContainer ${showSidebar ? 'show' : ''}`}>
                <div className="title">SideBar</div>
                <div className="SideBarItems">
                    <span></span>
                    <p>Dashboard</p>
                    <p>Shortcuts</p>
                    <p>Overview</p>
                    <p>Profile</p>
                    <p>Settings</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
