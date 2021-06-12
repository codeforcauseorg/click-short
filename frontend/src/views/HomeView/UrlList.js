import { makeStyles } from '@material-ui/core';
import React from 'react'
import TableComponent from '../../components/TableComponent';

const useStyles = makeStyles(() => ({
  root: {
    margin: "140px auto",
    textAlign: "center"
  }
}))

export default function UrlList() {
  const classes = useStyles();

  return (
    <TableComponent />
  )
}