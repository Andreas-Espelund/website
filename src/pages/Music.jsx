import React from 'react'
import LargeButton from '../components/LargeButton';
import PageTitle from '../components/PageTitle';
export default function Music() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
      <div className="musicpage">
        <PageTitle text="LISTEN TO JACKBOW"/>
          
          <ul className="streamingbuttons">
            <LargeButton onClick={()=> openInNewTab('https://open.spotify.com/artist/0jSyfAeGgzJia76i7S70KZ?si=GtI6nISGRCiNMfQuuAT7Vg')} text="Spotify"/>
            <LargeButton onClick={()=> openInNewTab('https://music.apple.com/no/artist/jackbow/1395768920?l=nb')} text="Apple"/>
            <LargeButton onClick={()=> openInNewTab('https://store.tidal.com/no/artist/9940993')} text="Tidal"/>
            <LargeButton onClick={()=> openInNewTab('https://www.amazon.com/s?k=Jackbow&i=digital-music&search-type=ss&ref=ntt_srch_drd_B07DKYYN8W')} text="Amazon"/>
            <LargeButton onClick={()=> openInNewTab('https://music.youtube.com/channel/UC___YSDGXhJG-xps6bJLp7w?feature=share')} text="YouTube"/>

          </ul>
      </div>
    )
}
