import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField, CircularProgress } from '@material-ui/core';
import axios from '../utils'
import { auth } from '../services/authService'


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(clicks, trimmed, original, created_by, created_on, exp_on, status, actions) {
  return { clicks, trimmed, original, created_by, created_on, exp_on, status, actions };
}

const rows = [
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
  createData(445, 'https://codecau.se/contest', 'https://codecau.se/contest', 'Anuj Garg', '23/11/20', '23/11/20', 'Active', 'action'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableComponent() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(async () => {
    setTimeout(() => {
      console.log("hi");
    }, 2000);
    const token = await auth.currentUser.getIdToken();
    axios.get('http://localhost:3001/link',
      { headers: { Authorization: `Bearer ${token}` } },
    ).then(result => {
      console.log(result);

      const { displayName } = JSON.parse(localStorage.getItem("clickShortUser"))
      const r = []
      result.data.map((link) => {
        const { clickCount, shortLink, longLink, createdAt, expired_at } = link;
        r.push(createData(clickCount, shortLink, longLink, displayName, createdAt, expired_at, 'Active', 'action'))
      })
      console.log("datasets", r)
      setData(r);
    }).catch(e => {
      console.log(e)
    })
  }, [])

  if (data === null) {
    <CircularProgress />
  }

  return (
    <TableContainer component={Paper} style={{ marginBottom: "100px" }}>
      <TableHead style={{ backgroundColor: "#EBEBEB", width: '100%', display: "inline-block", textAlign: "right" }} >
        <TextField variant="outlined" style={{ marginRight: "40px", padding: "8px" }} placeholder="search from 100 links" />
      </TableHead>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Clicks</StyledTableCell>
            <StyledTableCell align="right">Trimmed URL</StyledTableCell>
            <StyledTableCell align="right">Orignal URL</StyledTableCell>
            <StyledTableCell align="right">Created by</StyledTableCell>
            <StyledTableCell align="right">Created On</StyledTableCell>
            <StyledTableCell align="right">Exp. Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.clicks}
              </StyledTableCell>
              <StyledTableCell align="right">{row.trimmed}</StyledTableCell>
              <StyledTableCell align="right">{row.original}</StyledTableCell>
              <StyledTableCell align="right">{row.created_by}</StyledTableCell>
              <StyledTableCell align="right">{row.created_on}</StyledTableCell>
              <StyledTableCell align="right">{row.exp_on}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.actions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
