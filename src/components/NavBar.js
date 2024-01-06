import React from 'react'
import './Navbar.css'
import locationIcon from '../images/Main page/location icon.png'

export default function NavBar() {
  return (
    <div id="mpNavbar">
        <div id="logoNlocation">
        <div id="mpNavbarTitle">Food<span>ie</span></div>
        <div id="mpNavbarLocation">
            <img src={locationIcon} alt="" />
            <div id="mpNavbarLocationText">
                No. Street,
                City State
                00000 IN
            </div>
        </div>
        </div>
        <div id="mpLoginAndSignUp">
            <div className="lns">Login</div>
            <div className="lns">Sign Up</div>
        </div>
    </div>
  )
}
