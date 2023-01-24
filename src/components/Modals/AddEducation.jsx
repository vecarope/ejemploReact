import React , { useState } from 'react'; 
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import apiClient from '../../services/api.service';
import Swal from 'sweetalert2';
import { month , typeInstitution} from '../../data/FormData';
import { validateNewEducation } from '../../validation/validateModals';
import { valueNewEducation } from '../../data/ModalInitialData';
import {GrAddCircle} from 'react-icons/gr'; 

const AddEducation = (props) => {

  const [showModal, setShowModal] = useState(false);
  const { updateEducation } = props;

  return (
    <>
      <button type="button" className="btn text-light bg-fill-light text-dark-text gap-2 hover:bg-mid-light-blue hover:text-white hover:fill-white" onClick={() => setShowModal(true)}>
      <GrAddCircle className="h-6 w-6 "/> Agregar educación
      </button>
  
  {showModal ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Agregar Experiencia Educacional</h3>
              <button
                className="btn btn-sm btn-circle btn-ghost text-black"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <Formik
          initialValues={valueNewEducation}
          validationSchema={validateNewEducation}
          onSubmit = { async (values) => {
            try {
              await apiClient.post('/users/education', 
                values
              ); 
              return Swal.fire({
                title:'¡Datos modificados!',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#2738F5'
              })
                .then(()=>setShowModal(false))
                .then(updateEducation(values));
            } catch (error) {
              console.error(error);
            }
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="grid grid-cols-2 grid-rows-7 gap-x-2 gap-y-1 ">
              <div className="col-span-2 row-span-1">
                <FormField.InputField
                  label="Nombre de la carrera, curso, bootcamp o certificación"
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Nombre de la carrera, curso, bootcamp o certificación"
                  touched={touched}
                  errors={errors}
                />
              </div>
              <div className="row-span-2 col-start-1 col-end-2 ">
                <FormField.InputField
                  label="Nombre institución"
                  type="text"
                  name="instituteName"
                  id="instituteName"
                  required
                  placeholder="Nombre institución"
                  touched={touched}
                  errors={errors}
                />
              </div>
              <div className="row-span-2 col-start-2 col-end-3">
              <FormField.InputSelect
                label={'Tipo institución'}
                touched={touched}
                errors={errors}
                id="type"
                name="type"
                data={typeInstitution}
                required
              />
            </div>
                <div className="row-span-3 col-start-1 col-end-2">
                  <FormField.InputSelect
                    label={'Mes ingreso'}
                    touched={touched}
                    errors={errors}
                    id="startMonth"
                    name="startMonth"
                    data={month}
                    required
                  />
                </div>
                <div className="row-span-3 col-start-2 col-end-3">
                  <FormField.InputField 
                    label="Año ingreso"
                    type='text'
                    touched={touched}
                    errors={errors}
                    placeholder='Año'
                    name="startYear"
                    id="startYear"
                    required
                  />
                </div>
                <div className="row-span-4 col-start-1 col-end-2">
                  <FormField.InputSelect
                    label={'Mes egreso'}
                    touched={touched}
                    errors={errors}
                    id="endMonth"
                    name="endMonth"
                    data={month}
                    required
                  />
                </div>
                <div className="row-span-4 col-start-2 col-end-3">
                  <FormField.InputField
                    label="Año egreso"
                    touched={touched}
                    errors={errors}
                    placeholder='Año'
                    type="text"
                    name="endYear"
                    id="endYear"
                    required
                  />
                </div>       
                </div>   
              <div className="container py-8 justify-center">
            <button className="btn btn-blue" type="submit">
              Guardar Cambios
            </button>
          </div>
          </Form>
          )}
        </Formik>
          </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default AddEducation
