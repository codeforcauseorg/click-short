import DateFnsUtils from '@date-io/date-fns';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import { addRows } from '../../components/TableComponent';
import TextField from '../../components/TextField';
import { LinkContext } from '../../context';
import { auth } from '../../services/authService';
import axios from '../../utils';
import { useSnackbar } from 'notistack';

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
  const { rows, setRows } = useContext(LinkContext);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const { enqueueSnackbar } = useSnackbar();

  const sendData = async () => {
    const token = await auth.currentUser.getIdToken();
    data.expired_at = selectedDate;
    axios.post(
      'http://localhost:3001/link/',
      data,
      { headers: { Authorization: `Bearer ${token}` } },
    )
      .then(result => {
        const resultData = result.data;
        setRows([...rows, (addRows([resultData])[0])]);
        enqueueSnackbar("The Link is successfully shortened 🥳", { variant: "success" })
        console.log("re", result.status, typeof (result.status))
      }).catch((e) => {
        if (e.response.data.message) {
          enqueueSnackbar(e.response.data.message, { variant: "error" })
        } else {
          enqueueSnackbar(e.response.data.statusText)
        }
      })
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
      <TextField background="url('/images/svg1.svg')" placeholder="any valid string (No spaces Allowed)" onChange={handleChange} name="shortLink" />
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