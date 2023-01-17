import Modal from '../Modals/Index';
import * as FormField from '../Forms';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { englishLevel, YearsOfExperience } from '../../views/ApplicationForm/data/FormData';

const valueForm = { devExperience: '', englishLevel: '' };

const validateSchemaWorkExperience = Yup.object().shape({
  englishLevel: Yup.string().required('Debes seleccionar un nivel de ingles.'),
  devExperience: Yup.string().required('Debes seleccionar una opción.')
});

const WorkModal = (props) => {

  const {updateProfile} = props; 

  return (
    <Modal title="Experiencia Laboral">
      {(props) => (
      <Formik
        initialValues={valueForm}
        validationSchema={validateSchemaWorkExperience}
        onSubmit={async values => {
          try {
            const payload ={
              englishLevel: values.englishLevel,
              devExperience: values.devExperience.split(',')[0].trim(),
            }
            await apiClient.put('/users/work-experience', payload );
            console.log(values);
            return Swal.fire({
              title: '¡Datos modificados!',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#2738F5'
            }).then(()=>props.setShowModal(false))
              .then(updateProfile(payload));
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ errors, touched }) => (
        <Form>
          <div className="col-span-6 sm:col-span-3">
            <FormField.InputRadio
              label=" ¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?"
              touched={touched}
              errors={errors}
              id="devExperience"
              name="devExperience"
              required
            >
              {YearsOfExperience}
            </FormField.InputRadio>
          </div>
          <div className="col-span-6 sm:col-span-2 py-2">
            <FormField.InputSelect
              label={'Nivel inglés'}
              touched={touched}
              errors={errors}
              id="englishLevel"
              name="englishLevel"
              data={englishLevel}
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

export default WorkModal;
