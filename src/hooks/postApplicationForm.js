import apiClient from '../services/api.service';

export const postApplicationForm = async (values) => {
  const dataUser = localStorage.getItem('user');
  const userForm = JSON.parse(dataUser);

  userForm.statusId = 2;

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
      additionalToolsComment: values.additionalToolsComment.toString(),
      cvUrl: values.cvUrl,
      linkedinUrl: values.linkedinUrl,
      githubUrl: values.githubUrl,
      portfolioUrl: values.portfolioUrl,
      featuredProject: values.featuredProject,
      devExperience: values.devExperience.split(',')[0].trim(),
      idealWorkComment: values.idealWorkComment,
      workAvailability: values.workAvailability.toString(),
      relocationOption: values.relocationOption.split(',')[0].trim(),
      visa: values.visa.toString(),
      userId: userForm.id
    },
    [
      {
        name: values.name,
        instituteName: values.instituteName,
        type: values.type
      }
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
    values.basesAndFrameworks[1]
      ? values.basesAndFrameworks.map((element) => ({
          databaseId: parseInt(element.id),
          level: parseInt(element.level)
        }))
      : {
          databaseId: parseInt(values.basesAndFrameworks[0].id),
          level: parseInt(values.basesAndFrameworks.level)
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
          softSkillsId: parseInt(skill.split(',')[1].trim()),
          name: skill.split(',')[0].trim()
        }))
      : {
          softSkillsId: parseInt(values.softSkills[0].split(',')[1].trim()),
          name: values.softSkills[0].split(',')[0].trim()
        }
  ];
  //   const token = localStorage.getItem('token');
  try {
    const { data } = await apiClient.post(`/users`, appicationData);
    // console.log('EL DATA ES:', data);
    userForm.statusId = 2;
    localStorage.setItem('user', JSON.stringify(userForm));
    return data;
  } catch ({ error }) {
    return error.message;
  }
};
