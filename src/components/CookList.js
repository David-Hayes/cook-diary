import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/State'

import {
  Container,
  CircularProgress,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  loader: {
    textAlign: 'center',
  },
}))

export const CookList = () => {
  const classes = useStyles()
  const { cooks, getCooks } = useContext(GlobalContext)

  useEffect(getCooks, [])

  return (
    <Container>
      {cooks.length === 0 && (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
      {cooks.length > 0 && (
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
            <TableBody>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  )
}
