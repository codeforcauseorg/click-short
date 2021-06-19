import { useEffect, useState, useMemo } from 'react'
import Routes from './Routes';
import { UserContext } from './context/userContext';
import { auth } from './services/authService'

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("clickShortUser")));
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        const userItems = JSON.stringify({ displayName: user.displayName, photoURL: user.photoURL, uid: user.uid, token: token })
        localStorage.setItem("clickShortUser", userItems);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={value}>
      <Routes />
    </UserContext.Provider>
  )
}

export default App;
