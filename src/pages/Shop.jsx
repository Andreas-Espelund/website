import React from 'react'
import LargeButton from '../components/LargeButton'
import Socials from '../components/Socials'

export default function Shop() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
    <div className="shopPage">

    <h1>JACKBOW STORE</h1>
    <LargeButton text="norwegian shop" onClick={openInNewTab} url="https://d2shop.no/product-category/kvelertak/"/>
    <LargeButton text="global shop" onClick={openInNewTab} url="https://eu.kingsroadmerch.com/kvelertak/"/>

    </div>
  )
}
