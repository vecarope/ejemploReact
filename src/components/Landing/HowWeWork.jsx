import 'animate.css';
import OvalBlue from '../../assets/design/oval.png';
const HowWeWork = () => {
  return (
    <section class="animate__animated animate__fadeIn flex justify-center items-center h-screen md:h-5/6 md:py-11">
      <div class="container flex mx-auto flex-col md:flex-row">
        <div class="md:text-center md:w-1/2 ">
          <div class="container md:hidden ">
            <img
              src={OvalBlue}
              alt="oval"
              class="object-left-top mx-10 ... opacity-50"
            />
          </div>
          <h2 class="py-8 px-4 md:py-1.5 font-sans text-5xl md:text-3xl font-semibold text-dark-purple">
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
        <div class="container md:hidden">
          <img
            src={OvalBlue}
            alt="oval"
            class="object-right-top mx-80 ... opacity-30 w-11"
          />
        </div>
        <div class="w-full h-full md:w-1/2 mx-auto items-center">
          <div class="md:w-3/4 md:h-64 md:mx-3">
            <iframe
              class="w-full aspect-video ... h-full md:w-11/12"
              title="Devsafio:¿Cómo funcionamos?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope picture-in-picture"
              width="640"
              height="360"
              allowfullscreen
              frameborder="0"
              marginwidth="3"
              src="https://www.youtube-nocookie.com/embed/z5NPi7WrViU?controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;loop=0&amp;hl=en&amp;iv_load_policy=1&amp;wmode=transparent&amp;widget_referrer=https%3A%2F%2Fdevsafio.com%2F&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fdevsafio.com&amp;widgetid=1"
            >
              Error al cargar video.
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
