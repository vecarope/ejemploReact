import { UpdateButton, DeleteButton } from './Buttons/Buttons';

const ToolsTable = () => {
  let tools = [
    {
      id: 1,
      name: 'Github'
    },
    {
      id: 2,
      name: 'Adobe Illustrator'
    },
    {
      id: 3,
      name: 'Adobe Photoshop'
    },
    {
      id: 4,
      name: 'Adobe XD'
    },
    {
      id: 5,
      name: 'AWS'
    }
  ];

  return (
    <div className="grid container  h-40 mx-auto m-5 w-80 mr-10 md:w-screen md:h-50 md:mt-3 lg:my-10 ml-3 lg:mx-20 lg:w-screen lg:h-80 lg:m-12">
      <div className="grid container my-10 mr-1 md:mx-5 lg:mx-5">
        <div className="grid grid-cols-8 sm:grid-cols-6 gap-4 ml-5">
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4  col-start-1 col-end-3">
            Herramientas
          </h1>
          <div className="col-end-8 sm:col-end-6 lg:col-end-6 xl:col-end-7 col-span-1">
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
        <div className="sm:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-xl">
          <div className="relative overflow-x-auto ">
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
                {tools.map((e) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsTable;
