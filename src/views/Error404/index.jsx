import React from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/componentsCSS/button.css';
import error404 from '../../assets/design/error404.jpg';

const Error404 = () => {
  const navigate = useNavigate();

  const goLanding = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <section>
      <div className="flex-col">
        <div>
          <img
            className="mx-auto w-full sm:object-contain sm:w-1/2"
            src={error404}
            alt="error img"
          />
        </div>
        <div className="text-center mx-3  sm:m-10">
          <h1 className=" mt-8 mb-5 text-5xl sm:text-7xl font-bold">Oops</h1>
          <br />
          <p className="bg-[error404] mb-5  text-3xl sm:text-4xl ">
            <strong>Parece que perdiste la ruta</strong>, presiona el siguiente
            botón
            <br />
            para encontrar el camino a tu primer empleo como Developer{' '}
          </p>
          <button onClick={goLanding} className="btn btn-blue mb-8">
            DEVSAFIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
