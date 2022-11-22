import * as Yup from 'yup';

let validateStrings = /^[A-Za-z#&]+$/;
let validateAlphanumeric = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

export const validateSchema = Yup.object().shape({
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
    .required('Debes ingresar una contraseña.')
    .min(8, 'La contraseña debe tener más de ocho caracteres.')
    .max(20, 'La contraseña debe ser más corta.'),

  passwordConfirm: Yup.string().when('userPassword', {
    is: (value) => (value && value.length > 0 ? true : false),
    then: Yup.string()
      .oneOf([Yup.ref('userPassword')], 'Las contraseñas no cohinciden.')
      .required('Debes repetir la contraseña.')
  })
});
