import React, { useEffect} from 'react';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import './App.css'
import LoginScreen from './components/screens/homeScreen/LoginScreen';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './components/userSlice/userSlice';
import ProfileScreen from './components/screens/profileScreen/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
        console.log(userAuth);
      } else {
        dispatch(logout())
      }
    })

    return () => {
      unsubscribe()
    }
  }, [dispatch]);

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={user ? <HomeScreen /> : <Navigate to="/login" />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <LoginScreen/>}
          />
          <Route path="/profile" element={<ProfileScreen></ProfileScreen>}/>
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
