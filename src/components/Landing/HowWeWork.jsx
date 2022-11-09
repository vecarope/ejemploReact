import 'animate.css';
import coverVideo from '../../assets/design/cover-video.png';
import OvalBlue from '../../assets/design/oval.png';
const HowWeWork = () => {
  // const urlVideo = 'https://www.youtube.com/watch?v=z5NPi7WrViU';
  return (
    <section class="animate__animated animate__fadeIn flex justify-center items-center h-screen md:h-4/6 md:py-8 flex-col  md:flex-row">
      <div class="md:text-center md:w-2/4 ">
        <div class="container md:hidden ">
          <img
            src={OvalBlue}
            alt="oval"
            class="object-left-top mx-10 ... opacity-50"
          />
        </div>
        <h2 class="py-8 px-4 font-sans text-5xl md:text-3xl font-semibold text-dark-purple">
          ¿Cómo funcionamos?
        </h2>
        <h5 class="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
          Da click a nuestro video y en sólo 60 segundos conoce{' '}
          <span class="text-light-purple font-semibold">Devsafio</span> y cómo
          estamos{' '}
          <span class="text-light-purple font-semibold">
            cambiando el mundo TI
          </span>
          , acelerando y potenciando las células tecnológicas.
        </h5>
      </div>

      <div class=" container md:hidden ">
        <img
          src={OvalBlue}
          alt="oval"
          class="object-right-top mx-80 ... opacity-30 w-11"
        />
      </div>
      <div class="md:w-96 ">
        {/* <iframe src="https://www.youtube.com/embed/z5NPi7WrViU" title="Devsafio" frameBorder={0}> 
            </iframe>*/}
        <img src={coverVideo} alt="video devsafio" />
      </div>
    </section>
  );
};

export default HowWeWork;
