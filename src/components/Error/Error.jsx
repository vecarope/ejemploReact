import React from 'react';

function Error(){
    return(
        <section className='container '>
            
            <div className='text-center py-10  px-6 font-sans'>
                <h1 className=' text-red-600 text-xl font-bold my-2'>Algo va mal con tu sesión!!! <span className=" ">🥺</span></h1>
                <p>
                    <a className='link text-blue-600 focus:border-blue-400' href="/login">Inicia sesión</a>
                    &nbsp;
                    para que puedas completar tu postulación. 
                </p>
            </div>
        </section>
    )
}

export default Error;