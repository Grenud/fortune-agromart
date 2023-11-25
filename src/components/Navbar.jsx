import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {


  
  

  const [navColor, setNavColor] = useState("transparent");
  const [navState, setNavState] = useState(false);  
  const [navLinkColor, setNavLinkColor] = useState("white")
  const [navBtnStyle, setNavBtnStyle]  = useState("bg-transparent border-[white] text-[#ffffff]")

  const [scrollTop, setScrollTop] = useState(0);

    window.addEventListener("scroll", () => {
        setScrollTop(window.scrollY);
    });

    useEffect(() => {
        if (scrollTop > 300){
            setNavState(true);
            setNavColor("white");
            setNavLinkColor("darkText")
            setNavBtnStyle("bg-primary text-[darkText] border-[transparent] border-0")
        }
        else if (scrollTop <= 200){
            setNavState(false);
            setNavColor("transparent");
            setNavLinkColor("white")
            setNavBtnStyle("bg-transparent border-[white] text-[#ffffff]")
        }
    }, [scrollTop]);
  
  const NavLinkClassName = `py-[20px] px-[20px] text-[14px] text-[${navLinkColor}] hover:border-b-2 font-semibold hover:border-primary hover:text-primary`; 
  
  return (
    <div>
      <nav 
      className={`navbar flex p-[18px] px-[20px] justify-evenly items-center border-[0.2px] border-b-[#ffffff63] fixed w-screen z-[999] bg-[${navColor}] ${(navState) ? "shadow-md" : ""} hover:shadow-md hover:bg-[white] transition-all duration-300`}
      onMouseOver={() => {
        setNavLinkColor("darkText")
        setNavBtnStyle("bg-primary text-[darkText] border-[transparent] border-0")
      }}
      onMouseOut={() => {
        if (!navState){
        setNavLinkColor("white")
        setNavBtnStyle("bg-transparent border-[white] text-[#ffffff]")
        }
      }}>
        <div className="navbar-brand">
          <Link href="#" className={`logo text-[20px] text-[${navLinkColor}] font-semibold hover:text-primary`}>Fortune Agromart</Link>
        </div>
        <ul className="navbar-menu flex">
          <li className="navbar-item"><NavLink href="#" className={`nav-link ${NavLinkClassName}`}>Home</NavLink></li>
          <li className="navbar-item"><NavLink href="#" className={`nav-link ${NavLinkClassName}`}>About</NavLink></li>
          <li className="navbar-item"><NavLink href="#" className={`nav-link ${NavLinkClassName}`}>Services</NavLink></li>
          <li className="navbar-item"><NavLink href="#" className={`nav-link ${NavLinkClassName}`}>Contact</NavLink></li>
        </ul>
        <div className="right">
          <NavLink href="#" className={`nav-btn py-[13px] px-[35px] text-[13px] rounded-md border-[1px] hover:bg-primary-hover ${navBtnStyle}`}>Sign Up</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
