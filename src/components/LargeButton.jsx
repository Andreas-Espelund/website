import React from 'react'

export default function LargeButton({text, onClick, type, children}) {
  return (
    <button type={type} classname="large-button" onClick={() => onClick()} className="largeButton">
        {text==null? "":text.toUpperCase()}
        {children}
    </button>
  )
}
