import React from 'react'
import VideoPager from '../components/VideoPager'
import Video from '../components/Video'
import PageTitle from '../components/PageTitle'
export default function Videopage() {
  return (
    <>
    <PageTitle text="VIDEOS"/>
    <div className="videopage">
      <iframe width="1022" height="575" src="https://www.youtube.com/embed/s3a-EaNP-Bk" title="Is This Forever? - Release" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </>
  )
}
