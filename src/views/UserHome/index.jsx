import React from 'react'
import Dashboard from '../../components/User/Dashboard'
import CardHomeUser from '../../components/User/CardHomeUser'

export default function UserHome() {
  return (
    <div className='flex'>
        <div className='lg:w-72 lg:pt-10 h-screen my-5 bg-fill-light rounded-tr-3xl'>
          <Dashboard/>
        </div>
        <div className='container mx-auto grid md:ml-10 md:mr-14 my-10 ml-3 mr-8 lg:my-16 lg:ml-16 lg:mb-20 '>
          <h1 className='font-bold text-lg md:text-xl lg:font-bold lg:text-3xl'>¡Bienvenido!</h1>
          <p className=' font-bold text-sm md:text-lg'>Mapa para recibir ofertas automáticas</p>
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <CardHomeUser/>
          </div>
        </div>   
    </div>
  )
}
