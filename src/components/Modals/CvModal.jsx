import Modal from '../Modals/Index';
import * as FormField from '../Forms';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';

const dataCv = { cvUrl: '' };
let validateURL = /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;

const validateSchemaCV = Yup.object().shape({
  cvUrl: Yup.string()
    .trim()
    .required('Este link es requerodo.')
    .matches(validateURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link válido.'
    })
});

const CvModal = (props) => {

  const { updateProfile } = props; 

  return (
    <Modal title="Sube tu Cv">
      {(props) => (
          <Formik
            initialValues={dataCv}
            validationSchema={validateSchemaCV}
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
