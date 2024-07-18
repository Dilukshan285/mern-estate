import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const {currentUser} =  useSelector((state) => state.user)
  return currentUser ? <Outlet/> : <Navigate to='sign-in'/>;


}

export default PrivateRoute;

// The PrivateRoute component uses useSelector to get the currentUser from the Redux state.
// It checks if currentUser is truthy.
// If currentUser exists, it renders the Outlet component, which represents nested routes.
// If currentUser does not exist, it redirects to the 'sign-in' route using the Navigate component.