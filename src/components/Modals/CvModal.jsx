import Modal from '../Modals/Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { validateCV } from '../../validation/validateModals';
import { valueCv } from '../../data/ModalInitialData';


const CvModal = (props) => {

  const { updateProfile } = props; 

  return (
    <Modal title="Sube tu Cv">
      {(props) => (
          <Formik
            initialValues={valueCv}
            validationSchema={validateCV}
            onSubmit={async values => {
              try {
                await apiClient.put('/users/cv', values);
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
              <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto"></div>
              <FormField.InputField
                label={'URL CV:'}
                type="text"
                name="cvUrl"
                id="cvUrl"
                required
                placeholder="Link aquí"
                touched={touched}
                errors={errors}
              />
              <label className="block font-light text-base text-[#575253]">
                Subir como documento público en Google Drive o similar
              </label>
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

export default CvModal;
