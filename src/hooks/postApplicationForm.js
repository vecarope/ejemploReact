import apiClient from '../services/api.service';

export const postApplicationForm = async (values) => {
  const dataUser = localStorage.getItem('user');
  const userForm = JSON.parse(dataUser);

  const appicationData = [
    {
      phoneNumber: values.phoneNumber,
      city: values.city,
      country: values.country,
      gender: values.gender,
      employmentStatusCurrent: values.employmentStatusCurrent,
      stack: values.stack.toString(),
      educationalLevel: values.educationalLevel,
      educationStatusCurrent: values.educationStatusCurrent,
      englishLevel: values.englishLevel,
      comment: values.additionalToolsComment.toString(),
      cvUrl: values.cvUrl,
      linkedinUrl: values.linkedinUrl,
      githubUrl: values.githubUrl,
      portfolioUrl: values.portfolioUrl,
      featuredProject: values.featuredProject,
      devExperience: values.devExperience.split(',')[1].trim(),
      idealWorkComment: values.idealWorkComment,
      workAvailability: values.workAvailability.toString(),
      relocationOption: values.relocationOption.split(',')[1].trim(),
      visa: values.visa.toString(),
      userId: userForm.id
    },
    [
      {
        name: values.name,
        instituteName: values.institute_name,
        type: values.type
      } /* ,
      {
        name: values.name2,
        instituteName: values.institute_name2,
        type: values.type2
      } */
    ],
    values.lenguage.length > 1
      ? values.lenguage.map((element) => ({
          devLanguageId: parseInt(element.id),
          level: parseInt(element.level)
        }))
      : {
          devLanguageId: parseInt(values.lenguage[0].id),
          level: parseInt(values.lenguage[0].level)
        },
    values.baseAndFramework[1]
      ? values.baseAndFramework.map((element) => ({
          dataBaseId: parseInt(element.id),
          level: parseInt(element.level)
        }))
      : {
          dataBaseId: parseInt(values.baseAndFramework[0].id),
          level: parseInt(values.baseAndFramework.level)
        },

    values.tools[1]
      ? values.tools.map((element) => ({
          toolsId: parseInt(element.id),
          level: parseInt(element.level)
        }))
      : {
          toolsId: parseInt(values.tools[0].id),
          level: parseInt(values.tools[0].level)
        },

    values.softSkills[1]
      ? values.softSkills.map((skill) => ({
          softSkillId: parseInt(skill.split(',')[1].trim()),
          name: skill.split(',')[0].trim()
        }))
      : {
          softSkillId: parseInt(values.softSkills[0].split(',')[1].trim()),
          name: values.softSkills[0].split(',')[0].trim()
        }
  ];
  //   const token = localStorage.getItem('token');
  console.log('FLAG - - >', appicationData);

  try {
    const { data } = await apiClient.post(`/user-workprofile/`, appicationData);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};
