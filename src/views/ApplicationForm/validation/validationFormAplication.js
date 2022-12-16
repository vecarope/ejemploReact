import * as Yup from 'yup';

let validateStrings = /^[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
let validateNumber = /^([0-9])*$/;
let validateURL =
  /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;
let validateLinkedinURL =
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

let validateGithubURL =
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?github.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

export const validateSchemaAplicationForm = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  lastName: Yup.string()
    .trim()
    .required('Debes ingresar un apellido.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El apellido debe ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El apellido debe tener al menos 2 letras.')
    .max(30, 'El apellido debe ser más corto.'),
  email: Yup.string()
    .required('El e-mail es requerido.')
    .email('El e-mail ingresado no es válido.')
    .min(6, 'El e-mail es demasiado corto.')
    .max(50, 'El e-mail ingresado es muy largo.'),
  phoneNumber: Yup.string()
    .trim()
    .required('Debes ingresar un telefono.')
    .matches(validateNumber, {
      excludeEmptyString: true,
      message: 'El telefono debe ser solo numeros.'
    })
    .min(6, 'El telefono es muy corto.')
    .max(25, 'El numero de telefono debe ser más corto.'),
  city: Yup.string()
    .trim()
    .required('Debes ingresar una ciudad.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'La ciuddad debe ser solo texto y comenzar con mayúscula..'
    })
    .min(2, 'La ciudad debe tener al menos 2 letras.')
    .max(25, 'La ciudad debe ser más corta.'),
  country: Yup.string()
    .trim()
    .required('Debes ingresar un pais.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El pais debe ser solo texto y comenzar con mayúscula.'
    })
    .min(2, 'El pais debe tener al menos 2 letras.')
    .max(29, 'El pais debe ser más corta.'),
  gender: Yup.string().required('Debes seleccionar una opción.'),
  employmentStatusCurrent: Yup.string().required('Debes elegir una opcion.'),
  stack: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 items')
    .required('Esta opcion es requerida.'),

  educationalLevel: Yup.string().required('Debes seleccionar una opción.'),
  educationStatusCurrent: Yup.string().required(
    'Debes seleccionar una opción.'
  ),
  englishLevel: Yup.string().required('Debes seleccionar un nivel de ingles.'),
  additionalToolsComment: Yup.array()
    .min(3, 'Debes elegir 3 items')
    .max(3, 'Solo puedes elegir hasta 3 items')
    .required('Esta opcion es requerida.'),
  cvUrl: Yup.string()
    .trim()
    .required('Este link es requerodo.')
    .matches(validateURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link válido.'
    }),
  linkedinUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateLinkedinURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link de LinkedIn válido.'
    }),
  githubUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateGithubURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link de GitHub válido.'
    }),
  portfolioUrl: Yup.string()
    .trim()
    .required('Este link es requerido.')
    .matches(validateURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link válido.'
    }),
  featuredProject: Yup.string()
    .trim()
    // .required('Debes completar esta espacio de texo.')
    .min(20, 'El texto debe ser más largo. ¡Cuentanos más del proyecto!')
    .max(500, 'El texto debe ser más corto.'),
  devExperience: Yup.string().required('Debes seleccionar una opción.'),
  idealWorkComment: Yup.string()
    .trim()
    // .required('Debes completar esta espacio de texo.')
    .min(20, 'El texto debe ser más largo. ¡Cuentanos más del proyecto!')
    .max(500, 'El texto debe ser más corto.'),
  workAvailability: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 preferebcias'),
  relocationOption: Yup.string().required('Debes seleccionar una opción.'),
  visa: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 preferebcias')
});
