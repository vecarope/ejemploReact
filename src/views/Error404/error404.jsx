import React from "react"
import '../../assets/componentsCSS/button.css';
import eror404 from '../../assets/design/404error.jpg';
const Error404 = () => {
  return (
    <section>
      <div className="hero  bg-no-repeat bg-cover h-screen" style={{ backgroundImage: `url("https://img.freepik.com/vector-gratis/concepto-fallo-tecnico-landing-page_52683-12188.jpg?w=740&t=st=1668951489~exp=1668952089~hmac=c10d3174bd065e7cc00f459d6bb6223b19921a0a7bc6329732fe69c0fe314e4d")` }}>
          <div className="">
            <h1 class=" mb-5 text-5xl font-bold"><strong>Oops</strong> </h1><br />
            <p class=" mb-5 "><strong>Parece que perdiste la ruta</strong>, presiona el siguiente botón para encontar la ruta a tu primer empleo como Developer </p>
            <button className="btn btn-blue">DEVSAFIO</button>
          </div>
      </div>
    </section>
  );
};

export default Error404;