/* eslint-disable array-callback-return */
import * as FormField from '../../Forms';
import { Form, Formik } from 'formik';
import { GrAddCircle } from 'react-icons/gr';
import '../../../assets/componentsCSS/button.css';
import apiClient from '../../../services/api.service';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { valueDataSkillsTools } from '../../../data/ModalInitialData';
import { validateDataSkillsTools } from '../../../validation/validateModals';

export const ToolsModal = (props) => {
  const [toolAPI, setToolAPI] = useState(null);
  const [userTool, setUserTool] = useState(props.info);
  const [showComponent, setshowComponent] = useState(false);

  const extraComponent = () => {
    setshowComponent(true);
  };
  const getAllTools = async () => {
    const { data } = await apiClient('/tools');
    setToolAPI(data);
  };
  useEffect(() => {
    getAllTools();
  }, []);

  let toolsFilter = toolAPI?.filter((el) => {
    let found = false,
      x = 0;
    while (x < userTool.length && !found) {
      if (el.name === userTool[x].name) found = true;
      x++;
    }
    if (!found) return el;
  });
  const handlerChangeEvent = (e) => {
    let add = toolsFilter.filter((el) => el.name === e.target.value);
    setUserTool([...userTool, ...add]);
    setshowComponent(false);
  };
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
        {({ errors, touched, values }) => (
          <Form>
            <div className="col-span-7 md:col-span-4 lg:col-span-4 md:mx-auto">
              <FormField.InputSelectArray
                data={userTool}
                name="tools"
                id="tools"
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
                    name="toolTwo"
                    id="toolTwo"
                    data={toolsFilter.map((e, index) => e.name)}
                    onChange={(e) => {
                      handlerChangeEvent(e);
                    }}
                  />
                  <button className="flex" type="button">
                    <GrAddCircle />
                  </button>
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
