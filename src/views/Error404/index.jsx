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
      <div  className=" hero  bg-no-repeat bg-cover h-screen "
            style={{
              backgroundImage:`url(${error404})`}}>
        <div className=" text-center mx-3  sm:m-10 backdrop-opacity-20 backdrop-invert bg-white/30 rounded-lg">
          <h1 className=" mt-8 mb-5 text-5xl sm:text-8xl font-bold hover:decoration-4">
            Oops
          </h1>
          <br />
          <p className="bg-[error404] mb-5  text-3xl sm:text-5xl ">
            <strong>Parece que perdiste la ruta</strong>, presiona el siguiente
            botón para encontrar el camino a tu primer empleo como Developer{' '}
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
