import React from 'react';
import SelectHability from '../../components/User/Test/SelectHability';
import Habilities from '../../components/User/Test/Habilities';
import CardsTest from '../../components/User/Test/CardsTest';
import { AiFillStar, AiFillInfoCircle } from 'react-icons/ai';


export default function UserTest() {
  return (
    <div className="container my-10 ml-4 md:mx-20 grid grid-cols-1 mr-4">
      <h1 className="font-bold mb-4 lg:mb-8 text-xl lg:text-3xl">
        Completa los test técnicos
      </h1>
      <p className="font-medium mb-5 lg:mb-9 text-lg md:text-lg text-justify">
        De esta forma podemos conocer qué trabajos encajan mejor contigo. 
        Haz los test de habilidades que te gustaría continuar usando para tu próximo trabajo.
      </p>
      <br></br>
      <p className="font-medium text-justify text-lg md:text-lg mb-5">
        Marcamos tus
        <b> habilidades destacadas </b> 
        según tu
        <b className="text-primary"> perfil </b> 
        con una estrella <AiFillStar className='text-yellow-400 text-md'/>
      </p> 
      <div className='text-xs text-justify flex pb-5'>
        <AiFillInfoCircle className='text-sm'/> 
        <p>Tip: Si temes fallar un test, no te preocupes. Puedes volver a realizarlo luego de 3 meses.</p>
      </div>
      <h2 className='font-bold text-lg pb-5'>
        Habilidades
      </h2>
      <div className='pb-5'>
        <SelectHability/>
      </div >
      <Habilities />
      <div className='grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ml-10'>
      <CardsTest/>
      </div>
    </div>
  )
}
