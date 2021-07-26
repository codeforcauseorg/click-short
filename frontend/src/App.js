import { useEffect, useState, useMemo } from "react";
import Routes from "./Routes";
import { UserContext } from "./context";
import { auth } from "./services/authService";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat"].join(","),
  },
});

function App() {
  const [user, setUser] = useState();
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userItems = JSON.stringify({
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        });
        localStorage.setItem("clickShortUser", userItems);
      }
      setUser(user);
    });
  }, []);

  return (
    <ThemeProvider theme ={theme}>
      <UserContext.Provider value={value}>
        <SnackbarProvider maxSnack={3}>
          <Routes />
        </SnackbarProvider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
