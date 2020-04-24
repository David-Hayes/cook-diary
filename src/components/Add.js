import React, { useState } from 'react'
import axios from 'axios'

import {
  Container,
  Avatar,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.main,
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
    //marginBottom: theme.spacing(2),
    minWidth: '100%',
  },
  input: {
    //marginBottom: theme.spacing(2),
    minWidth: '100%',
  },
  submitted: {
    marginTop: theme.spacing(3)
  }
}))

export const Add = () => {
  const classes = useStyles()

  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [protein, setProtein] = useState('')
  const [cut, setCut] = useState('')
  const [method, setMethod] = useState('')
  const [date, setDate] = useState('')
  const [weight, setWeight] = useState('')
  const [time, setTime] = useState('00:00:00')
  const [notes, setNotes] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    axios.post('/.netlify/functions/add', {
      name,
      protein,
      cut,
      method,
      date,
      weight,
      time,
      notes,
    })
    .then(res => {
      setSubmitted(true);
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add cook
        </Typography>
        {submitted ? (
          <>
            <Alert severity="success" className={classes.submitted}>Cook saved!</Alert>
          </>
        ) : (
          <form className={classes.form} autoComplete="off" onSubmit={onSubmit}>
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
              autoComplete="off"
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
              autoComplete="off"
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="weight"
              label="Weight"
              name="weight"
              defaultValue={weight}
              onChange={(e) => setWeight(e.target.value)}
              autoComplete="off"
              className={classes.input}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="time"
              label="Time"
              name="time"
              defaultValue={time}
              onChange={(e) => setTime(e.target.value)}
              autoComplete="off"
              className={classes.input}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              id="notes"
              label="Notes"
              name="notes"
              defaultValue={notes}
              onChange={(e) => setNotes(e.target.value)}
              autoComplete="off"
              className={classes.input}
            />
            <Button type="submit" fullWidth variant="contained" color="primary">
              Save
            </Button>
          </form>
        )}
      </div>
    </Container>
  )
}
