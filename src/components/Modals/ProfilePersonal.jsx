import Modal from './Index';
import * as FormField from '../Forms';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';

let validateStrings = /^[A-ZÁÉÍÓÚ a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ a-zñáéíóú]+)?$/;
let validateNumber = /^([0-9])*$/;
let validateLinkedinURL = /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
let validateGithubURL = /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?github.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

const validateInformation = Yup.object().shape({
  phoneNumber: Yup.string()
    .trim()
    .required('Debes ingresar un telefono.')
    /* .matches(validateNumber, {
      excludeEmptyString: true,
      message: 'El telefono debe ser solo numeros.'
    }) */
    .min(8, 'El telefono es muy corto.')
    .max(18, 'El numero de telefono debe ser más corto.'),

  city: Yup.string()
    .trim()
    .required('Debes ingresar una ciudad.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'La ciuddad debe ser solo texto.'
    })
    .min(2, 'La ciudad debe tener al menos 2 letras.')
    .max(25, 'La ciudad debe ser más corta.'),
  firstName: Yup.string()
    .trim()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  lastName: Yup.string()
    .trim()
    .required('Debes ingresar un apellido.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El apellido ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El apellido debe tener al menos 2 letras.')
    .max(30, 'El apellido debe ser más corto.'),
  email: Yup.string()
    .required('El e-mail es requerido.')
    .email('El e-mail ingresado no es válido.')
    .min(6, 'El e-mail es demasiado corto.')
    .max(50, 'El e-mail ingresado es muy largo.'),
  linkedinUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateLinkedinURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link de LinkedIn válido.'
    }),
  githubUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateGithubURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link de GitHub válido.'
    })
});

export const ProfilePersonal = (props) => {
  const { updateProfile } = props;
  const { updateUser } = props;
  const { data } = props;
  const { userData } = props;

  return (
    <Modal title="Informacion Personal:">
      {(props) => (
        <Formik
          initialValues={{
            phoneNumber: data.phoneNumber || '',
            city: data.city || '',
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            linkedinUrl: data.linkedinUrl || '',
            githubUrl: data.githubUrl || ''
          }}
          validationSchema={validateInformation}
          onSubmit={async (values) => {
            try {
              await apiClient.put('/users/personal-data', values);
              return Swal.fire({
                title: '¡Datos modificados!',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2738F5'
              })
                .then(() => props.setShowModal(false))
                .then(updateProfile(values))
                .then(updateUser(values));
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid grid-cols-2 grid-rows-7 gap-x-2 gap-y-1">
                <div className="col-span-2 row-span-1">
                  <FormField.InputField
                    label="Nombre"
                    touched={touched}
                    errors={errors}
                    type="text"
                    name="firstName"
                    id="firstName"
                  />
                </div>
                <div className="col-span-2 row-span-1">
                  <FormField.InputField
                    label="Apellido"
                    touched={touched}
                    errors={errors}
                    type="text"
                    name="lastName"
                    id="lastName"
                  />
                </div>
                <div className="col-span-2 row-span-1">
                  <FormField.InputField
                    label="Email"
                    touched={touched}
                    errors={errors}
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="row-span-4 col-start-1 col-end-2">
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
                <div className="row-span-4 col-start-2 col-end-3">
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
                <div className="row-span-4 col-start-1 col-end-2">
                  <FormField.InputField
                    label={'URL de LinkedIn'}
                    type="text"
                    name="linkedinUrl"
                    id="linkedinUrl"
                    required
                    touched={touched}
                    errors={errors}
                  />
                </div>
                <div className="row-span-4 col-start-2 col-end-3">
                  <FormField.InputField
                    label={'URL de GitHub'}
                    type="text"
                    name="githubUrl"
                    id="githubUrl"
                    required
                    touched={touched}
                    errors={errors}
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
