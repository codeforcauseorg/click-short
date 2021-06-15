import { useEffect, useState, useMemo } from 'react'
import Routes from './Routes';
import { UserContext } from './context/userContext';
import { auth } from './services/authService'

function App() {

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userItems = JSON.stringify({ displayName: user.displayName, email: user.email, photoURL: user.photoURL, uid: user.uid })
        localStorage.setItem("clickShortUser", userItems);
      }
    });
  }, []);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("clickShortUser")));
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <UserContext.Provider value={value}>
      <Routes />
    </UserContext.Provider>
  )
}

export default App;
