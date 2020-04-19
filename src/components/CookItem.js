import React from 'react'

import { TableRow, TableCell } from '@material-ui/core'

export const CookItem = ({ cook }) => {
  const { name, method, time, date } = cook.data

  const readableDate = (date) => {
    const rawDate = new Date(date.replace(/[-]/g, ','))
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return rawDate.getDate() + ' ' + months[rawDate.getMonth()] + ' ' + rawDate.getFullYear()
  }

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{method}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{readableDate(date)}</TableCell>
    </TableRow>
  )
}
