import * as FormField from '../../Forms';
import { Form, Formik } from 'formik';
import { GrAddCircle } from 'react-icons/gr';
import '../../../assets/componentsCSS/button.css';
// import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { valueDataSkillsTools } from '../../../data/ModalInitialData';
import { validateDataSkillsTools } from '../../../validation/validateModals';

export const ToolsModal = (props) => {
  return (
    <>
      <Formik
        initialValues={valueDataSkillsTools}
        validationSchema={validateDataSkillsTools}
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
                name="tools"
                id="tools"
                touched={touched}
                errors={errors}
                // values={values}
              />
            </div>
            <div className="flex w-auto justify-end">
              <button className="flex">
                <GrAddCircle />
              </button>
            </div>
            <div className="container py-8 justify-center">
              <button className="btn btn-blue" type="submit">
                Guardar Cambios
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
