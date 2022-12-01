import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSchema } from '../../../validation/validateForm';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const initialCredentials = {
    userEmail: '',
    userPassword: '',
    passwordConfirm: ''
  };
  return (
    <section className="md:min-w-full w-full justify-center flex">
      <Formik
        initialValues={initialCredentials}
        validationSchema={validateSchema}
        onSubmit={async (values) => {
          await new Promise((res) => setTimeout(res, 1800));
          /* Guardo las credenciales en LocalStorage para simular un acceso hasta tener las rutas listas */
          localStorage.setItem('User temp', values);
          alert(JSON.stringify(values));
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-control max-w-xs md:justify-center ">
            <div className="md:contents md:items-center">
              <div className="flex flex-col  md:w-fit md:flex-wrap">
                <div className="flex flex-col md:w-fit">
                  <label
                    htmlFor="userEmail"
                    className="label-text"
                    class="text-white md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                  >
                    Ingresa tu correo:
                  </label>
                  <Field
                    id="userEmail"
                    name="userEmail"
                    placeholder="tumejoremail@mail.com"
                    type="email"
                    className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                  />
                  {errors.userEmail && touched.userEmail && (
                    <ErrorMessage
                      component="div"
                      name="userEmail"
                      className="text-red-500"
                    />
                  )}
                </div>
                <div class="flex flex-col md:w-fit">
                  <label
                    htmlFor="userPassword"
                    className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                  >
                    Ingresá tu contraseña:
                  </label>
                  <Field
                    id="userPassword"
                    name="userPassword"
                    type="password"
                    placeholder="*****"
                    className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                  />
                  {errors.userPassword && touched.userPassword && (
                    <ErrorMessage
                      component="div"
                      name="userPassword"
                      className="text-red-500"
                    />
                  )}
                </div>
                <div className="flex flex-col md:w-fit">
                  <label
                    htmlFor="passwordConfirm"
                    className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                  >
                    Reingresa contraseña:
                  </label>
                  <Field
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="Repite la contraseña."
                    className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                  />
                  {errors.passwordConfirm && touched.passwordConfirm && (
                    <ErrorMessage
                      component="div"
                      name="passwordConfirm"
                      className="text-red-500"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col py-6 items-center md:justify-center   ">
              <button
                type="submit"
                className="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular bg-white hover:bg-transparent hover:md:bg-mid-blue md:bg-dark-purple hover: text-dark-purple mb:text-white hover:text-white md:text-white font-sans"
              >
                Iniciar Sesión
              </button>
              <Link to={'/register'}>
                <span className=" flex py-3.5 text-sm text-white text-center font-thin  hover:md:text-mid-blue md:text-dark-purple font-sans">
                  Crear cuenta
                </span>
              </Link>
              {isSubmitting ? (
                <div>
                  <p>Ingresando...</p>
                </div>
              ) : null}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default LoginForm;
