import Modal from './Index';
import * as FormField from '../Forms';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';

const dataForm = {
  stack: '',
  currentSalary: ''
};
let validateNumber = /^([0-9])*$/;

const validateForm = Yup.object().shape({
  stack: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 items')
    .required('Esta opcion es requerida.'),
  currentSalary: Yup.string()
    .trim()
    .required('Debes ingresar un valor.')
    .matches(validateNumber, {
      excludeEmptyString: true,
      message: 'El salario debe ser solo numeros.'
    })
});

const cargo = [
  'Desarrollador/a Full Stack',
  'Desarrollador/a Back End',
  'Desarrollador/a Front End',
  'Diseñador/a UX / UX Research o UI',
  'Desarrollador/a Movil',
  'Data Scientist o especialista machine learning',
  'Ingenería de Datos'
];
export const RoleAndCurrentSalary = (props) => {

  const { updateProfile } = props; 

  return (
    <Modal title="Rol y salario:">
      {(props) => (
        <Formik
          initialValues={dataForm}
          validationSchema={validateForm}
          onSubmit={async (values) => {
            try {
              await apiClient.put('/users/stack-salary', {
                stack: values.stack.toString(),
                currentSalary: values.currentSalary.toString()
              });
              return Swal.fire({
                title: '¡Datos modificados!',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2738F5'
              })
                .then(() => props.setShowModal(false))
                .then(updateProfile(values)); 
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
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
                  />
                  <FormField.InputField
                    label="Salario actual:"
                    touched={touched}
                    errors={errors}
                    required
                    name="currentSalary"
                    id="currentSalary"
                    className="w-50"
                  />
                </div>
              </div>
              <div className="container py-8 justify-center">
                <button className="btn btn-blue" type="submit">
                  Guardar Cambios
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};
