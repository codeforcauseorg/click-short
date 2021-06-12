import { makeStyles, Typography, Container } from '@material-ui/core';
import React from 'react'
import TextField from '../../components/TextField';
import ButtonComponent from '../../components/ButtonComponent';

const useStyles = makeStyles(() => ({
  root: {
    margin: "140px auto",
    textAlign: "center"
  }
}))

export default function LinkSection() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Typography variant="h3" style={{ fontWeight: 600, marginBottom: 40 }} align="center" >
        Add URL and Details to Trim Link
      </Typography>
      <TextField background="url('/images/svg1.svg')" placeholder="www.exampleURLtobeshortened.com" />
      <TextField background="url('/images/svg1.svg')" placeholder="any valid string" />
      <TextField background="url('/images/svg1.svg')" placeholder="expire at" />
      <TextField background="url('/images/svg1.svg')" placeholder="www.exampleURLtobeshortened.com" />
      <ButtonComponent title="Shorten URL" fullWidth />
      
    </Container>
  )
}