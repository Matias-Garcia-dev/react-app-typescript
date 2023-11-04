import React from 'react';
import HomeScreen from './components/screens/homeScreen/HomeScreen';
import './App.css'
import LoginScreen from './components/screens/homeScreen/LoginScreen';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen></HomeScreen>}/>
          <Route path="/login" element={<LoginScreen/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
