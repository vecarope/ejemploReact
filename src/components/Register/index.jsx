import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MoonImage from '../../assets/design/moon_color.png';
import OvalBlue from '../../assets/design/oval.png';
const Register = () => {
  const initialCredentials = {
    userName: '',
    userLastName: '',
    userEmail: '',
    userPassword: '',
    passwordConfirm: ''
    // userId: 1
  };
  let validateStrings = /^[A-Za-z#&]+$/;
  let validateAlphanumeric = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

  const validateSchema = Yup.object().shape({
    userName: Yup.string()
      .required('Debes ingresar un nombre.')
      .matches(validateStrings, {
        excludeEmptyString: true,
        message: 'El nombre debe ser solo texto.'
      })
      .min(2, 'El nombre debe tener al menos 2 letras.')
      .max(25, 'El nombre debe ser más corto.'),
    userLastName: Yup.string()
      .required('Debes ingresar un apellido.')
      .matches(validateStrings, {
        excludeEmptyString: true,
        message: 'El apellido debe ser solo texto.'
      })
      .min(2, 'El apellido debe tener al menos 2 letras.')
      .max(30, 'El apellido debe ser más corto.'),
    userEmail: Yup.string()
      .required('El e-mail es requerido.')
      .email('El e-mail ingresado no es válido.')
      .min(6, 'El e-mail es demasiado corto.')
      .max(50, 'El e-mail ingresado es muy largo.'),
    userPassword: Yup.string()
      .matches(validateAlphanumeric, {
        excludeEmptyString: true,
        message:
          'La contraseña debe tener al menos una mayúscula, una minúscula y un número.'
      })
      .required('Debes crear una contraseña.')
      .min(8, 'La contraseña debe tener más de ocho caracteres.')
      .max(20, 'La contraseña debe ser más corta.'),

    passwordConfirm: Yup.string().when('userPassword', {
      is: (value) => (value && value.length > 0 ? true : false),
      then: Yup.string()
        .oneOf([Yup.ref('userPassword')], 'Las contraseñas no cohinciden.')
        .required('Debes repetir la contraseña.')
    })
  });

  return (
    <div class="flex flex-col h-screen md:h-auto items-center md:bg-white md:w-9/12 md:rounded-xl md:border-8 md:border-zinc-800 max-w-screen-xl ">
      <h1 className="mb-5 py-1.5 md:p-8 text-4xl text-white md:text-5xl md:text-dark-purple font-bold text-center font-sans  ">
        Regístrate
      </h1>
      <div class="container ">
        <img
          src={OvalBlue}
          alt="oval"
          class="object-left-top -mx-10 ... opacity-50"
        />
      </div>
      <section class="md:h-4/6 md:w-full md:justify-center md:flex">
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
            <Form className="form-control w-full max-w-xs md:justify-center ">
              <div class="md:contents md:items-center">
                <div class="flex flex-col md:flex-wrap">
                  <label
                    htmlFor="userName"
                    className="label-text"
                    class="text-white md:text-dark-text md:text-lg pt-3 font-sans md:pr-4"
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
                      class="text-red-500"
                    />
                  )}
                  <label
                    htmlFor="userLastName"
                    className="label-text"
                    class="text-white md:text-dark-text md:text-lg pt-3 font-sans md:pr-4"
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
                      class=" text-red-500 "
                    />
                  )}
                </div>
                <div class="flex flex-col  md:w-fit md:flex-wrap">
                  <div class="flex flex-col md:w-fit">
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
                        class="text-red-500"
                      />
                    )}
                  </div>
                  <div class="flex flex-col md:w-fit">
                    <label
                      htmlFor="userPassword"
                      className="label-text"
                      class="text-white md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
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
                        class="text-red-500"
                      />
                    )}
                  </div>
                  <div class="flex flex-col md:w-fit">
                    <label
                      htmlFor="passwordConfirm"
                      className="label-text"
                      class="text-white md:text-dark-text md:text-lg pt-3 font-sans md:w-80"
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
                        class="text-red-500"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div class="flex flex-col py-6 items-center md:justify-center   ">
                <button
                  type="submit"
                  class="rounded-lg border hover:border text-lg p-2 w-2/3 font-regular bg-white hover:bg-transparent hover:md:bg-mid-blue md:bg-dark-purple hover: text-dark-purple mb:text-white hover:text-white md:text-white font-sans"
                >
                  Crear cuenta
                </button>
                <span class=" flex py-3.5 text-sm text-white text-center font-thin  hover:md:text-mid-blue md:text-dark-purple font-sans">
                  Iniciar sesión
                </span>
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
      <div class="container">
        <img
          src={MoonImage}
          alt="design moon"
          class="object-left-bottom -mx-8 relative"
        />
      </div>
    </div>
  );
};

export default Register;
