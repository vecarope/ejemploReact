import { ErrorMessage, Field } from 'formik';
export const ExperienceAndWork = ({ errors, touched }) => {
  const SoftSkills = [
    'Líder.',
    'Resiliente/Perseverante',
    'Comunicación/Sociable',
    'Colaborativo/Empatía',
    'Aprendizaje ágil/Autónomo',
    'Flexible/Adaptable',
    'Responsable',
    'Innovador/Curioso',
    'Negociación',
    'Resolución de problemas',
    'Productividad/Iniciativa'
  ];

  const YearsOfExperience = [
    'No poseo experiencia laboral',
    'Entre 0 a 1 año de experiencia laboral',
    'Entre 1 a 2 años de experiencia laboral',
    'Entre 2 a 3 años de experiencia laboral',
    'Más de 4 años de experiencia laboral'
  ];

  return (
    <div className=" mt-10 px-0">
      <div className="my-8">
        <h3 className="text-2xl ml-16 font-sans font-bold text-[#140B34]">
          EXPERIENCIA Y TRABAJO
        </h3>
      </div>
      <div className=" md:grid-cols-2 md:gap-6">
        <div className="md:col-span-2 md:mt-0">
          <div className="grid mx-auto grid-cols-1 md:grid-cols-6 px-8 md:px-40 md:gap-x-40 md:gap-y-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="UrlCv"
                className="block text-xl my-4 font-sans font-medium text-[#140B34]"
              >
                URL CV:
              </label>
              <label
                htmlFor="stack"
                className="block font-light text-base text-[#575253]"
              >
                Subir como documento público en Google Drive o similar
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                  focus:ring-[#E2F2FE]-300 "
                required
                placeholder="Link aquí"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="UrlLinkedin"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                URL de LinkedIn
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="lastName"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                  focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
                placeholder="Link aquí"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                URL de GitHub
              </label>
              <input
                type="text"
                name="text"
                id="UrlGitHub"
                autoComplete="text"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                  focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
                placeholder="Link aquí"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="UrlPort"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                URL de Portafolio/Sitio web
              </label>
              <input
                type="text"
                name="UrlPort"
                id="UrlPort"
                autoComplete="UrlPort"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] py-2 px-3 shadow-sm focus:[#E2F2FE] 
                  focus:ring-[#E2F2FE]-300 sm:text-xl"
                required
                placeholder="Link aquí"
              />
            </div>
            <div className="w-full rounded-lg text-sm sm:col-span-full">
              <label htmlFor="" className="block  my-4 text-lg text-[#140B34]">
                Explícanos en detalle algún proyecto que te enorgullece
              </label>
              <label
                htmlFor="stack"
                className="block font-light text-base text-[#575253]"
              >
                Describe de que trató, tu rol en el proyecto y por qué lo
                elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu
                rol en el proyecto, tecnologías utilizadas, dificultades y
                soluciones, funcionalidades, objetivos, etc. Recuerda NO
                esperamos link, sino explicación)
              </label>
              <textarea className="w-full text-sm text-[#575253]">
                Escribe aquí...
              </textarea>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="stateJob"
                className="block  my-4 text-lg text-[#140B34]"
              >
                Selecciona 3 habilidades blandas que te representen:
              </label>
              <ul>
                {SoftSkills.map((SoftSkills) => (
                  <li>
                    <input
                      type="checkbox"
                      name="checkbox"
                      className=".checkbox mr-4 my-2"
                    />
                    <label className=" text-base font-light text-[#232323]">
                      {SoftSkills}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="stateJob"
                className="block text-lg font-[20px] mb-5 text-[#140B34]"
              >
                ¿Cuántos años de experiencia laboral posees en desarrollo de
                software y/o diseño?
              </label>
              <label
                htmlFor="stack"
                className="block font-light text-base text-[#575253]"
              ></label>
              <div className="form-control">
                <label className="label cursor-pointer mb-8">
                  <ul>
                    {YearsOfExperience.map((YearsOfExperience) => (
                      <li>
                        <input
                          type="radio"
                          name="radio"
                          className=".radio mr-4 my-2"
                        />
                        <span className="label-text font-light text-base text-[#232323]">
                          {YearsOfExperience}
                        </span>
                      </li>
                    ))}
                  </ul>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
