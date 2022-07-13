import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Video from './Video'
export default function VideoPager(props) {
  return (
    <div className="grid">
      {props.children}
      </div>
  )
}
