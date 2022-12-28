import React from 'react'
import Dashboard from '../../components/User/Dashboard'
import { GrDocumentTransfer } from 'react-icons/gr'
import { FiEdit2 } from 'react-icons/fi'
import { SlUser } from 'react-icons/sl'
import { AiOutlineMail, AiOutlinePhone} from 'react-icons/ai'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdOutlineBookmarkAdded, MdOutlineEventAvailable} from 'react-icons/md'
import { RiFolderUserLine, RiDeleteBinLine } from 'react-icons/ri'

export default function UserProfile() {
  return (
    <div className='flex'>
        <div className='lg:w-72 lg:pt-10 h-screen my-5 bg-fill-light rounded-tr-3xl'>
          <Dashboard/>
        </div>
        <div className='grid container mx-auto mr-10 md:w-screen md:mt-5 lg:my-10 ml-5 lg:ml-20 lg:w-screen m-5 lg:m-12'>
          <h1 className='font-bold text-lg md:text-xl lg:text-2xl md:mb-3 lg:mb-4 '>¡Bienvenido!</h1><br/><br/>
          <div className='lg:flex lg:justify-between mb-2 lg:mb-6 '>
            <div className='flex gap-6 md:text-md lg:text-lg mb-2'>
              <GrDocumentTransfer/> <h1 className='mr-2'>sube tu Cv </h1>
            </div>
            <div className='flex ml-10 gap-8 justify-between' >
            <h2 className='text-sm'> ejemplo</h2>
            <FiEdit2/>              
            </div>
          </div>
          <hr className=' border-black'/>
          <div className='grid grid-cols-2 gap-2 justify-between sm:grid-cols-3 lg:justify-between mb-2 mt-4 lg:mb-7 lg:gap-6 lg:mt-10'>
            <div className='col-start-1'>
              <SlUser className='w-11 h-11 mr-7'/>
            </div>
            <div className='col-start-1 sm:col-start-2'>
              <h1 className='font-bold text-xl'>nombre apellido</h1>
              <p className='text-lg'>pais</p>  
            </div>
            <div className='flex justify-end'>
              <FiEdit2/>     
            </div>
          </div>
          <div className='flex justify-start sm:justify-around md:justify-around gap-8 mb-2 mt-4 lg:mb-7'>
            <div className='flex gap-5'>
              <AiOutlineMail className=' text-xl'/>
              <p className='hidden md:block'>correo</p>
            </div>
            <div  className='flex gap-5'>
              <AiOutlinePhone className=' text-xl'/>
              <p className='hidden md:block'>telefono</p>
            </div>
            <div>
              <BsLinkedin className=' rounded-3xl w-6 h-6'/>
            </div>
            <div>
              <BsGithub className=' w-6 h-6'/>
            </div>
          </div>
          <hr className=' border-black'/>
          <div className='lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10'>
            <div className='flex gap-5 text-lg'> 
              <MdOutlineBookmarkAdded/><h2>Experiencia Laboral</h2>
            </div>
            <div className='flex ml-10 gap-8 justify-between'>
              <div className=' lg:text-end text-sm'>
                <h2 className='font-bold'>Experiencia</h2>
                <h2>inglés</h2>
              </div>
              <div>
                <FiEdit2/> 
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10'>
            <div className='flex gap-5 text-lg'>
              <MdOutlineEventAvailable/><p>Disponibilidad</p>
            </div>
            <div className='flex gap-8 justify-between'>
              <div className='text-start ml-10 lg:text-end text-sm'>
                <h2 className='font-bold'>Full Time</h2>
                <h2>Disponibilidad inmediata</h2>
              </div>
              <div>
                <FiEdit2/> 
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10'>
            <div className='flex gap-6 text-lg'>
              <RiFolderUserLine/><p>Rol y salario actual</p>
            </div>
            <div className='flex gap-8 justify-between'>
              <div className='text-start ml-10 lg:text-end text-sm'>
                <p className='font-bold'>Full Stack</p>
                <p>Salario anual 1.000.000 clp</p>
              </div>
              <div>
                <FiEdit2/> 
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='mb-4 p-1 lg:mb-7 mt-4 lg:mt-10'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-2xl'>
                Habilidades
              </h1>
              <FiEdit2 className='mt-2'/> 
            </div>
            <div className='flex gap-5 lg:gap-12'>
              <div className=' flex-col'>
                <h1 className='mb-4'>Avanzado</h1>
                <h1 className='mb-4'>Experimentado</h1>  
                <h1 className=' mt-2'>Principiante</h1> 
              </div>
              <div className='flex-col space-y-3'>
                <div className=' md:flex lg:flex'>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                </div>
                <div className='md:flex lg:flex gap-5'>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                </div>                
                <div className='md:flex lg:flex'>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                </div>
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='lg:flex-col p-1 mb-4 lg:mb-7 mt-4 lg:mt-10'>
            <h1 className=' text-2xl mb-10'>Educación</h1>
            <div className=' flex justify-between'>
              <div>
                <h1 className=' text-blue-700 text-sm font-bold'>
                  fecha
                </h1>
                <h1 className='text-2xl'>
                  lugar
                </h1>
                <h1 className=' text-blue-700 text-sm font-bold'>
                  titulo
                </h1>
              </div>
              <div className=' flex gap-5 justify-between'>
                <FiEdit2/><RiDeleteBinLine/>
              </div>
            </div>
          </div>
        </div>   
    </div>
  )
}
