import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/index.js';
import AddUser from './pages/AddUser/index.js';
import Listing from './pages/Listing/index.js';

import './index.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/listing' element={<Listing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
