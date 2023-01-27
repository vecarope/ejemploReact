import {ExportApplicant} from './Buttons/Buttons'

const AdminApplicant = () => {
    

  let applicant =  [
    {
      firstName: 'Alexis',
      lastName: 'Sanchez',
      email: 'doglover@gmail.com',
      id: 7,
      phoneNumber: "+56965930736",
      city: "Santiago",
      country: "Chile",
      gender: "Masculino",
      employmentStatusCurrent: "Sin Empleo",
      stack: "full stack",
      educationalLevel: "universitaria",
      educationStatusCurrent: "Bootcamp",
      englishLevel: "No Level",
      additionalToolsComment: "NestJS",
      cvUrl: "http://www.cvUrlAlexis.net",
      linkedinUrl: "http://www.linkedinUrlAlexis.net",
      githubUrl: "http://www.githubUrlAlexis.net",
      portfolioUrl: "http://www.portfolioUrlAlexis.net",
      featuredProject: "web para vender productos",
      devExperience: "sin experiencia",
      idealWorkComment: "No lo tengo claro aún",
      workAvailability: "fulltime, partime",
      relocationOption: "Trabajar desde Francia",
      visa: "Inglesa, Chilena",
      userId: 7,
      createdAt: '01-07-2020',
      updatedAt: '01-07-2020'
    },
    {
      id: 8,
      firstName: 'Cristiano',
      lastName: 'Santos',
      email: 'eurocopa@gmail.com',
      phoneNumber: "+56978952897",
      city: "Lisboa",
      country: "Portugal",
      gender: "Masculino",
      employmentStatusCurrent: "Empleado",
      stack: "full stack",
      educationalLevel: "universitaria",
      educationStatusCurrent: "Universitaria",
      englishLevel: "Avanzado",
      additionalToolsComment: "WebPack",
      cvUrl: "http://www.cvUrlCristiano.net",
      linkedinUrl: "http://www.linkedinUrlCristiano.net",
      githubUrl: "http://www.githubUrlCristiano.net",
      portfolioUrl: "http://www.portfolioUrlCristiano.net",
      featuredProject: "Ser el mejor jugador",
      devExperience: "Con experiencia",
      idealWorkComment: "Donde pueda brillar",
      workAvailability: "fulltime, partime",
      relocationOption: "Trabjo desde cualquier lugar",
      visa: "Mundial",
      userId: 8,
    createdAt: '01-07-2020',
      updatedAt: '01-07-2020',
    },
  ];  
    return (
      <div className="grid container my-10 mr-1 md:mx-5 lg:mx-8 xl:mx-10">
       <div class="grid grid-cols-8 sm:grid-cols-6 gap-4 ml-5">
       <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4  col-start-1 col-end-3">
            Postulantes
          </h1>
          <div className="col-end-8 sm:col-end-6 lg:col-end-6 xl:col-end-7 col-span-1">
          <ExportApplicant></ExportApplicant>
          </div>
        </div>
        <div className="sm:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-xl">
        <div className="relative overflow-x-auto ">
            <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="text-xs">Nombre</th>
                  <th scope="col" className="px-6 py-3 ">Email</th>
                  <th scope="col" className="px-1 py-3 ">Teléfono</th>
                  <th scope="col" className="px-1 py-3 ">Ciudad</th>
                  <th scope="col" className="px-1 py-3 ">País</th>
                  <th scope="col" className="px-2 py-3 ">Estatus Empleo</th>
                  <th scope="col" className="px-3 py-3 ">Stack</th>
                  <th scope="col" className="px-6 py-3 ">Nivel Educación</th>
                  <th scope="col" className="px-3 py-3 ">Último Estudio</th>
                  <th scope="col" className="px-3 py-3 ">Nivel Inglés</th>
                  <th scope="col" className="px-3 py-3 ">Conocimiento Adicional</th>
                  <th scope="col" className="px-6 py-3 ">CV URL</th>
                  <th scope="col" className="px-1 py-3 ">Linkedin</th>
                  <th scope="col" className="px-1 py-3 ">Github</th>
                  <th scope="col" className="px-1 py-3 ">Portfalio</th>
                  <th scope="col" className="px-6 py-3 ">Experiencia Dev</th>
                  <th scope="col" className="mx-6 pr-6 py-3 ">Trabajo Ideal</th>
                  <th scope="col" className="mx-6 pr-6 py-3 ">Disponibilidad</th>
                </tr>
              </thead>
                <tbody>
                {applicant.map((e) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={e.id}
                  >
                    <th
                      scope="row"
                      className="text-xs font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {`${e.firstName} ${e.lastName}`}
                    </th>
                    <td className="text-xs px-6">{e.email}</td>
                    <td className="text-xs px-1">{e.phoneNumber}</td>
                    <td className="text-xs px-1">{e.city}</td>
                    <td className="text-xs px-1">{e.country}</td>
                    <td className="text-xs px-2">{e.employmentStatusCurrent}</td>
                    <td className="text-xs px-3">{e.stack}</td>
                    <td className="text-xs px-6">{e.educationalLevel}</td>
                    <td className="text-xs px-3">{e.educationStatusCurrent}</td>
                    <td className="text-xs px-3">{e.englishLevel}</td>
                    <td className="text-xs px-3">{e.additionalToolsComment}</td>
                    <td className="text-xs px-6">{e.cvUrl}</td>
                    <td className="text-xs px-1">{e.linkedinUrl}</td>
                    <td className="text-xs px-1">{e.githubUrl}</td>
                    <td className="text-xs px-1">{e.portfolioUrl}</td>
                    <td className="text-xs px-6">{e.devExperience}</td>
                    <td className="text-xs mx-6">{e.idealWorkComment}</td>
                    <td className="text-xs align-middle">{e.workAvailability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
 
      </div>
    );
  };
  
  export default AdminApplicant;
