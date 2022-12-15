import React from 'react'
//import { FcNext } from 'react-icons/fc'
import Dashboard from '../../components/User/Dashboard'


export default function UserTest() {
  return (
    <div className='flex'>
        <div className='w-72 pt-10 h-screen my-5 bg-fill-light rounded-tr-3xl'>
          <Dashboard/>
        </div>
        <div className='my-10 ml-20'>
            <h1>test</h1>
        </div>   
    </div>
  )
}
