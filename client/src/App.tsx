import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import UserPage from "./pages/user/user";
import { auth } from './firebase'

function App() {
  //TODO when login is made, should wait for token to be recieved before redirecting
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        return
      }

      setUser(null)
    })
    return () => unsubscribe()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/user" element={
          <ProtectedRoute user={user}>
            <UserPage user={user} />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
