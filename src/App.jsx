import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


// import OtherPage from './components/OtherPage'; // for future routes

import './App.css';

function App() {
  return (
    <>
       
        <Outlet />
    
    </>
  );
}

export default App;
