import React from 'react'
import { Box } from '@mui/system'
import { Stack } from '@mui/material'
import CalendarItem from './CalendarItem'
export default function Calendar() {
    const shows = {
            date: '2022-06-22T13:51:50.417-20:00',
            title: 'Jackbow Malakoff',
            tickets: 'https://tikkio.com/tickets/11708-malakoff-2022?utm_source=facebook&utm_medium=event-cta&utm_campaign=buy',
            city: 'Nordfjordeid',
            country: 'NO'
    }
  return (
        <div>
            <CalendarItem show/>
        </div>
  )
}
