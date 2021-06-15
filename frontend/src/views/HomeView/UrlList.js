import { makeStyles } from '@material-ui/core';
import React from 'react'
import TableComponent from '../../components/TableComponent';

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 10px"
  }
}))

export default function UrlList() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <TableComponent />
    </div>
  )
}