import {
  InputCheckbox,
  InputField,
  InputRadio
} from '../../../components/Forms';
const availability = ['Full Time', 'Part Time', 'Freelance'];

const status = [
  'Quiero trabajo desde mi ciudad actual',
  'Estoy disponible para migrar de mi ciudad dentro de mi país',
  'Estoy disponible para migrar a otro país'
];

const visaStatus = [
  'Estados Unidos',
  'Unión Europea',
  'Mi país de residencia actual',
  'Otros países'
];

export const JobType = ({ errors, touched }) => {
  return (
    <>
      <div className="mt-10  sm:mt-0">
        <div className="my-8 ">
          <h3 className="text-2xl ml-10 md:ml-16 font-sans font-bold text-dark-purple">
            ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
          </h3>
        </div>
        <div className="md:grid md:grid-cols-1 md:gap-8 ">
          <div className="mt-5 my-4 md:col-span-2 md:mt-0">
            <div className="grid grid-cols-6 mx-10 md:mx-40 md:gap-x-6 md:gap-y-6">
              <div className="col-span-12 sm:col-span-6">
                <InputField
                  label={
                    'Déjanos una breve descripción con respecto tu trabajo ideal'
                  }
                  type="text"
                  name="idealWorkComment"
                  id="idealWorkComment"
                  required
                  placeholder="Ingresa tu comentario aquí..."
                  touched={touched}
                  errors={errors}
                />
              </div>
              <div className="col-span-8 sm:col-span-2">
                <div className="form-control">
                  <InputCheckbox
                    label="Indícanos tu disponibilidad laboral:"
                    touched={touched}
                    errors={errors}
                    required
                    name="workAvailability"
                    id="workAvailability"
                  >
                    {availability}
                  </InputCheckbox>
                </div>
              </div>
              <div className="col-span-8 sm:col-span-2">
                <InputRadio
                  label="¿Qué describe mejor tu situación actual?"
                  touched={touched}
                  errors={errors}
                  id="relocationOption"
                  name="relocationOption"
                  required
                >
                  {status}
                </InputRadio>
              </div>
              <div className="col-span-8 sm:col-span-2">
                <div className="form-control">
                  <InputCheckbox
                    label="¿Cuentas con Visa de trabajo activa en?"
                    touched={touched}
                    errors={errors}
                    required
                    name="visa"
                    id="visa"
                  >
                    {visaStatus}
                  </InputCheckbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
