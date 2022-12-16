import {
  InputCheckbox,
  InputField,
  InputRadio,
  InputSelect
} from '../../../components/Forms';

export const EducationProfile = ({ errors, touched }) => {
  const educationLevel = [
    'Universitaria Completa',
    'Universitaria Incompleta o en curso',
    'Instituto profesional o CFT completa',
    'Instituto profesional o CFT incompleta o en curso',
    'Educación Media completa',
    'Educación Media incompleta',
    'Escolar completeta',
    'Escolar incompleta',
    'Postgrado completo',
    'Postrago incompleto'
  ];

  const typeInstitution = [
    'Postgrado',
    'Instituto',
    'Universidad',
    'Bootcamp',
    'Otro'
  ];

  const educationStatus = ['Egresado', 'Titulado', 'En curso'];

  const englishLevel = [
    'Ninguno',
    'Principiante A1',
    'Principiante A2',
    'Pre-intermedio B1',
    'Intemedio B2',
    'Intermedio avanzado C1',
    'Avanzado C2'
  ];

  return (
    <div className="mt-10  sm:mt-0">
      <div className="my-8 ">
        <h3 className="text-2xl mx-12 md:ml-16 font-sans font-bold text-[#140B34]">
          PERFIL EDUCACIONAL
        </h3>
      </div>
      <div className="md:grid md:grid-cols-1  ">
        <div className="mt-5 my-4 md:col-span-7 md:mt-0">
          <div className="grid grid-cols-6  mx-10 md:mx-40 md:gap-x-6 md:gap-y-6">
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor="typeInstitution"
                className="block  md:text-xl md:my-4 font-light text-[#140B34]"
              >
                ¿Cuál es tu máximo nivel educacional?
                <span class=" text-red-700">*</span>
              </label>
              <select
                id="typeInstitution"
                name="typeInstitution"
                autoComplete="education-level"
                className="mt-1 block w-full rounded-md border  py-2 px-3 border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300  sm:text-xl"
              >
                <option disabled selected>
                  Selecionar
                </option>
                {educationLevel.map((educationLevel) => (
                  <option>{educationLevel}</option>
                ))}
              </select>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <div
                htmlFor="stack"
                className="block text-justify font-bold my-4 text-sm md:text-2xl text-[#140B34]"
              >
                {' '}
                A continuación, indícanos 2 (dos) carreras profesionales,
                cursos, bootcamp o certificaciones cursadas relacionadas al
                desarrollo de software, diseño o TI (puedes indicarnos las más
                importantes o actuales):
              </div>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor=""
                className="block  md:text-xl my-4 font-sans font-bold text-[#140B34]"
              >
                Nombre de la carrera, curso, bootcamp o certificación 1:
                <span class=" text-red-700">*</span>
              </label>
              <input
                type="text"
                name="course1"
                id="course1"
                autoComplete="give-course1"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 "
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor=""
                className="block md:text-xl my-4 font-light text-[#140B34]"
              >
                Nombre institución 1:<span class=" text-red-700">*</span>
              </label>
              <input
                type="text"
                name="Institutecourse1"
                id="Institutecourse1"
                autoComplete="give-course1"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 "
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor="typeInstitute"
                className="block md:text-xl my-4 font-light text-[#140B34]"
              >
                Tipo institución 1:<span class=" text-red-700">*</span>
              </label>
              <select
                id="typeInstitute"
                name="typeInstitute"
                autoComplete="type-Institution"
                className="mt-1 block w-full rounded-md border  py-2 px-3 border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300  sm:text-xl"
              >
                <option disabled selected>
                  Selecionar
                </option>
                {typeInstitution.map((typeInstitution) => (
                  <option>{typeInstitution}</option>
                ))}
              </select>
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor=""
                className="block md:text-xl my-4 font-sans font-bold text-[#140B34]"
              >
                Nombre de la carrera, curso, bootcamp o certificación 2:
              </label>
              <input
                type="text"
                name="course1"
                id="course1"
                autoComplete="give-course1"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 "
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor=""
                className="block md:text-xl my-4 font-light text-[#140B34]"
              >
                Nombre institución 2:
              </label>
              <input
                type="text"
                name="Institutecourse1"
                id="Institutecourse1"
                autoComplete="give-course1"
                className="mt-1 block w-full rounded-md border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300 "
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <label
                htmlFor="typeInstitute"
                className="block md:text-xl my-4 font-light text-[#140B34]"
              >
                Tipo institución 2:
              </label>
              <select
                id="typeInstitute"
                name="typeInstitute"
                autoComplete="type-Institution"
                className="mt-1 block w-full rounded-md border  py-2 px-3 border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300  sm:text-xl"
              >
                <option disabled selected>
                  Selecionar
                </option>
                {typeInstitution.map((typeInstitution) => (
                  <option key={typeInstitution}>{typeInstitution}</option>
                ))}
              </select>
            </div>
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="educationStatus"
                className="block md:text-xl my-4 font-light text-[#140B34]"
              >
                ¿Cuál es tu situacion educacional actual ( Bootcamp, diplomados,
                universidad, curso u otros)?
              </label>
              <select
                id="EducationStatus"
                name="EducationStatus"
                autoComplete="status-education"
                className="mt-1 block w-full rounded-md border  py-2 px-3 border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300  sm:text-xl"
              >
                <option disabled selected>
                  Selecionar
                </option>
                {educationStatus.map((educationStatus) => (
                  <option>{educationStatus}</option>
                ))}
              </select>
            </div>
            <div className="col-span-6 sm:col-span-2 pt-6">
              <label
                htmlFor="englishLevel"
                className="block md:text-xl my-4 font-light text-[#140B34]"
              >
                Nivel inglés
              </label>
              <select
                id="englishLevel"
                name="english"
                autoComplete="english-level"
                className="mt-1 block w-full rounded-md border  py-2 px-3 border-[#E2F2FE]-200 bg-[#E2F2FE] shadow-sm focus:[#E2F2FE] 
                focus:ring-[#E2F2FE]-300  sm:text-xl "
              >
                <option disabled selected>
                  Selecionar
                </option>
                {englishLevel.map((englishLevel) => (
                  <option>{englishLevel}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="submit"
              className=" mx-32 my-10  rounded-md border border-transparent bg-[#2738F5] py-2 px-4  text-sm font-medium text-white shadow-sm hover:bg-[#2738F5]-700 focus:outline-none focus:ring-2 focus:ring-[#2738F5]-500 focus:ring-offset-2"
            >
              CONTINUAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
