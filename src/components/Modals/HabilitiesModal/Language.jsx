/* eslint-disable array-callback-return */
import * as FormField from '../../Forms';
import { Form, Formik } from 'formik';
import { GrAddCircle } from 'react-icons/gr';
import '../../../assets/componentsCSS/button.css';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { validateDataSkillsLanguage } from '../../../validation/validateModals';
import apiClient from '../../../services/api.service';

export const LanguageModal = (props) => {
  const [lenguageAPI, setLenguageAPI] = useState(null);
  const [userLanguaje, setUserLanguaje] = useState(props.info);
  const [showComponent, setshowComponent] = useState(false);

  const extraComponent = () => {
    setshowComponent(true);
  };

  const getAllLanguajes = async () => {
    const { data } = await apiClient('/dev-languages');
    setLenguageAPI(data);
  };

  useEffect(() => {
    getAllLanguajes();
  }, []);

  let languajesFilter = lenguageAPI?.filter((el) => {
    let found = false,
      x = 0;
    while (x < userLanguaje.length && !found) {
      if (el.name === userLanguaje[x].name) found = true;
      x++;
    }
    if (!found) return el;
    // return userLanguaje.find((l) => l.name !== el.name);
  });

  const handlerChangeEvent = (e) => {
    let add = languajesFilter.filter((el) => el.name === e.target.value);
    setUserLanguaje([...userLanguaje, ...add]);
    setshowComponent(false);
  };
  return (
    <>
      <Formik
        initialValues={{ lenguage: userLanguaje }}
        validationSchema={validateDataSkillsLanguage}
        onSubmit={async (values) => {
          console.log('VALUES-->', values);
          try {
            // await apiClient.put('/users/cv', values);
            return Swal.fire({
              title: '¡Lenguaje modificado!',
              confirmButtonText: 'Cerrar',
              confirmButtonColor: '#2738F5'
            }).then(() => props.setShowModal(false));
            // .then(updateProfile(values));
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="col-span-7 md:col-span-4 lg:col-span-6 md:mx-auto w-full">
              <FormField.InputSelectArray
                data={userLanguaje}
                name="lenguage"
                id="lenguage"
                touched={touched}
                errors={errors}
                values={values}
                edit={true}
              />
            </div>
            <div className="flex w-auto justify-end">
              <button className="flex" type="button" onClick={extraComponent}>
                <GrAddCircle />
              </button>
            </div>
            {showComponent !== false ? (
              <>
                <div className="col-span-6 sm:col-span-6">
                  <FormField.InputSelect
                    label={'Indica la tecnología:'}
                    touched={touched}
                    errors={errors}
                    name="lenguageTwo"
                    id="lenguageTwo"
                    data={languajesFilter.map((e, index) => e.name)}
                    onChange={(e) => {
                      handlerChangeEvent(e);
                    }}
                  />
                </div>
              </>
            ) : null}

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
