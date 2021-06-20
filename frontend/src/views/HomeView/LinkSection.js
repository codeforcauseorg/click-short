import { makeStyles, Typography, Container } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import { UserContext } from '../../context/userContext';
import DateFnsUtils from '@date-io/date-fns';
import axios from '../../utils'
import { auth } from '../../services/authService'
import { KeyboardDateTimePicker, MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles(() => ({
  root: {
    margin: "140px auto",
    textAlign: "center"
  },
  dateField: {
    borderColor: "green",
    '& .MuiInputBase-input': {
      marginLeft: "10px"
    }
  }
}))

export default function LinkSection() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const sendData = async () => {
    const token = await auth.currentUser.getIdToken();
    console.log(selectedDate)
    data.expired_at = selectedDate
    console.log('token', token)
    axios.post(
      'http://localhost:3001/link/',
      data,
      { headers: { Authorization: `Bearer ${token}` } },
    )
      .then(result => console.log(result)).catch(e => console.log('error', e))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h3" style={{ fontWeight: 600, marginBottom: 40 }} align="center" >
        Add URL and Details to Trim Link
      </Typography>
      <TextField background="url('/images/svg1.svg')" placeholder="www.exampleURLtobeshortened.com" onChange={handleChange} name="longLink" />
      <TextField background="url('/images/svg1.svg')" placeholder="any valid string" onChange={handleChange} name="shortLink" />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <TextField background="url('/images/svg1.svg')"
          component={<KeyboardDateTimePicker
            disablePast
            fullWidth
            inputVariant="outlined"
            id="date-picker-dialog"
            format="dd/MM/yyyy  HH:MM a"
            value={selectedDate}
            onChange={handleDateChange}
            className={classes.dateField}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />}
        />
      </MuiPickersUtilsProvider>
      <ButtonComponent title="Shorten URL" fullWidth onClick={sendData} />

    </Container>
  )
}