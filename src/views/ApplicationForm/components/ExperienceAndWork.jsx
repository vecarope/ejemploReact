//import { ErrorMessage, Field } from 'formik';

import {
  InputCheckbox,
  InputField,
  InputRadio
} from '../../../components/Forms';

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
              <label className="block font-light text-base text-[#575253]">
                Subir como documento público en Google Drive o similar
              </label>
              <InputField
                type="text"
                name="cvUrl"
                id="cvUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="UrlLinkedin"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                URL de LinkedIn
              </label>
              <InputField
                type="text"
                name="linkedinUrl"
                id="linkedinUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                URL de GitHub
              </label>
              <InputField
                type="text"
                name="githubUrl"
                id="githubUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="UrlPort"
                className="block text-xl my-4 font-medium text-[#140B34]"
              >
                URL de Portafolio/Sitio web
              </label>
              <InputField
                type="text"
                name="portfolioUrl"
                id="portfolioUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
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
              <InputCheckbox
                label="Selecciona 3 habilidades blandas que te representen"
                touched={touched}
                errors={errors}
                required
                name="additionalToolsComment"
                id="additionalToolsComment"
              >
                {SoftSkills}
              </InputCheckbox>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <InputRadio
                label=" ¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?"
                touched={touched}
                errors={errors}
                id="devExperience"
                name="devExperience"
                required
              >
                {YearsOfExperience}
              </InputRadio>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};