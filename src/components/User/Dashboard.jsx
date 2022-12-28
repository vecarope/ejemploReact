import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardData } from './DashboardData'

export default function Dashboard() {

  return (
    <div className=' flex text-light-purple md:w-54 lg:w-70 justify-center h-96 '>
        <div className=' w-16 md:w-32 my-12 absolute'>
          <div className='flex gap-x-2 p-1 justify-center items-center text-xl h-14 w-22 border-2 border-light-purple rounded-2xl bg-white font-bold mb-1' >
            <h1 className='hidden md:block md:text-lg lg:text-xl'>JOB READY</h1>
            <h1 className='sm:text-center sm:text-lg md:hidden lg:hidden'>J R</h1>
          </div>
        </div>
        <div className=' w-16 md:w-48 my-40 mr-1' >
          <ul>
            {DashboardData.map((item, index)=>(
                <Link to={item.path}> 
                  <button 
                    key={index}
                    className={`h-14 flex md:w-48 p-5 cursor-pointer focus:bg-light-purple hover:bg-light-purple hover:text-white focus:text-white rounded-md`}>
                    <div className='hidden md:flex gap-3 '>
                      {item.icon} {item.title}
                    </div>
                    <div className='md:hidden'>
                      {item.icon}
                    </div>
                  </button>
                </Link>
              ))
            }
          </ul>
        </div>
    </div>
  )
}
