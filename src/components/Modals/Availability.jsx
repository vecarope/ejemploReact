import Modal from './Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { time, availability } from '../../data/FormData';
import { validateAvailability } from '../../validation/validateModals';
import { valueAvailability } from '../../data/ModalInitialData';

const Availability = (props) => {

  const { updateProfile } =props; 
  const {data} =props; 

  return (
    <Modal title="Disponibilidad">
      {(props) => (
        <Formik
          initialValues={valueAvailability}
          validationSchema={validateAvailability}
          onSubmit={async (values) => {
            try {
              await apiClient.put('/users/availability', {
                workAvailability: values.workAvailability.toString(),
                availabilityStatus: values.availabilityStatus.toString()
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
          {({ errors, touched}) => (
            <Form>
              <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
                <FormField.InputCheckbox
                  label="Indícanos tu disponibilidad laboral:"
                  touched={touched}
                  errors={errors}
                  required
                  name="workAvailability"
                  id="workAvailability"
                  data={availability}
                  checked={data.workAvailability}
                />
                <FormField.InputCheckbox
                  label="Indicanos tu tipo incorporación:"
                  touched={touched}
                  errors={errors}
                  required
                  name="availabilityStatus"
                  id="availabilityStatus"
                  data={time}
                />
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

export default Availability;
