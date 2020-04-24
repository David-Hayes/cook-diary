import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/State'
import { CookItem } from './CookItem'

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const CookList = () => {
  const { cooks, getCooks } = useContext(GlobalContext)
  const { filter, setFilter } = useContext(GlobalContext)
  let searchTimeout = false

  // fetch cooks
  useEffect(getCooks, [filter])

  const filterSearch = (filterTxt) => {
    if (searchTimeout) clearTimeout(searchTimeout)
    searchTimeout = setTimeout(() => {
      setFilter(filterTxt)
    }, 1000)
  }

  return (
    <Container>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="filter"
        label="Filter"
        name="filter"
        autoComplete="off"
        defaultValue={filter}
        onChange={(e) => filterSearch(e.target.value)}
      />
      {cooks.length > 0 ? (
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
              {cooks.map((cook) => (
                <CookItem key={cook.ts} cook={cook} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Alert severity="error">
            No results found
          </Alert>
        </>
      )}
    </Container>
  )
}
