import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography , Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { UserContext } from "../context";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../services/authService";

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
  },
  items: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  appBar: {
    backgroundColor: "#fff",
  },
  logo: {
    marginLeft: theme.spacing(6),
  },
  logOut: {
    color: "rgb(166, 0, 0)",
    cursor: "pointer",
    whiteSpace: "nowrap",
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

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <RouterLink to="/">
            <img
              className={classes.logo}
              alt="logo"
              src="/images/logo.svg"
            ></img>
          </RouterLink>
          <div className={classes.items}>
            <Avatar alt={user.displayName} src={user.photoURL} />
            <Typography  className={classes.title}>
              Hey {user.displayName}!<br></br>
              <Typography
                variant="button"
                className={classes.logOut}
                onClick={handleLogout}
              >
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
