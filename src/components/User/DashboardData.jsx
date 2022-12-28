import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUserCheck} from 'react-icons/fi'
import {CgFileDocument} from 'react-icons/cg'

export const DashboardData=[
        {
            title:'Home', 
            icon:<AiOutlineHome className='w-5 h-5'/>,
            path:'/userHome',
        },
        {
            title:'Perfil', 
            icon:<FiUserCheck className='w-5 h-5'/>,
            path:'/userProfile'
        },
        {
            title:'Test técnicos', 
            icon:<CgFileDocument className='w-5 h-5'/>,
            path:'/userTest'
        }
      ]

