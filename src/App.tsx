import React, { useEffect, useState } from 'react';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import './App.css'
import LoginScreen from './components/screens/homeScreen/LoginScreen';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './components/userSlice/userSlice';
import ProfileScreen from './components/screens/profileScreen/ProfileScreen';

function App() {
  const [loading, setLoading] = useState(true); // Nuevo estado para indicar carga
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
      setLoading(false); // Indicar que la carga ha terminado
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log("usuario registrado ", user);

  if (loading) {
    return <div className='app load'>
      <img className='logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt=""/> 
    </div>; // Muestra un mensaje de carga mientras se verifica la autenticación
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={user ? <HomeScreen /> : <Navigate to="/login" />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/home" /> : <LoginScreen />}
          />
          <Route path="/profile" element={<ProfileScreen></ProfileScreen>} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;