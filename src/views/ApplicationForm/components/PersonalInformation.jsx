import * as FormField from '../../../components/Forms';
import { useAuth } from '../../../context/authContext';

export const PersonalInformation = ({ errors, touched }) => {
  const { userData } = useAuth()
  const gender = ['Femenino', 'Masculino', 'No binario', 'Otro'];

  const workStatus = [
    'Cesante, busco empleo en TI por primera vez.',
    'Cesante, ya he trabajado antes en TI.',
    'Tengo trabajo en TI, pero busco otro.',
    'Tengo trabajo (en otras áreas), pero busco en TI.'
  ];

  const cargo = [
    'Desarrollador/a Full Stack',
    'Desarrollador/a Back End',
    'Desarrollador/a Front End',
    'Diseñador/a UX / UX Research o UI',
    'Desarrollador/a Movil',
    'Data Scientist o especialista machine learning',
    'Ingenería de Datos'
  ];

  return (
    <div className="mt-10 md:mt-0">
      <div className="my-8 mt-10 max-w-6xl mx-auto justify-center">
        <h3 className="text-2xl mx-auto justify-center font-sans flex font-bold text-[#140B34]">
          INFORMACIÓN PERSONAL
        </h3>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6 max-w-8xl">
        <div className="mt-5 my-4 md:col-span-2 md:mt-0">
          <div className="grid grid-cols-2 lg:grid-cols-6 mx-10 md:mx-40 md:gap-x-10 md:gap-y-6">
            <div className="col-span-6 md:col-span-3">
              <FormField.InputField
                label="Nombre"
                touched={touched}
                errors={errors}
                value={userData.firstName}
                type="text"
                name="firstName"
                id="firstName"
                disabled
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <FormField.InputField
                label="Apellido"
                touched={touched}
                errors={errors}
                value={userData.lastName}
                type="text"
                name="lastName"
                id="lastName"
                disabled
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <FormField.InputField
                label="Email"
                touched={touched}
                errors={errors}
                value={userData.email}
                type="email"
                name="email"
                id="email"
                disabled
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <FormField.InputField
                label="Número de teléfono"
                touched={touched}
                errors={errors}
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3 ">
              <FormField.InputField
                label="Ciudad"
                touched={touched}
                errors={errors}
                type="text"
                name="city"
                id="city"
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3 ">
              <FormField.InputField
                label="País/región"
                touched={touched}
                errors={errors}
                type="text"
                name="country"
                id="country"
                required
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <FormField.InputSelect
                label={'¿Con qué género te identificas?'}
                touched={touched}
                errors={errors}
                id="gender"
                name="gender"
                data={gender}
              />
            </div>
            <div className="col-span-6 md:col-span-3">
              <FormField.InputRadio
                label=" ¿Cuál es tu estado laboral actual?"
                touched={touched}
                errors={errors}
                id="employmentStatusCurrent"
                name="employmentStatusCurrent"
                required
              >
                {workStatus}
              </FormField.InputRadio>
            </div>
            <div className="col-span-6 md:col-span-3">
              <FormField.InputCheckbox
                label="¿Cuál o cuáles cargos te gustaria optar?"
                touched={touched}
                errors={errors}
                required
                name="stack"
                data={cargo}
                headText={
                  <label
                    htmlFor="stack"
                    className="block text-justify font-light text-base text-[#575253]"
                  >
                    <strong>Ten en cuenta:</strong> De acuerdo al cargo que
                    postules, te pediremos que seas capaz de demostrarlo de
                    manera practica durante el proceso de seleción.
                  </label>
                }
              ></FormField.InputCheckbox>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="submit"
              className=" mx-32  rounded-md border border-transparent bg-[#2738F5] py-2 px-4 
              text-sm font-medium text-white shadow-sm hover:bg-[#2738F5]-700 focus:outline-none focus:ring-2 focus:ring-[#2738F5]-500 focus:ring-offset-2"
            >
              CONTINUAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
