import React from 'react'
import { Outlet } from 'react-router-dom';
import UserHome from '../views/UserHome/index'



const UserLayout = () => {
  return (
    <>
    <Outlet/>
    <UserHome/>
    </>
  )
}

export default UserLayout