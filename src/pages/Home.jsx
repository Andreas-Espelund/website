import React from 'react'
import VideoPager from '../components/VideoPager'
export default function Home() {

  const videos = [
    "https://www.youtube.com/embed/49RMVb7ltj0",
    "https://www.youtube.com/embed/7tY0ygyWwEg",
    "https://www.youtube.com/embed/49RMVb7ltj0"
  ] 
  return (  
    <div className="homepage">
      <VideoPager videos={videos}/>
    </div>
  )
}
