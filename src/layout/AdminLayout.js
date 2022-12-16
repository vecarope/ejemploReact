import React from 'react'
import { Outlet } from 'react-router-dom'



const AdminLayout = () => {
  return (
    <>
    <Outlet/>
    <div>AdminLayout</div>
    </>
  )
}

export default AdminLayout