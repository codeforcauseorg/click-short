import { makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import ButtonComponent from '../../components/ButtonComponent';
import { UserContext } from '../../context';
import { signInWithGoogle } from '../../services/authService';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(269.76deg, #180255 0.18%, #000000 53.35%, #000000 107.44%)',
    height: '100vh',
    textAlign: "center",

  },
  container: {
    color: '#fff',
    margin: "auto",
    textAlign: "center",
    verticalAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    msTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    maxWidth: 450
  },
  typography: {
    margin: '40px 0px 10px',
  },
  btn: {
    backgroundColor: "#cccccc",
    color: "#000",
    '&:hover': {
      backgroundColor: "#ceeeee"
    }
  }
}))

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const { setUser } = useContext(UserContext)

  const handleSignInWithGoogle = () => {
    signInWithGoogle().then(result => {
      setUser(result.user);
      history.push("/");
    }).catch(e => {
      console.log('error', e)
    })
  }

  return (
    <UserContext.Provider >
      <div className={classes.root}>
        <div className={classes.container}>
          <Typography variant="h3" className={classes.typography}>
            Sign In / Sign Up
          </Typography>
          <Typography style={{ marginBottom: "40px" }}>
            Manage your links with ease with codeforcause
          </Typography>
          <ButtonComponent title="Sign In with Google"
            className={classes.btn}
            onClick={handleSignInWithGoogle}
            fullWidth
            icon={
              <img src={"https://image.flaticon.com/icons/png/32/2702/2702602.png"} style={{ marginRight: "16px" }} alt="G-Icon" />
            } />
          <Typography variant="caption" style={{ display: "block", marginTop: "40px", fontSize: "10px" }}>
            By continuing, you agree to Code For Cause Terms of Use & Privacy policy.
          </Typography>
        </div>
      </div>
    </UserContext.Provider>
  );
}
