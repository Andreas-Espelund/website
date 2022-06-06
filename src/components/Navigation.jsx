import React from 'react'
import logo from '../resources/logo.png'

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><a href="Music">Music</a></li>    
            <li><a href="Shop">Shop</a></li>  
            <li><a href="/"><img className="logo" src={logo} width="100"/></a></li>    
            <li><a href="Contact">Contact</a></li>    
            <li><a href="About">About</a></li>    
        </ul>
    </nav>
  )
}
