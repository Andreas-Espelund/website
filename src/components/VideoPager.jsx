import React from 'react'
import Carousel from 'react-material-ui-carousel'
export default function VideoPager({videos}) {
  return (
    <div className="carousel">
      <Carousel swipe animation="slide" duration="500" interval="300000" stopAutoPlayOnHover fullHeightHover indicators="false">
        { videos.map( (item, i) =>  
        
        <div> <iframe className="row" src={item}  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/></div>
        )}
      </Carousel>
      </div>
  )
}
