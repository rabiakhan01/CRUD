import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Login from './pages/Login/index.js';
import AddUser from './pages/AddUser/index.js';
import Listing from './pages/Listing/index.js';
import SignUp from './pages/Signup/index.js';
import PageNotFound from './pages/PageNotFound/index.js';
import './index.js';
import { isLoginUser } from './utils/utils.js';

function App() {

  const ProtectedRoute = ({ children }) => {

    return isLoginUser() ? children : <Navigate to="/" />

  }

  const PublicRoute = ({ children }) => {

    return !isLoginUser() ? children : <Navigate to="/student-listing" />

  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoute><Login /></PublicRoute>,
    },
    {
      path: '/signup',
      element: <PublicRoute><SignUp /></PublicRoute>
    },
    {
      path: '/student-listing',
      element: <ProtectedRoute><Listing /></ProtectedRoute>,
    },
    {
      path: '/add-new-student',
      element: <ProtectedRoute><AddUser /></ProtectedRoute>,
    },
    {
      path: '/update-student/:id',
      element: <ProtectedRoute><AddUser /></ProtectedRoute>
    }
  ])


  return (
    <RouterProvider router={router} />
  );
}

export default App;




