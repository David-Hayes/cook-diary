import React, { useState } from 'react'

import {
  Container,
  Avatar,
  Typography,
  FormControl,
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
  form: {
    width: '100%',
  },
  FormControl: {
    marginBottom: theme.spacing(2),
    minWidth: '100%',
  },
  input: {
    marginBottom: theme.spacing(2),
    minWidth: '100%',
  },
}))

export const Add = () => {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [protein, setProtein] = useState('')
  const [cut, setCut] = useState('')
  const [method, setMethod] = useState('')
  const [date, setDate] = useState('')

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add cook
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Cook name"
            name="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="false"
            className={classes.input}
          />
          <FormControl className={classes.FormControl}>
            <InputLabel id="label-protein">Protein</InputLabel>
            <Select
              labelId="label-protein"
              id="select-protein"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
              fullWidth
              required
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="Beef">Beef</MenuItem>
              <MenuItem value="Chicken">Chicken</MenuItem>
              <MenuItem value="Pork">Pork</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cut"
            label="Cut"
            name="cut"
            defaultValue={cut}
            onChange={(e) => setCut(e.target.value)}
            autoComplete="false"
            className={classes.input}
          />
          <FormControl className={classes.FormControl}>
            <InputLabel id="label-method">Method</InputLabel>
            <Select
              labelId="label-method"
              id="select-method"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              fullWidth
              required
            >
              <MenuItem value="Grill">Grill</MenuItem>
              <MenuItem value="BBQ">BBQ</MenuItem>
              <MenuItem value="Smoke">Smoke</MenuItem>
              <MenuItem value="Roast">Roast</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.input}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </div>
    </Container>
  )
}
