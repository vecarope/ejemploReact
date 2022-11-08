import React from 'react';
import coverImage from '../../assets/design/cover_image.png';


const LandingHero = () => {
  return (
    <section id="hero">
    <div class="bg-gradient-to-b from-mid-light-blue via-mid-blue to-dark-purple min-h-screen flex justify-center items-center h-screen p-[5rem]" >

      <div class="" >

        <div class="text-white">
          <h1 class="text-5xl py-2">
            <strong>Buscas talento TI?</strong>
          </h1>
          
          <h2 class="text-3xl">
            Contrata <span class="text-light-purple font-semibold">Talento TI</span> rápido, inteligente y eficiente
          </h2>
          <h3 class="text-1xl py-2">
            Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas
          </h3>
          <br />

        </div>


        <div class="">
          <button
            type="submit"
            class="rounded-lg  bg-white text-center text-mid-light-blue p-[1rem] uppercase">
            <strong>Quiero contratar</strong>
          </button>
        </div>

      </div>
      <div>
        <img src={coverImage} alt="video devsafio" />
      </div>
    </div>
    </section>

  );

};

export default LandingHero;
