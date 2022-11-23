import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateSchema } from '../../validation/validateForm';
import MoonImage from '../../assets/design/moon_color.png';
import OvalBlue from '../../assets/design/oval.png';

const initialCredentials = {
  userName: '',
  userLastName: '',
  userEmail: '',
  userPassword: '',
  passwordConfirm: ''
};

const Register = () => {
  return (
    <div className="flex flex-col items-center md:bg-white md:w-3/5 md:my-11 md:rounded-xl md:border-8 md:border-zinc-800 max-w-screen-xl ">
      <h1 className=" py-1.5 md:my-4 text-4xl text-white md:text-5xl md:text-dark-purple font-bold text-center font-sans  ">
        Regístrate
      </h1>
      <div class="container ">
        <img
          src={OvalBlue}
          alt="oval"
          className="object-left-top -mx-10 ... opacity-50"
        />
      </div>
      <section className="md:min-w-full md:justify-center md:flex">
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
                <div className="flex flex-col md:flex-wrap">
                  <div className="flex flex-col md:flex-wrap">
                    <label
                      htmlFor="userName"
                      className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:pr-4"
                    >
                      Nombre:
                    </label>
                    <Field
                      id="userName"
                      name="userName"
                      placeholder="Ingresa tu nombre"
                      type="text"
                      className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                    />
                    {errors.userName && touched.userName && (
                      <ErrorMessage
                        component="div"
                        name="userName"
                        className="text-red-500"
                      />
                    )}
                  </div>
                  <label
                    htmlFor="userLastName"
                    className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:pr-4"
                  >
                    Apellido:
                  </label>
                  <Field
                    id="userLastName"
                    name="userLastName"
                    placeholder="Ingresa tu apellido"
                    type="text"
                    className="input input-bordered input-secondary w-60 max-w-xs md:w-80 md:bg-fill-light md:border-inherit"
                  />
                  {errors.userLastName && touched.userLastName && (
                    <ErrorMessage
                      component="div"
                      name="userLastName"
                      className=" text-red-500 "
                    />
                  )}
                </div>
                <div className="flex flex-col  md:w-fit md:flex-wrap">
                  <div className="flex flex-col md:w-fit">
                    <label
                      htmlFor="userEmail"
                      class="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
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
                  <div className="flex flex-col md:w-fit">
                    <label
                      htmlFor="userPassword"
                      className="text-white label-text md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
                    >
                      Crea tu contraseña:
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
                  <div class="flex flex-col md:w-fit">
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
                  Crear cuenta
                </button>
                <Link to={'/login'}>
                  <span className=" flex py-3.5 text-sm text-white text-center font-thin  hover:md:text-mid-blue md:text-dark-purple font-sans">
                    Iniciar sesión
                  </span>
                </Link>

                {isSubmitting ? (
                  <div>
                    <p>Cargando datos...</p>
                  </div>
                ) : null}
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <div className="container">
        <img
          src={MoonImage}
          alt="design moon"
          className="object-left-bottom -mx-8 relative"
        />
      </div>
    </div>
  );
};

export default Register;
