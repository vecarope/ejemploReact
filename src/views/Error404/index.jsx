import React from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/componentsCSS/button.css';
// import eror404 from '../../assets/design/404error.jpg';
const Error404 = () => {
  const navigate = useNavigate();

  const goLanding = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <section>
      <div
        className="hero  bg-no-repeat bg-cover h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/vector-gratis/concepto-fallo-tecnico-landing-page_52683-12188.jpg?w=740&t=st=1668951489~exp=1668952089~hmac=c10d3174bd065e7cc00f459d6bb6223b19921a0a7bc6329732fe69c0fe314e4d")`
        }}
      >
        <div className=" text-center mx-3 sm:mx-10">
          <h1 className=" mb-5 text-5xl sm:text-8xl font-bold hover:decoration-4">
            Oops
          </h1>
          <br />
          <p className=" mb-5  text-3xl sm:text-5xl ">
            <strong>Parece que perdiste la ruta</strong>, presiona el siguiente
            botón para encontar el camino a tu primer empleo como Developer{' '}
          </p>
          <button onClick={goLanding} className="btn btn-blue">
            DEVSAFIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
