import { useEffect, useState, useMemo } from 'react'
import Routes from './Routes';
import { UserContext } from './context';
import { auth } from './services/authService'
import { SnackbarProvider } from 'notistack';

function App() {
  const [user, setUser] = useState();
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userItems = JSON.stringify({ displayName: user.displayName, photoURL: user.photoURL, uid: user.uid })
        localStorage.setItem("clickShortUser", userItems);
      }
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={value}>
      <SnackbarProvider maxSnack={3}>
        <Routes />
      </SnackbarProvider>
    </UserContext.Provider>
  )
}

export default App;
