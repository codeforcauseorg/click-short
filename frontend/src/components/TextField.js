import { makeStyles, TextField as T, Box } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "24px"
  },
  box: {
    // backgroundColor: "#DDDDDD",
    width: '80px',
    height: "56px",
    marginRight: "-14px",
    zIndex: 1,
    borderRadius: "4px"
  },
  textField: {
    borderColor: "green",
    '& .MuiInputBase-input': {
      marginLeft: "10px"
    }
  }
}))

export default function TextField({
  placeholder,
  background,
  ...rest
}) {
  const classes = useStyles();

  return (
    <Box display="flex" className={classes.root}>
      <Box className={classes.box} style={{
        background
      }}>
      </Box>
      <T
        className={classes.textField}
        variant="outlined"
        placeholder={placeholder}
        fullWidth
        {...rest}
      />
    </Box>
  )
}