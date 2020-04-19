import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/State'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

export const CookList = () => {
  const { cooks, getCooks } = useContext(GlobalContext)

  // fetch cooks
  useEffect(() => {
    getCooks()
  }, [])

  console.log(cooks);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
