import { CircularProgress, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useContext, useEffect } from 'react';
import { LinkContext } from '../context';
import { auth } from '../services/authService';
import axios from '../utils';


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

function convertDate(dt) {
  let date = new Date(dt);
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear() % 2000);
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export function addRows(result) {
  const r = []
  const { displayName } = JSON.parse(localStorage.getItem("clickShortUser"))
  result.map((link) => {
    let { clickCount, shortLink, longLink, createdAt, expired_at } = link;
    createdAt = convertDate(createdAt);
    expired_at = convertDate(expired_at);
    return r.push(createData(clickCount, shortLink, longLink, displayName, createdAt, expired_at, 'Active', 'action'))
  })

  return r;
}

export default function TableComponent() {
  const classes = useStyles();
  const { rows, setRows } = useContext(LinkContext);

  useEffect(async () => {
    const token = await auth.currentUser.getIdToken();
    axios.get('http://localhost:3001/link',
      { headers: { Authorization: `Bearer ${token}` } },
    ).then(result => {
      setRows(addRows(result.data));
    }).catch(e => {
      console.log(e)
    })
  }, [setRows])

  if (rows === null) {
    return <CircularProgress />
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
            <StyledTableCell>Trimmed URL</StyledTableCell>
            <StyledTableCell>Orignal URL</StyledTableCell>
            <StyledTableCell>Created by</StyledTableCell>
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
              <StyledTableCell>{row.trimmed}</StyledTableCell>
              <StyledTableCell>{row.original}</StyledTableCell>
              <StyledTableCell>{row.created_by}</StyledTableCell>
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
