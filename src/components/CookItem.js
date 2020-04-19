import React from 'react'

import { TableRow, TableCell } from '@material-ui/core'

export const CookItem = ({ cook }) => {
  const { name, method, time, date } = cook.data

  const readableDate = (date) => {
    const rawDate = new Date(date.replace(/[-]/g, ','))
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    return (
      rawDate.getDate() +
      ' ' +
      months[rawDate.getMonth()] +
      ' ' +
      rawDate.getFullYear()
    )
  }

  const readableTime = (time) => {
    const days = time.split(':')[0] > 0 ? time.split(':')[0]+' days ' : ''
    const hours = time.split(':')[1] > 0 ? time.split(':')[1]+' hours ' : ''
    const minutes = time.split(':')[2] > 0 ? time.split(':')[2]+' minutes ' : ''
    return days+hours+minutes
  }

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{method}</TableCell>
      <TableCell>{readableTime(time)}</TableCell>
      <TableCell>{readableDate(date)}</TableCell>
    </TableRow>
  )
}
