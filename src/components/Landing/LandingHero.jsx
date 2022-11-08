import React from 'react';


const LandingHero = () => {
  return (

    <section class="landingHero" id="hero">

      <div class="container " >

        <div class="">
          <h1 class="">
            <strong>Buscas talento TI?</strong>
          </h1>
          <hr class="" />
          <h2 class="">
            Contrata <a class="">Talento TI rápido</a>, inteligente y eficiente
          </h2>
          <h3 class="">
            Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas
          </h3>
          <br />

        </div>


        <div class="">
          <button
            type="submit"
            class="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular bg-white hover:bg-white hover:md:bg-mid-blue md:bg-light-purple hover: text-blue mb:text-blue hover:text-blue md:text-blue font-sans">
            Quiero contratar
          </button>
        </div>

      </div>

    </section>

  );

};

export default LandingHero;
