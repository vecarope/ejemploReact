import React from 'react';

const FeatureSection = () => {
  return (
    <section class="bg-fill-light w-screen h-screen m-auto">
      <header class="m-auto text-center py-6">
        <h2 class="font-sans text-2xl pt-4 font-semibold text-dark-purple">
          Sin Juniors no hay Seniors
        </h2>
        <p class="py-4 px-4 leading-relaxed font-sans text-xl font-medium mx-auto md:w-9/12">
          En este programa unimos la{' '}
          <span class="text-light-purple font-semibold">
            rapidez, eficiencia y visión de un desarrollador junior
          </span>{' '}
          junto con la{' '}
          <span class="text-light-purple font-semibold">
            experiencia y liderazgo de un senior TI,
          </span>{' '}
          quien acompañará al talento junior contratado para potenciar tu área
          digital, acá te explicamos cómo:
        </p>
      </header>
      <div class="m-auto"></div>
    </section>
  );
};

export default FeatureSection;
