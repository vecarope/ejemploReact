import React from 'react';

function Error(){
    return(
        <section className='container '>
            
            <div className='text-center py-40  px-6 font-sans'>
                <h1 className=' text-red-600 text-xl font-bold my-2'>Permisos insuficientes :\</h1>
                <p>No cuenta con los permisos necesarios para ingresar a la página solicitada pruebe&nbsp;
                    <a className='link text-blue-600 focus:border-blue-400' href="/login">Iniciar sesión</a>
                </p>
            </div>
        </section>
    )
}

export default Error;