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
      phone_number: values.phoneNumber,
      city: values.city,
      country: values.country,
      gender: values.gender,
      employmentStatusCurrent: values.employmentStatusCurrent,
      stack: values.stack.toString(),
      educational_level: parseInt(values.educationalLevel),
      education_status: values.educationStatusCurrent,
      english_level: values.englishLevel,
      comment: values.additionalToolsComment.toString(),
      cv_url: values.cvUrl,
      linkedin_url: values.linkedinUrl,
      github_url: values.githubUrl,
      portfolio_url: values.portfolioUrl,
      featured_project: values.featuredProject,
      dev_experience: parseInt(values.devExperience.split(',')[1].trim()),
      ideal_work_comment: values.idealWorkComment,
      work_availability: values.workAvailability.toString(),
      relocation_option: parseInt(values.relocationOption.split(',')[1].trim()),
      visa: values.visa.toString(),
      userId: userForm.id
    },
    [
      {
        name: values.name,
        institute_name: values.institute_name,
        type: values.type,
        workProfileId: 1
      },
      {
        name: values.name2,
        institute_name: values.institute_name2,
        type: values.type2,
        workProfileId: 1
      }
    ],
    [
      {
        // Lenguajes,
      }
    ],
    [
      {
        // Frameworks
      }
    ],
    [
      {
        //Tools
      }
    ],
    [
      // Soft Skills
      values.softSkills[1]
        ? values.softSkills.map((skill) => ({
            workProfileId: 1,
            softSkillId: parseInt(skill.split(',')[1].trim()),
            name: skill.split(',')[0].trim()
          }))
        : {
            workProfileId: 1,
            softSkillId: parseInt(values.softSkills[0].split(',')[1].trim()),
            name: values.softSkills[0].split(',')[0].trim()
          }
    ]
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
