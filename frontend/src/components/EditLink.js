import React, { useContext } from 'react'
import { Edit, Delete } from '@material-ui/icons'
import { Dialog, DialogTitle, TextField, makeStyles, CircularProgress, DialogContent, DialogContentText, Button, DialogActions } from '@material-ui/core'
import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import ButtonComponent from './ButtonComponent';
import DateFnsUtils from '@date-io/date-fns';
import { useState } from 'react'
import axios from '../utils'
import { auth } from '../services/authService'
import { useSnackbar } from 'notistack';
import { LinkContext } from '../context'

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
  },
  texField: {
    marginBottom: "24px"
  },
  dialog: {
    padding: '24px'
  }
}))

export default function EditAction({ rowData }) {
  const classes = useStyles();
  // rowData.expired_at = new Date(rowData.expiryDateInJsForm)
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [data, setData] = useState(rowData);
  const [selectedDate, setSelectedDate] = React.useState(new Date(rowData.expired_at));
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { rows, setRows } = useContext(LinkContext)

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpenDeleteDialog(false);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDelete = () => {
    setOpenDeleteDialog(true);
  }

  const handleDeleteOperation = async () => {
    const token = await auth.currentUser.getIdToken();
    try {
      await axios.delete(`http://localhost:3001/link/${rowData.id}`,
        { headers: { Authorization: `Bearer ${token}` } },
      )
      enqueueSnackbar("Link deleted!", { variant: "success" });
      let newArr = [...rows]
      newArr = newArr.filter((obj => obj.id !== rowData.id))
      setRows(newArr)
    } catch (e) {
      enqueueSnackbar("Error Deleting Your Link!", { variant: "error" })
    }
    setOpenDeleteDialog(false);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const changedKeys = Object
      .keys(rowData)
      .filter(obj => rowData[obj] !== data[obj])
      .reduce((obj, key) => {
        obj[key] = data[key]
        return obj
      }, {})

    changedKeys.expired_at = selectedDate;
    const token = await auth.currentUser.getIdToken();
    try {
      await axios.put(`http://localhost:3001/link/${rowData.id}`,
        changedKeys,
        { headers: { Authorization: `Bearer ${token}` } },
      )
      enqueueSnackbar("Link updated!", { variant: "success" });
      let newArr = [...rows]
      const idx = newArr.findIndex((obj => obj.id === rowData.id))
      newArr[idx] = data;
      setRows(newArr)
    } catch (e) {
      if (e.response.data.message) {
        enqueueSnackbar(e.response.data.message, { variant: "error" })
      } else {
        enqueueSnackbar("Error Updating Your Link!", { variant: "error" })
      }
    }
    setOpen(false)
    setLoading(false)
  }

  if (loading) {
    return <CircularProgress />
  }

  return (
    <>
      <Edit onClick={handleClick} style={{ cursor: 'pointer', marginRight: '4px' }} />
      <Delete onClick={handleDelete} style={{ cursor: 'pointer' }} />
      <Dialog
        className={classes.dialog}
        fullWidth
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          Update Link
        </DialogTitle>
        <form onSubmit={handleSubmit} style={{ margin: "0px 40px 40px" }} >
          <TextField
            className={classes.texField}
            required
            fullWidth
            name="longLink"
            variant="outlined"
            value={data.longLink}
            onChange={handleChange}
          />
          <TextField
            className={classes.texField}
            required
            fullWidth
            name="shortLink"
            variant="outlined"
            value={data.shortLink}
            onChange={handleChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDateTimePicker
              disablePast
              fullWidth
              inputVariant="outlined"
              id="date-picker-dialog"
              format="dd/MM/yyyy  HH:MM a"
              value={selectedDate}
              onChange={handleDateChange}
              className={classes.texField}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
            <ButtonComponent title="Update URL" fullWidth type="submit" />
          </MuiPickersUtilsProvider>
        </form>
      </Dialog>
      <Dialog open={openDeleteDialog} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Delete this Link?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure You want to delete: {rowData.longLink}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteOperation} style={{ color: "#A60000" }}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}