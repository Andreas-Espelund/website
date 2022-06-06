import React from 'react'

export default function Music() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="center">
      <div className="musicpage">
        <h1>Listen to jackbow</h1>
        <div className="album-player">
          <img src="https://d33mzpnc91f49u.cloudfront.net/380x380/https://nrk-urort-prod.s3.amazonaws.com/images/7da15d6f-acd8-487f-995f-7bdf02deb4c6" alt="album cover"/>
          <iframe className="spotifyWrapper"  src="https://open.spotify.com/embed/artist/0jSyfAeGgzJia76i7S70KZ?utm_source=generator" width="380" height="380" frameBorder="0"></iframe>
        </div>

          <ul className="streamingbuttons">
            <button onClick={()=> openInNewTab('https://open.spotify.com/artist/0jSyfAeGgzJia76i7S70KZ?si=GtI6nISGRCiNMfQuuAT7Vg')}>Spotify</button>
            <button onClick={()=> openInNewTab('https://music.apple.com/no/artist/jackbow/1395768920?l=nb')}>Apple</button>
            <button onClick={()=> openInNewTab('https://store.tidal.com/no/artist/9940993')}>Tidal</button>
            <button onClick={()=> openInNewTab('https://www.amazon.com/s?k=Jackbow&i=digital-music&search-type=ss&ref=ntt_srch_drd_B07DKYYN8W')}>Amazon</button>
            <button onClick={()=> openInNewTab('https://music.youtube.com/channel/UC___YSDGXhJG-xps6bJLp7w?feature=share')}>YouTube</button>
          </ul>
      </div>
    </div>
  )
}
