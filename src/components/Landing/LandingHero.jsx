import React from 'react';
import coverImage2 from '../../assets/design/cover_image.png';
import coverImage from '../../assets/design/cover_image_complete.png';
const LandingHero = () => {
  return (
    <section id="hero">
    <div class="bg-gradient-to-b from-mid-light-blue via-mid-blue to-dark-purple min-h-screen flex justify-center items-center h-screen p-[2rem]" >
      <div className='lg:flex '>
        <div class="sm:justify-center py-3 lg:hidden" >
          <img src={coverImage} alt="MujerDev" />
        </div>
        
        <div class="" >
          <div class="text-white ">
            <h1 class="px-0 sm:py-2 text-3xl sm:text-5xl ">
              <strong>¿Buscas talento TI?</strong>
            </h1>
            <h2 class="text-sm py-3 sm:text-3xl ">
              Contrata <span class="text-[#008FF7] font-semibold">Talento TI</span> rápido, inteligente y eficiente
            </h2>
            <h3 class="text-1xl py-2 lx:pr-64">
              Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas
            </h3>
            <br />
            <button
              type="submit"
              class="rounded-full  bg-white text-center text-mid-light-blue p-[1rem] uppercase">
              <strong>Quiero contratar</strong>
            </button>
          </div>
        </div>
        
        
      </div>
      <div class="hidden lg:block -mx-20 -mb-56">
          <img src={coverImage2} alt="MujerDev" />
      </div>
    </div>
    
    </section>

  );

};

export default LandingHero;
