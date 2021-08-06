import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography, IconButton } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { UserContext } from "../context";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../services/authService";
import ButtonComponent from "../components/ButtonComponent";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#000000",
    marginLeft: "15px",
    fontSize: "12px",
    fontWeight: "600",
    paddingTop: "15px",
  },
  items: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",

    paddingRight: "50px",
  },
  appBar: {
    backgroundColor: "#fff",
  },
  logo: {
    paddingLeft: "50px",
  },
  logOut: {
    color: "rgb(166, 0, 0)",
    cursor: "pointer",
    fontSize: "10px",
    fontWeight: "600",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    logout();
    setUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <RouterLink to="/">
            <img
              className={classes.logo}
              alt="logo"
              src="/images/logo.svg"
            ></img>
          </RouterLink>
          <div className={classes.items}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              <Avatar alt={user.displayName} src={user.photoURL} />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                {" "}
                <ButtonComponent title="Log Out" onClick={handleLogout} />
              </MenuItem>
            </Menu>

            <Typography className={classes.title}>
              Hey {user.displayName}!<br></br>
              <Typography className={classes.logOut} onClick={handleLogout}>
                LogOut!
              </Typography>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
NavBar.propTypes = {
  className: PropTypes.string,
};
