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
        <div className='w-72 pt-10 h-screen my-5 bg-fill-light rounded-tr-3xl'>
          <Dashboard/>
        </div>
        <div className='my-10 ml-20 w-screen m-12'>
          <h1 className=' font-bold text-2xl mb-4'>¡Bienvenido!</h1><br/><br/>
          <div className='flex justify-between mb-6'>
            <div className='flex gap-6 text-lg'>
              <GrDocumentTransfer/> <h1>sube tu Cv </h1>
            </div>
            <div className='flex gap-8' >
            <h2 className='text-sm'> ejemplo</h2>
            <FiEdit2/>              
            </div>
          </div>
          <hr className=' border-black'/>
          <div className=' flex justify-between mb-7 gap-6 mt-10'>
            <div className='flex'>
              <SlUser className=' w-11 h-11 mr-7'/>
              <div>
                <h1 className=' font-bold text-xl'>nombre apellido</h1>
                <p className=' text-lg'>pais</p>  
              </div>
            </div>
            <div className='flex'>
              <FiEdit2/>     
            </div>
          </div>
          <div className='flex justify-start gap-14 mb-7'>
            <div className='flex gap-5'>
              <AiOutlineMail className=' text-xl'/>
              <p>correo</p>
            </div>
            <div  className='flex gap-5'>
              <AiOutlinePhone className=' text-xl'/>
              <p>telefono</p>
            </div>
            <div>
              <BsLinkedin className=' rounded-3xl w-6 h-6'/>
            </div>
            <div>
              <BsGithub className=' w-6 h-6'/>
            </div>
          </div>
          <hr className=' border-black'/>
          <div className='flex  justify-between mb-7 mt-10'>
            <div className='flex gap-6 text-lg'> 
              <MdOutlineBookmarkAdded/><h2>Experiencia Laboral</h2>
            </div>
            <div className='flex gap-8 justify-between'>
              <div className=' text-end text-sm'>
                <h2 className='font-bold'>Experiencia</h2>
                <h2>inglés</h2>
              </div>
              <div>
                <FiEdit2/> 
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='flex justify-between mb-7 mt-10'>
            <div className='flex gap-6 text-lg'>
              <MdOutlineEventAvailable/><p>Disponibilidad</p>
            </div>
            <div className='flex gap-8 justify-between'>
              <div className='text-end text-sm'>
                <h2 className='font-bold'>Full Time</h2>
                <h2>Disponibilidad inmediata</h2>
              </div>
              <div>
                <FiEdit2/> 
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='flex justify-between mb-7 mt-10'>
            <div className='flex gap-6 text-lg'>
              <RiFolderUserLine/><p>Rol y salario actual</p>
            </div>
            <div className='flex gap-8 justify-between'>
              <div className='text-end text-sm'>
                <p className='font-bold'>Full Stack</p>
                <p>Salario anual 1.000.000 clp</p>
              </div>
              <div>
                <FiEdit2/> 
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className=' mb-7 mt-10'>
            <div className='flex justify-between mb-8'>
              <h1 className='text-2xl'>
                Habilidades
              </h1>
              <FiEdit2/> 
            </div>
            <div className='flex gap-12'>
              <div className=' flex-col'>
                <h1 className='mb-4'>Avanzado</h1>
                <h1 className='mb-4'>Experimentado</h1>  
                <h1 className=' mt-2'>Principiante</h1> 
              </div>
              <div className='flex-col space-y-3'>
                <div className=' flex'>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                </div>
                <div className='flex gap-5'>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                </div>                
                <div className='flex'>
                  <div className="border-solid border border-light-purple p-1 pt-0 pb-0 rounded-md">html</div>
                </div>
              </div>
            </div>
          </div>
          <hr className='border-black'/>
          <div className='flex-col mb-7 mt-10'>
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
