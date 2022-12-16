import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardData } from './DashboardData'

export default function Dashboard()
{

  return (
    <div className='flex text-light-purple w-70 justify-center h-96 '>
      <div className=' w-40 my-12 absolute'>
        <div className='flex gap-x-2 p-1 justify-center items-center text-xl h-14 w-40 border-2 border-light-purple rounded-2xl bg-white font-bold mb-1' >
          <h1>JOB READY</h1>
        </div>
      </div>
      <div className='w-72 my-48' >
        <ul className=' gap-x-4 '>
          {DashboardData.map((item, index) => (
            <li className='h-14 flex gap-x-4 p-10   cursor-pointer hover:bg-light-purple hover:text-white rounded-md' key={index}>
              <Link to={item.path} >
                <div className=' justify-items-center flex gap-3'>
                  {item.icon} {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

  )
}
