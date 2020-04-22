import React, { useState } from 'react'

import {
  Avatar,
  Typography,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.success.main,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const Add = () => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [protein, setProtein] = useState('')

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <AddOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Add cook
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Cook name"
          name="name"
          autoComplete="false"
          autoFocus
        />
        <InputLabel id="label-protein">Protein</InputLabel>
        <Select
          labelId="label-protein"
          id="select-protein"
          value={protein}
          onChange={e => setProtein(e.target.value)}
          fullWidth
          required
        >
          <MenuItem value="Beef">Beef</MenuItem>
          <MenuItem value="Chicken">Chicken</MenuItem>
          <MenuItem value="Pork">Pork</MenuItem>
        </Select>
      </form>
    </div>
  )
}
