import React from 'react'

export default function LargeButton({text, onClick, url}) {
  return (
    <button onClick={() => onClick(url)} className="largeButton">
        {text.toUpperCase()}
    </button>
  )
}
