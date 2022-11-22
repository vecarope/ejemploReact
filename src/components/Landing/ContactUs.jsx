import React from 'react';
import ImgIntersec from '../../assets/design/Intersect.png';

const ContactUs = () => {
  return (
    <section
      className="animate__animated animate__fadeIn flex justify-center items-center min-h-screen
    md:h-5/6 md:py-11"
    >
      <div className="container flex mx-auto flex-col md:flex-row">
        <div className="md:text-center md:w-1/2">
          <h2 class="py-8 px-4 md:py-1.5 font-sans text-5xl md:text-3xl font-semibold text-dark-purple">
            DEVsafiamos el sistema
          </h2>
          <h5 className="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
            ¿Escasez de talento Senior? No te preocupes, en Devsafio encontrarás
            el talento que necesitas en nuestro programa Mentorías.
          </h5>

          <h5 className="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
            Completa el formulario y te contactaremos en breve para acompañarte
            en la búsqueda de Talento TI que necesitas.
          </h5>

          <img
            className="w-10 md:w-4/5 md:mx-auto"
            src={ImgIntersec}
            alt="img"
          />

          <h5 className="py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-4/5 md:mx-auto">
            <b>
              ¡Agenda una asesoría con nosotros si quieres saber más sobre cómo
              acelerar y potenciar tu próximo Talento TI!
            </b>
          </h5>

          <button className="btn btn-blue" type="submit">
            AGENDAR
          </button>
        </div>

        <div class="card bg-[#140B34] w-auto h-auto md:w-1/2 mx-auto items-center">
          <form class="md:w-3/4 md:h-64 md:mx-3 flex flex-wrap grid ">
            <h5 className="text-white py-4 px-4 leading-relaxed font-sans text-xl font-medium md:w-6/6 md:mx-auto">
              <b>
                Si eres empresa y buscas talento TI, déjanos tu información en
                este formulario. En breve te contactaremos:
              </b>
            </h5>

            <div className="grid grid-cols-2">
              <div className="flex-initial w-64 m-5 ">
                <label className="text-white font-sans ">Nombre *</label>
                <br />
                <input
                  type="display:flex"
                  className="input input-bordered"
                  placeholder="Ingrese Nombre"
                />
              </div>

              <div className="flex-initial w-64 m-5 ">
                <label className="text-white font-sans ">Nombre *</label>
                <br />
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Ingrese Nombre"
                />
              </div>

              <div className="flex-initial w-64 m-5 ">
                <label className="text-white font-sans ">Nombre *</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Ingrese Nombre"
                />
              </div>

              <div className="flex-initial w-64 m-5 ">
                <label className="text-white font-sans ">Nombre *</label>
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="Ingrese Nombre"
                />
              </div>
            </div>

            <div className="grow h-auto w-auto m-5 flex flex-wrap grid grid-cols-1 ">
              <label className="text-white font-sans ">
                ¿A qué empresa perteneces? *
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Ingrese Nombre"
              />
            </div>

            <p className="text-white font-sans flex">
              Cargo/área de preferencia que buscas contratar *
            </p>

            <div className="hover:auto-cols-min">
              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>

              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>

              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>

              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>

              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>

              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>

              <div className="form-control grow h-auto w-auto m-5 grid grid-cols-1">
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text text-white">Remember tyu</span>
                </label>
              </div>
            </div>

            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg ">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 "
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
            </div>

            <button className="btn btn-active">Button</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
