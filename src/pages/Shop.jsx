import React from 'react'
import LargeButton from '../components/LargeButton'
import Column from '../components/Column'
import PageTitle from '../components/PageTitle';


export default function Shop() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

  return (
    <div className="page-holder">

    <PageTitle text="Jackbow shop"/>
    <Column>
      <LargeButton text="norwegian shop" onClick={openInNewTab} url="https://d2shop.no/product-category/kvelertak/"/>
      <LargeButton text="global shop" onClick={openInNewTab} url="https://eu.kingsroadmerch.com/kvelertak/"/>
    </Column>

    </div>
  )
}
