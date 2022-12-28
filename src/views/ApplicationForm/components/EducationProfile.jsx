import * as FormField from '../../../components/Forms';

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
              <FormField.InputSelect
                label={'¿Cuál es tu máximo nivel educacional?'}
                touched={touched}
                errors={errors}
                id="educationalLevel"
                name="educationalLevel"
                data={educationLevel}
              />
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
              <FormField.InputField
                label="Nombre de la carrera, curso, bootcamp o certificación 1"
                type="text"
                name="name"
                id="name"
                required
                placeholder="Nombre de la carrera, curso, bootcamp o certificación 1"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputField
                label="Nombre institución 1"
                type="text"
                name="institute_name"
                id="institute_name"
                required
                placeholder="Nombre institución 1"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputSelect
                label={'Tipo institución 1:'}
                touched={touched}
                errors={errors}
                id="type"
                name="type"
                data={typeInstitution}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputField
                label="Nombre de la carrera, curso, bootcamp o certificación 2:"
                type="text"
                name="name2"
                id="name2"
                placeholder="Nombre de la carrera, curso, bootcamp o certificación 2:"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputField
                label="Nombre institución 2"
                type="text"
                name="institute_name2"
                id="institute_name2"
                placeholder="Nombre institución 2"
                touched={touched}
                errors={errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-6">
              <FormField.InputSelect
                label={'Tipo institución 2:'}
                touched={touched}
                errors={errors}
                id="type2"
                name="type2"
                data={typeInstitution}
              />
            </div>
            <div className="col-span-6 sm:col-span-4">
              <FormField.InputSelect
                label={
                  '¿Cuál es tu situacion educacional actual ( Bootcamp, diplomados,universidad, curso u otros)?'
                }
                touched={touched}
                errors={errors}
                id="educationStatusCurrent"
                name="educationStatusCurrent"
                data={educationStatus}
              />
            </div>
            <div className="col-span-6 sm:col-span-2 pt-6">
              <FormField.InputSelect
                label={'Nivel inglés'}
                touched={touched}
                errors={errors}
                id="englishLevel"
                name="englishLevel"
                data={englishLevel}
              />
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
