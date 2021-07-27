import { makeStyles } from "@material-ui/core";
import React from "react";
import TableComponent from "../../components/TableComponent";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    padding: "0 10px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "30px"
  }
}));

export default function UrlList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title}> Previous URLs Shortened By You </Typography>
      <TableComponent />
    </div>
  );
}
