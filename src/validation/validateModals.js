import * as Yup from 'yup'; 

let validateURL = /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;
let validateStrings = /^[A-ZÁÉÍÓÚ a-zñáéíóú]+(?: [A-ZÁÉÍÓÚ a-zñáéíóú]+)?$/;
let validateNumber = /^([0-9])*$/;

const validateAvailability = Yup.object().shape({
  workAvailability: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 preferencias'),
  availabilityStatus: Yup.array()
    .max(1, 'Debes elegir al menos 1 item')
    .required('Este campo es requerido.')
});


const validateCV = Yup.object().shape({
  cvUrl: Yup.string()
    .trim()
    .required('Este link es requerodo.')
    .matches(validateURL, {
      excludeEmptyString: true,
      message: 'Debes ingresar un link válido.'
    })
});

const year = 
  Yup.string()
  .trim()
  .required('Debe ingresar un año.')
  .matches(validateNumber, {
    excludeEmptyString: true,
    message: 'Debe ingresar solo numeros.'
  })
  .min(4, 'Debe ingresar 4 digitos.')
  .max(4, 'El año no puede tener mas de 4 digitos.');

const validateEducation = Yup.object().shape({
  name: Yup.string()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  instituteName: Yup.string()
    .required('Debes ingresar un nombre.')
    .matches(validateStrings, {
      excludeEmptyString: true,
      message: 'El nombre debe ser solo texto.'
    })
    .min(2, 'El nombre debe tener al menos 2 letras.')
    .max(25, 'El nombre debe ser más corto.'),
  startMonth: Yup.string().required('Debes seleccionar un mes.'),
  endMonth: Yup.string().required('Debes seleccionar un mes.'),
  startYear: year,
  endYear: year,
});

const validateStackAndSalary = Yup.object().shape({
  stack: Yup.array()
    .min(1, 'Debes elegir al menos 1 item')
    .max(3, 'Solo puedes elegir hasta 3 items')
    .required('Esta opcion es requerida.'),
  currentSalary: Yup.string()
    .trim()
    .required('Debes ingresar un valor.')
    .matches(validateNumber, {
      excludeEmptyString: true,
      message: 'El salario debe ser solo numeros.'
    })
});

const validateWorkExperience = Yup.object().shape({
  englishLevel: Yup.string().required('Debes seleccionar un nivel de ingles.'),
  devExperience: Yup.string().required('Debes seleccionar una opción.')
});

export {validateAvailability,
        validateCV,
        validateEducation,
        validateStackAndSalary,
        validateWorkExperience}  