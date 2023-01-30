import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';
import { ExportApplicant } from './Buttons/Buttons';




const AdminApplicant = () => {
  const [applicant, setApplicant] = useState(null);
  const getAllApplicant = async () => {
    setApplicant(await apiClient('admin/get-workProfiles'));
  };
  useEffect(() => {
    getAllApplicant();
  }, []);

  return (
    <div className="container mx-auto p-12 md:max-w-3xl xl:max-w-screen-lg 2xl:max-w-screen-2xl">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4">
          Postulaciones
        </h1>
        <div>
          <ExportApplicant></ExportApplicant>
        </div>
      </div>
      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 ">
                Email
              </th>
              <th scope="col" className="px-6 py-3 ">
                Teléfono
              </th>
              <th scope="col" className="px-6 py-3 ">
                Ciudad
              </th>
              <th scope="col" className="px-6 py-3 ">
                País
              </th>
              <th scope="col" className="px-6 py-3 ">
                Estatus Empleo
              </th>
              <th scope="col" className="px-6 py-3 ">
                Stack
              </th>
              <th scope="col" className="px-6 py-3 ">
                Nivel Educación
              </th>
              <th scope="col" className="px-6 py-3 ">
                Último Estudio
              </th>
              <th scope="col" className="px-6 py-3 ">
                Nivel Inglés
              </th>
              <th scope="col" className="px-6 py-3 ">
                Conocimiento Adicional
              </th>
              <th scope="col" className="px-6 py-3 ">
                CV URL
              </th>
              <th scope="col" className="px-6 py-3 ">
                Linkedin
              </th>
              <th scope="col" className="px-6 py-3 ">
                Github
              </th>
              <th scope="col" className="px-6 py-3 ">
                Portfalio
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Experiencia Dev
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Trabajo Ideal
              </th>
              <th scope="col" className="mx-6 py-3 ">
                Disponibilidad
              </th>
            </tr>
          </thead>
          <tbody>
            {applicant !== null
              ? applicant.data.map((e, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
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
                    <td className="text-xs px-2">
                      {e.employmentStatusCurrent}
                    </td>
                    <td className="text-xs px-3">{e.stack}</td>
                    <td className="text-xs px-6">{e.educationalLevel}</td>
                    <td className="text-xs px-3">{e.educationStatusCurrent}</td>
                    <td className="text-xs px-3">{e.englishLevel}</td>
                    <td className="text-xs px-3">{e.additionalToolsComment}</td>
                    <td className="text-xs px-6">{e.cvUrl}</td>
                    <td className="text-xs px-1">{e.linkedinUrl}</td>
                    <td className="text-xs px-1">{e.githubUrl}</td>
                    <td className="text-xs px-1">{e.portfolioUrl}</td>
                    <td className="text-xs px-6 whitespace-nowrap">
                      {e.devExperience}
                    </td>
                    <td className="text-xs px-6 whitespace-nowrap">
                      {e.idealWorkComment}
                    </td>
                    <td className="text-xs mx-6 whitespace-nowrap">
                      {e.workAvailability}
                    </td>
                  </tr>
                ))
              : /* (
                  <progress className="animate-pulse progress w-56">
                    Cargando datos
                  </progress>
                ) */ false}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminApplicant;
