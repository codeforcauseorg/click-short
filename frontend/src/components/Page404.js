import React from 'react';
import { makeStyles, Paper, Box, Typography } from '@material-ui/core'
const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    backgroundImage: 'url("https://images.unsplash.com/photo-1416543974351-c28453497ef4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "30px 40px",
    backgroundColor: 'rgb(0,0,0,.45)',
    borderRadius: "16px"
  },
  typo: {
    fontWeight: 700,
    color: "#fff"
  }
}))

export default function Page404() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Box display="flex" className={classes.box}>
        <Typography variant="h5" className={classes.typo}>
          The Link either doesn't exist or have been expired
        </Typography>
      </Box>
    </Paper>
  )
}