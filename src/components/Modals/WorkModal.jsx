import Modal from '../Modals/Index';
import * as FormField from '../../components/Forms';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';

const valueForm = { devExperience: '', englishLevel: '' };

const validateSchemaWorkExperience = Yup.object().shape({
  englishLevel: Yup.string().required('Debes seleccionar un nivel de ingles.'),
  devExperience: Yup.string().required('Debes seleccionar una opción.')
});
  const YearsOfExperience = [
    'No poseo experiencia laboral',
    'Entre 0 a 1 año de experiencia laboral',
    'Entre 1 a 2 años de experiencia laboral',
    'Entre 2 a 3 años de experiencia laboral',
    'Más de 4 años de experiencia laboral'
  ];

  const englishLevel = [
    'Ninguno',
    'Principiante A1',
    'Principiante A2',
    'Pre-intermedio B1',
    'Intemedio B2',
    'Intermedio avanzado C1',
    'Avanzado C2'
  ];

const WorkModal = () => {


  return (
    <Modal title="Experiencia Laboral">
      {(props) => (
      <Formik
        initialValues={valueForm}
        validationSchema={validateSchemaWorkExperience}
        onSubmit={async values => {
          try {
            await apiClient.put('/users/work-experience', {
              englishLevel: values.englishLevel,
              devExperience: values.devExperience.split(',')[0].trim()
            });
            console.log(values);
            return Swal.fire({
              title: '¡Datos modificados!',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#2738F5'
            }).then(()=>props.setShowModal(false))
              .then(()=>window.location.reload()); 
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ errors, touched, isSubmitting }) => (
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
            {isSubmitting ? (
              <div>
                <progress className="animate-pulse progress w-56">
                </progress>
              </div>
            ) : null}
          </div>
        </Form>
        )}
      </Formik>
      )}
    </Modal>
  );
};

export default WorkModal;
