import {ExportCompanies} from './Buttons/Buttons'
import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';

const AdminCompanies = () => {
    

  const [companies, setCompanies] = useState(null);
  const getAllCompanies = async () => {
    setCompanies(await apiClient('admin/get-companies'));
  };
  useEffect(() => {
    getAllCompanies();
  }, []); 

      return (
      <div className="grid container my-10 mr-1 md:mx-5 lg:mx-8 xl:mx-10">
       <div class="grid grid-cols-8 sm:grid-cols-6 gap-4 ml-5">
       <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4  col-start-1 col-end-3">
            Empresas
          </h1>
          <div className="col-end-8 sm:col-end-6 lg:col-end-6 xl:col-end-7 col-span-1">
          <ExportCompanies></ExportCompanies>
          </div>
        </div>
        <div className="sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-lg">
        <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 ">Empresa</th>
                  <th scope="col" className="px-6 py-3 ">Nombre</th>
                  <th scope="col" className="px-6 py-3 ">Apellido</th>
                  <th scope="col" className="px-6 py-3 ">Email</th>
                  <th scope="col" className="px-6 py-3 ">Teléfono</th>
                  <th scope="col" className="px-6 py-3 ">Área de Busqueda</th>
                  <th scope="col" className="px-6 py-3 ">Comentario</th>
                </tr>
              </thead>
                <tbody>
                {
                companies !== null ? (
                companies.data.map((e) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={e.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {e.companyName}
                    </th>
                    <td className="px-6 py-4">{e.name}</td>
                    <td className="px-6 py-4">{e.lastName}</td>
                    <td className="px-6 py-4">{e.email}</td>
                    <td className="px-6 py-4">{e.phone}</td>
                    <td className="px-6 py-4">{e.search}</td>
                    <td className="px-6 py-4">{e.doubts}</td>
                  </tr>
                ))):(<progress className="animate-pulse progress w-56">Cargando datos</progress>)}
              </tbody>
            </table>
          </div>
        </div>
 
      </div>
    );
  };
  
  export default AdminCompanies;
  