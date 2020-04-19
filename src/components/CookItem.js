import React from 'react'

import { TableRow, TableCell } from '@material-ui/core'

export const CookItem = ({ cook }) => {

  const { name, method, time, date } = cook.data

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{method}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  )
}
