/* eslint-disable array-callback-return */
import * as FormField from '../../Forms';
import { Form, Formik } from 'formik';
import { GrAddCircle } from 'react-icons/gr';
import '../../../assets/componentsCSS/button.css';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { validateDataSkillsDatabase } from '../../../validation/validateModals';
import apiClient from '../../../services/api.service';

export const DatabasesModal = (props) => {
  const [frameworkAPI, setFrameworksAPI] = useState(null);
  const [userFramework, setUserFrameworks] = useState(props.info);
  const [showComponent, setshowComponent] = useState(false);

  const extraComponent = () => {
    setshowComponent(true);
  };
  const getAllFrameworks = async () => {
    const { data } = await apiClient('/databases');
    setFrameworksAPI(data);
  };
  useEffect(() => {
    getAllFrameworks();
  }, []);

  let frameworkFilter = frameworkAPI?.filter((el) => {
    let found = false,
      x = 0;
    while (x < userFramework.length && !found) {
      if (el.name === userFramework[x].name) found = true;
      x++;
    }
    if (!found) return el;
  });
  const handlerChangeEvent = (e) => {
    let add = frameworkFilter.filter((el) => el.name === e.target.value);
    setUserFrameworks([...userFramework, ...add]);
    setshowComponent(false);
  };

  return (
    <>
      <Formik
        initialValues={{ basesAndFrameworks: userFramework }}
        validationSchema={validateDataSkillsDatabase}
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
        {({ errors, touched, values }) => (
          <Form>
            <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
              <FormField.InputSelectArray
                data={userFramework}
                name="basesAndFrameworks"
                id="basesAndFrameworks"
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
                    name="frameworkTwo"
                    id="frameworkTwo"
                    data={frameworkFilter.map((e, index) => e.name)}
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
