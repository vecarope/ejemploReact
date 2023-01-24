import * as FormField from '../../Forms';
import { Form, Formik } from 'formik';
import '../../../assets/componentsCSS/button.css';
// import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { valueDataSkillsLanguage } from '../../../data/ModalInitialData';
import { validateDataSkillsLanguage } from '../../../validation/validateModals';

export const LanguageModal = (props) => {
  return (
    <>
      <Formik
        initialValues={valueDataSkillsLanguage}
        validationSchema={validateDataSkillsLanguage}
        onSubmit={async (values) => {
          try {
            // await apiClient.put('/users/cv', values);
            return Swal.fire({
              title: '¡Datos modificados!',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#2738F5'
            }).then(() => props.setShowModal(false));
            // .then(updateProfile(values));
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
              <FormField.InputSelectArray
                data={props.info}
                name="lenguage"
                id="lenguage"
                touched={touched}
                errors={errors}
                // values={values}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
