import apiClient from '../services/api.service';

export const postApplicationForm = async (values) => {
  const dataUser = localStorage.getItem('user');
  const userForm = JSON.parse(dataUser);

  const appicationData = [
    {
      phone_number: values.phoneNumber,
      city: values.city,
      country: values.country,
      gender: values.gender,
      employmentStatusCurrent: values.employmentStatusCurrent,
      stack: values.stack.toString(),
      educational_level: values.educationalLevel,
      education_status: values.educationStatusCurrent,
      english_level: values.englishLevel,
      comment: values.additionalToolsComment.toString(),
      cv_url: values.cvUrl,
      linkedin_url: values.linkedinUrl,
      github_url: values.githubUrl,
      portfolio_url: values.portfolioUrl,
      featured_project: values.featuredProject,
      dev_experience: values.devExperience.split(',')[1].trim(),
      ideal_work_comment: values.idealWorkComment,
      work_availability: values.workAvailability.toString(),
      relocation_option: values.relocationOption.split(',')[1].trim(),
      visa: values.visa.toString(),
      userId: userForm.id
    },
    [
      {
        name: values.name,
        institute_name: values.institute_name,
        type: values.type
      },
      {
        name: values.name2,
        institute_name: values.institute_name2,
        type: values.type2
      }
    ],
    [
      values.lenguage.length > 1
        ? values.lenguage.map((element) => ({
            devLanguageId: parseInt(element.id),
            level: parseInt(element.level)
          }))
        : {
            devLanguageId: parseInt(values.lenguage[0].id),
            level: parseInt(values.lenguage[0].level)
          }
    ],
    [
      values.baseAndFramework[1]
        ? values.baseAndFramework.map((element) => ({
            dataBaseId: parseInt(element.id),
            level: parseInt(element.level)
          }))
        : {
            dataBaseId: parseInt(values.baseAndFramework[0].id),
            level: parseInt(values.baseAndFramework.level)
          }
    ],
    [
      values.tools[1]
        ? values.tools.map((element) => ({
            toolsId: parseInt(element.id),
            level: parseInt(element.level)
          }))
        : {
            toolsId: parseInt(values.tools[0].id),
            level: parseInt(values.tools[0].level)
          }
    ],
    [
      values.softSkills[1]
        ? values.softSkills.map((skill) => ({
            softSkillId: parseInt(skill.split(',')[1].trim()),
            name: skill.split(',')[0].trim()
          }))
        : {
            softSkillId: parseInt(values.softSkills[0].split(',')[1].trim()),
            name: values.softSkills[0].split(',')[0].trim()
          }
    ]
  ];
  //   const token = localStorage.getItem('token');

  try {
    const { data } = await apiClient.post(`/user-workprofile/`, appicationData);
    return data;
  } catch ({ error }) {
    return error.message;
  }
};
