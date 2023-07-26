import React from 'react'
import { NavLink } from 'react-router-dom';

import Sidebar from './Sidebar';



function showSidebar() {
    const sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("hide-sidebar")){
        sidebar.classList.remove("hide-sidebar");
    }

    sidebar.classList.add("show-sidebar");
}



const Navbar = () => {
  return (
    
    <>
    <nav id='navbar'>
        <div className="left">
            <button className='ico-btn' id='hamburger' onClick={showSidebar}><i className="fa-solid fa-bars"></i></button>
            <a href="/" className='branding'>
                <img src="" alt="Fortune-Agromart" className="logo" />
            </a>
        </div>
        <div className="mid"></div>
        <div className="right">
            <ul className="nav-tabs">
                <li><NavLink className="nav-tab" to="/">Home</NavLink></li>
                <li><NavLink className="nav-tab" to="/about">About</NavLink></li>
                <li><NavLink className="nav-tab" to="/contact">Contact</NavLink></li>
                {/* <li><a href="#"></a></li>
                <li><a href="#"></a></li> */}
            </ul>
        </div>
    </nav>

    <Sidebar/>
    </>
  )
}

export default Navbar;