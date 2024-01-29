import React from 'react'
import insta_icon from './icons/insta.svg';
import facebook_icon from './icons/facebook.svg'
import google_icon from './icons/google.svg'
import twitter_icon from './icons/twitter.svg'
import youtube_icon from './icons/youtube.svg'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footerHeading">Just a normal footer </div>
        <div className="footerContent">
            <p>The website footer is the section of content at the very bottom of a web page. It typically contains a copyright notice, link to a privacy policy, sitemap, logo, contact information, social media icons, and </p>
        </div>
        <div className="footerIcons">
            <img src={insta_icon} alt="" />
            <img src={facebook_icon} alt="" />
            <img src={twitter_icon} alt="" />
            <img src={youtube_icon} alt="" />

        </div>
    </div>
  )
}

export default Footer