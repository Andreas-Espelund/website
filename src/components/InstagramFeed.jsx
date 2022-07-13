import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
export default function InstagramFeed() {


    const [active, setactive] = useState(false);
    const [failed, setfailed] = useState(false)
  return (
    <InstagramEmbed
        url='https://instagr.am/p/Zw9o4/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {setactive(true)}}
        onAfterRender={() => {}}
        onFailure={() => {setactive(true); setfailed(true)}}
    />
  )
}
