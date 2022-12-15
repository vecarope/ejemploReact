import * as Yup from 'yup';

let validateStrings = /^[A-ZÁÉÍÓÚ][a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóú]+)?$/;
let validateNumber = /^([0-9])*$/;

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
  employmentStatusCurrent: Yup.string().required('Debes elegir una opcion.'),
  stack: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 items')
    .required('Esta opcion es requerida.'),
  gender: Yup.string().required('Debes seleccionar una opción.'),
  educationalLevel: Yup.string(),
  educationStatusCurrent: Yup.string(),
  englishLevel: Yup.string(),
  additionalToolsComment: Yup.string(),
  cvUrl: Yup.string(),
  linkedinUrl: Yup.string(),
  githubUrl: Yup.string(),
  portfolioUrl: Yup.string(),
  featuredProject: Yup.string(),
  idealWorkComment: Yup.string(),
  workAvailability: Yup.string(),
  relocationOption: Yup.string(),
  visa: Yup.string()
});
