import { textAlign } from '@mui/system'
import React from 'react'

export default function PageTitle({ text }) {
  return (
    <h1 className="page-title" >{text.toUpperCase()}</h1>
  )
}
