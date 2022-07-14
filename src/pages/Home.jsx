import React from 'react'
import PageTitle from '../components/PageTitle';
import VideoPager from '../components/VideoPager';
import logo from '../resources/logo.png'
export default function Home() {

  
  return (  
    <div className="page-holder">

    <img className="band-logo" src={logo}/>
    <div>
    <ul className="mobile-nav">
      <li><a href="Music">MUSIC</a></li>    
      <li><a href="https://shop.jackbowband.com" target="_blank">SHOP</a></li>  
      <li><a href="Videos">VIDEOS</a></li>    
      <li><a href="Contact">CONTACT</a></li>    
      </ul>
    </div>
    </div>
  )
}
