import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login/index.js';
import AddUser from './pages/AddUser/index.js';
import Listing from './pages/Listing/index.js';
import SignUp from './pages/Signup/index.js';
import PageNotFound from './pages/PageNotFound/index.js';

import './index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/add-new-student' element={<AddUser />} />
        <Route path='/student-listing' element={<Listing />} />
        <Route path='/update-student/:id' element={<AddUser />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
