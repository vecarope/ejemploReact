import React from "react"
import eror404 from '../../assets/design/404error.jpg';
const Error404 = () => {
  return (
    <section>
      <div>
        <img src={eror404} alt="Pagina no encontrada" />
        <h1>Oopps</h1>
      </div>
    </section>
  );
};

export default Error404;