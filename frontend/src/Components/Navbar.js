import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/vsc"
import * as AiIcons  from'react-icons/ai';
import { SidebarData } from './SidebarData';
import '../../src/Navbar.css'
import {  IconContext } from 'react-icons/lib';
import logo from '../images/logo.png' 

function Navbar() {
  const [sidebar,setsidebar]=useState(false)

  const showSidebar=()=>setsidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color:'black'}}>
     
    <div className='navbar'>
    <div className='navbar-top'>
    
    <Link to={"/"}><img src={logo} className='nav-logo' alt='Maline Assurance' /></Link>
          </div>
      <Link to="#" className='menu-bars'>
      <FaIcons.VscThreeBars onClick={showSidebar} />
      </Link>
     <nav className={sidebar ? 'nav-menu active ':'nav-menu'}>
     
      <ul className='nav-menu-items' >
      <AiIcons.AiOutlineClose onClick={showSidebar}/>
        
        <Link to={"/"} className='menu-bars navbar-toggle'>
        <img src={logo} className='nav-logo1' alt='Maline Assurance' />
        </Link>
        
     {SidebarData.map((item,index)=>{
      return(
     <li key={index} className={item.cName}>
      
      <Link to={item.path} >
      {item.icon}
      <span>{item.title}</span>
      </Link>
     </li>
      )
     })}
      </ul>
     </nav>
    </div>
    
    </IconContext.Provider>
    </>
    
  )
}

export default Navbar
