import React from 'react'
import { URLS } from '../values/videos'
import VideoPager from '../components/VideoPager'
import PageTitle from '../components/PageTitle'
export default function About() {
  return (
    <div className="about">
      <PageTitle text="About"/>
      <VideoPager videos={URLS}/>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus nec posuere metus, quis porta nisi. 
        Quisque malesuada laoreet dui, in pretium augue porta at. 
        Maecenas nibh nisl, condimentum ut finibus eu, rutrum ac sapien. 
        Suspendisse eu magna at justo euismod ullamcorper et in ante. 
        Duis dignissim sapien vel ligula venenatis pulvinar. 
        Mauris aliquam, nulla vitae sagittis facilisis, velit purus molestie massa, condimentum viverra arcu felis ac ipsum. 
        Quisque nec tortor quis orci sagittis imperdiet id vitae nisi. 
        Nulla blandit lacinia finibus. 
        Nullam dictum est eget mauris efficitur scelerisque ut sit amet velit
    </p>

    <h2>Label</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus nec posuere metus, quis porta nisi. 
        Quisque malesuada laoreet dui, in pretium augue porta at. 
    </p>

    <h2>Booking</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus nec posuere metus, quis porta nisi. 
        Quisque malesuada laoreet dui, in pretium augue porta at. 
    </p>
    <h2>Management</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus nec posuere metus, quis porta nisi. 
        Quisque malesuada laoreet dui, in pretium augue porta at. 
    </p>

    <p>Jackbow &copy; 2022</p>

    </div>
  )
}
