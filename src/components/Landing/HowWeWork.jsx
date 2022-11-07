import React from 'react';
import coverVideo from '../../assets/design/cover-video.png';
const HowWeWork = () => {
  // const urlVideo = 'https://www.youtube.com/watch?v=z5NPi7WrViU';
  return (
    <section class="flex justify-center items-center h-screen md:h-2/3 flex-col  md:flex-row">
      <div class="md:text-center w-96 md:w-2/4 ">
        <h2 class="font-sans text-5xl md:text-3xl font-semibold text-dark-purple">
          ¿Cómo funcionamos?
        </h2>
        <h5 class="py-4 font-sans text-xl font-medium md:w-4/5 md:mx-auto">
          Da click a nuestro video y en sólo 60 segundos conoce{' '}
          <span class="text-light-purple">Devsafio</span> y cómo estamos{' '}
          <span class="text-light-purple">cambiando el mundo TI</span>,
          acelerando y potenciando las células tecnológicas.
        </h5>
      </div>
      <div class="md:w-1/4">
        {/* <iframe src="https://www.youtube.com/embed/z5NPi7WrViU" title="Devsafio" frameBorder={0}> 
            </iframe>*/}
        <img src={coverVideo} alt="video devsafio" />
      </div>
    </section>
  );
};

export default HowWeWork;
