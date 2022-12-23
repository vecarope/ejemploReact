import apiClient from '../services/api.service';

export const postRegisterAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/register', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};

export const postLoginAxios = async (values) => {
  try {
    const { data } = await apiClient.post('/auth/login', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};

export const postContactCompany = async (values) => {
  try {
    const { data } = await apiClient.post('/contact-company', values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};

export const postApplicationForm = async (values) => {
  const dataUser = localStorage.getItem('user');
  const userForm = JSON.parse(dataUser);

  console.log('FORM APPP POST-->', values);
  const appicationData = [
    {
      phoneNumber: values.phoneNumber,
      city: values.city,
      country: values.country,
      gender: values.gender,
      employmentStatusCurrent: values.employmentStatusCurrent,
      stack: values.stack.toString(),
      educationalLevel: parseInt(values.educationalLevel),
      educationStatusCurrent: values.educationStatusCurrent,
      englishLevel: values.englishLevel,
      additionalToolsComment: values.additionalToolsComment.toString(),
      cvUrl: values.cvUrl,
      linkedinUrl: values.linkedinUrl,
      githubUrl: values.githubUrl,
      portfolioUrl: values.portfolioUrl,
      featuredProject: values.featuredProject,
      devExperience: parseInt(values.devExperience.split(',')[1].trim()),
      idealWorkComment: values.idealWorkComment,
      workAvailability: values.workAvailability.toString(),
      relocationOption: parseInt(values.relocationOption.split(',')[1].trim()),
      visa: values.visa.toString(),
      userId: userForm.id
    },
    [{}],
    []
  ];
  const token = localStorage.getItem('token');

  console.log('APPLICATION POST-->', appicationData);

  try {
    const { data } = await apiClient.post(`/user-workprofile/${token}`, values);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};
