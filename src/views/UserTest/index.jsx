import React from 'react';
import Select from '../../components/User/Test/Select';
import Habilities from '../../components/User/Test/Habilities';
import CardsTest from '../../components/User/Test/CardsTest';
import { AiFillStar } from 'react-icons/ai';


export default function UserTest() {
  return (
    <div className="container my-10 ml-3 md:mx-20">
      <h1 className="font-bold mb-4 lg:mb-8 text-xl lg:text-3xl">
        Completa los test técnicos
      </h1>
      <p className="font-medium mb-5 lg:mb-9 text-lg md:text-lg">
        De esta forma podemos conocer qué trabajos encajan mejor contigo. 
        Haz los test de habilidades que te gustaría continuar usando para tu próximo trabajo.
      </p>
      <br></br>
      <p className="font-medium mb-5 lg:mb-9 text-lg md:text-lg">
        Marcamos tus <bold className=" font-bold">habilidades destacadas</bold> según tu <span className="text-primary font-bold">perfil </span> 
        con una estrella<span><AiFillStar className='text-yellow-400'/></span>
      </p>
      <p className='text-xs'><div className=" bg-black rounded-full w-4 mb-5"><h2 className="m-1 text-white items-center">¡</h2></div> 
        Tip: Si temes fallar un test, no te preocupes. Puedes volver a realizarlo luego de 3 meses.
      </p>
      <h2 className='font-bold text-lg'>
        Habilidades
      </h2>
      <Select />
      <Habilities />
      <CardsTest />
    </div>
  )
}
