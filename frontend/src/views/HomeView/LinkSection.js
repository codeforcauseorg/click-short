import { makeStyles, Typography, Container } from '@material-ui/core';
import React, { useContext, useState } from 'react'
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import { UserContext } from '../../context/userContext';

import axios from '../../utils'
import { auth } from '../../services/authService'

const useStyles = makeStyles(() => ({
  root: {
    margin: "140px auto",
    textAlign: "center"
  }
}))

export default function LinkSection() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  const { user } = useContext(UserContext);

  const sendData = async () => {
    const token = await auth.currentUser.getIdToken();
    console.log(token)
    // axios.post(
    //   'http://localhost:3001/link',
    //   { headers: { Authorization: `Bearer ${token}` } },
    //   data
    // )
    //   .then(result => console.log(result)).catch(e => console.log('error', e))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h3" style={{ fontWeight: 600, marginBottom: 40 }} align="center" >
        Add URL and Details to Trim Link
      </Typography>
      <TextField background="url('/images/svg1.svg')" placeholder="www.exampleURLtobeshortened.com" onChange={handleChange} name="longLink" />
      <TextField background="url('/images/svg1.svg')" placeholder="any valid string" onChange={handleChange} name="shortLink" />
      <TextField background="url('/images/svg1.svg')" placeholder="expire at" onChange={handleChange} name="expired_at" />
      <TextField background="url('/images/svg1.svg')" placeholder="www.exampleURLtobeshortened.com" />
      <ButtonComponent title="Shorten URL" fullWidth onClick={sendData} />
    </Container>
  )
}