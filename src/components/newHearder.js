import React from 'react'
import './newHeader.css';
const Newheader = () => {
  return (
    <div className="Header">
        <div className="title">Header</div>
        <div className="listItems">
            <p>Products</p>
            <p>About us</p>
            <p>Resources</p>
        </div>
        <div className="loginStart">
            <p>Login</p>
            <span>Get Started</span>
        </div>
    </div>
  )
}

export default Newheader;