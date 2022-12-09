import React from 'react'
import Dashboard from '../../components/User/Dashboard'
import {FcNext} from 'react-icons/fc'
import CardHomeUser from '../../components/User/CardHomeUser'

export default function UserHome() {
  return (
    <div className='flex'>
        <div className='w-72 pt-10 h-screen my-5 bg-fill-light rounded-tr-3xl'>
          <Dashboard/>
        </div>
        <div className='my-20 ml-32 mb-10 '>
          <h1 className=' font-bold text-2xl'>¡Bienvenido!</h1><br/>
          <p className=' font-bold'>Mapa para recibir ofertas automáticas</p><br/><br/>
          <div className='my-5 flex gap-6'>
            <CardHomeUser/>
          </div>
        </div>   
    </div>
  )
}
