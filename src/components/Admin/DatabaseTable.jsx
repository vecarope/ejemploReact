import { UpdateButton, DeleteButton } from './Buttons/Buttons';
import { useEffect, useState } from 'react';
import apiClient from '../../services/api.service';

const DatabaseTable = () => {
  const [database, setDatabase] = useState(null);
  const getAllDatabase = async () => {
    setDatabase(await apiClient('admin/get-database'));
  };
  useEffect(() => {
    getAllDatabase();
  }, []);

  return (
    <div className="container overflow-hidden mx-auto p-12 w-3/5">
    
      <div className="flex justify-between ">
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4">
          Bases de datos y Frameworks
        </h1>
        <div>
          <button className="btn bg-[#89CFD9] text-[#232323] border-white inline-flex items-center font-light  sm:btn-md btn-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden sm:block">Agregar</span>
          </button>
        </div>
      </div>
      <div className="relative overflow-y-scroll mt-3"  style={{height: "80vh"}} >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                ID
              </th>
              <th scope="col" className="px-6 py-3 w-9/12">
                Nombre
              </th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {database !== null
              ? database.data.map((e) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={e.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {e.id}
                    </th>
                    <td className="sm:px-6 sm:py-4">{e.name}</td>
                    <td>
                      <UpdateButton></UpdateButton>
                    </td>
                    <td>
                      <DeleteButton></DeleteButton>
                    </td>
                  </tr>
                ))
              : false}
          </tbody>
        </table>
      </div>

     </div>
  );
};

export default DatabaseTable;
