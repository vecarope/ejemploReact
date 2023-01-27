import {ExportCompanies} from './Buttons/Buttons'

const AdminCompanies = () => {
    

  let Companies = [
      {
        id: 1,
        name: 'Ignacio',
        lastName: 'Guiloff',
        email: 'iguiloff@gmail.com',
        phone: '7895487324',
        companyName: 'Array Spa',
        workArea: 'Diseñador UX/UI,Analista QA',
      },
      {
        id: 2,
        name: 'Elon',
        lastName: 'Musk',
        email: 'emusk@spacex.com',
        phone: '8895887828',
        companyName: 'Space X',
        workArea: 'Desarrollador Frontend,Desarrollador Full Stack / Backend',        
      },
    ];  
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
        <div className="sm:max-w-screen-sm lg:max-w-screen-sm xl:max-w-screen-xl">
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
                </tr>
              </thead>
                <tbody>
                {Companies.map((e) => (
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
                    <td className="px-6 py-4">{e.workArea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
 
      </div>
    );
  };
  
  export default AdminCompanies;
  