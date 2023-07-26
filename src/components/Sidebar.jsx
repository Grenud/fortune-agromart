import React from 'react'
import { Link } from 'react-router-dom'


function hideSidebar() {
    const sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("show-sidebar")){
        sidebar.classList.remove("show-sidebar");
    }

    sidebar.classList.add("hide-sidebar");
}


const Sidebar = () => {
  return (
    <div id="sidebar">
        <div className="sidebar-header">
            <button className='ico-btn' onClick={hideSidebar}><i className="fa-solid fa-arrow-left"></i></button>
        </div>
        <ul className="sidebar-tabs">
            <li><Link to="/" className='sidebar-tab'>Home</Link></li>
            <li><Link to="/about" className='sidebar-tab'>About</Link></li>
            <li><Link to="/contact" className='sidebar-tab'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar