import React from 'react'
import facebook from '../resources/facebook-logo-white.png'
import tiktok from '../resources/tiktok-logo-white.png'
import instagram from '../resources/instagram-logo-white.png'
import spotify from '../resources/spotify-logo-white.png'
export default function Socials() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    
  return (
    <div className="socialbuttons">
        <ul>
            <li onClick={()=> openInNewTab("https://www.facebook.com/jackb0w")}> <img  src={facebook} alt="facebook" width="20"/></li>
            <li onClick={()=> openInNewTab("https://www.instagram.com/jackbowofficial/")}> <img  src={instagram} alt="instagram" width="20"/></li>
            <li onClick={()=> openInNewTab("https://www.tiktok.com/@jackbowofficial")}> <img  src={tiktok} alt="tiktok" width="20"/></li>
            <li onClick={()=> openInNewTab("https://open.spotify.com/artist/0jSyfAeGgzJia76i7S70KZ?si=_k1iyIrwQjaIXNfkL0tr9A")}> <img  src={spotify} alt="spotify" width="20"/></li>
        </ul>
    </div>
  )
}
