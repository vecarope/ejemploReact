import Modal from './Index';
import * as FormField from '../Forms';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { time, availability } from '../../views/ApplicationForm/data/FormData';

const dataAvailability = {
  workAvailability: '',
  availabilityStatus: ''
};

const validateAvailability = Yup.object().shape({
  workAvailability: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 preferencias'),
  availabilityStatus: Yup.array()
    .max(1, 'Debes elegir al menos 1 item')
    .required('Este campo es requerido.')
});

const Availability = (props) => {

  const { updateProfile } =props; 

  return (
    <Modal title="Disponibilidad:">
      {(props) => (
        <Formik
          initialValues={dataAvailability}
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
