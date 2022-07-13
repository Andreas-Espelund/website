import React from 'react'
import logo from '../resources/logo.png'
import { IconButton, Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';
export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="header">
        <ul className="web-header">
            <li><a href="Music">MUSIC</a></li>    
            <li><a href="Shop">SHOP</a></li>  
            <li><a href="/"><img className="logo" src={logo} width="100"/></a></li>    
            <li><a href="Videos">VIDEOS</a></li>    
            <li><a href="Contact">CONTACT</a></li>    
        </ul>
        <div className="mobile-header">
          <a href="/"><img className="logo" src={logo} width="200px"/></a>  
        </div>
    </nav>
  )
}
