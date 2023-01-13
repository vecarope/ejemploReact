import apiClient from '../services/api.service';
import { FiEdit2 } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import '../assets/componentsCSS/button.css';
import { useAuth } from '../context/authContext';


const xlsx = require('xlsx');

const exportExcelWorkProfile = async () => {
  try {
    const datas = await apiClient.get('/export-excel/excelworkprofiles');
    let workSheetColumnNames = datas.data.workSheetColumnNames;
    let workSheetValues = datas.data.workSheetValues;
    console.log(workSheetColumnNames);
    const workSheetName = '';
    let data = workSheetValues;
    const workBook = xlsx.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    return xlsx.writeFile(workBook, 'WorkProfiles.xlsx');
  } catch ({ error }) {
    return error.message;
  }
};
const exportExcelContactCompanies = async () => {
  try {
    const datas = await apiClient.get('/export-excel/excelcontactcompanies');
    let workSheetColumnNames = datas.data.workSheetColumnNames;
    let workSheetValues = datas.data.workSheetValues;
    console.log(workSheetColumnNames);
    const workSheetName = '';
    let data = workSheetValues;
    const workBook = xlsx.utils.book_new();
    const workSheetData = [workSheetColumnNames, ...data];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    return xlsx.writeFile(workBook, 'ContactosEmpresas.xlsx');
  } catch ({ error }) {
    return error.message;
  }
};

const AdminLayout = () => {
  const { userData } = useAuth();

  return (
    <div className="grid container  h-40 mx-auto m-5 w-80 mr-10 md:w-screen md:h-50 md:mt-3 lg:my-10 ml-3 lg:mx-20 lg:w-screen lg:h-80 lg:m-12">
      <div className='container text-end  ml-3 md:mx-10 h-25 mx-25'>
      <button
        onClick={exportExcelWorkProfile}
        className="btn btn-blue inline-flex items-center font-light mx-1 btn-sm lg:btn-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
        Exportar Perfiles
      </button>
      <button
        onClick={exportExcelContactCompanies}
        className="inline-flex items-center btn btn-blue py-3 m-4 font-light mx-1 btn-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          ></path>
        </svg>
        Exportar Contactos Empresas
      </button>
      </div>
      
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl mt-4 md:mb-2 lg:mb-4 ">
        ¡Bienvenido!
      </h1>
        <hr className=" border-black" />
      <div className="grid grid-cols-2 gap-2 justify-between sm:grid-cols-3 lg:justify-between mb-2 mt-2 lg:mb-7 lg:gap-6 lg:mt-10">
        <div className="col-start-1">
          <SlUser className="w-11 h-11 mr-7" />
        </div>
        <div className="col-start-1 sm:col-start-2">
          <h1 className="font-bold text-xl">
            {userData.firstName} {userData.lastName}
          </h1>
          <p className="text-lg">Pais</p>
        </div>
        <div className="flex justify-end">
          <FiEdit2 />
        </div>
      </div>
      <div className="flex justify-start sm:justify-around md:justify-around gap-8 mb-2 mt-4 lg:mb-7">
        <div className="flex gap-5">
          <AiOutlineMail className=" text-xl" />
          <p className="hidden md:block">{userData.email}</p>
        </div>
        <div className="flex gap-5">
          <AiOutlinePhone className=" text-xl" />
          <p className="hidden md:block">numero telefonico</p>
        </div>
        <a
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com"
        >
          <BsLinkedin className=" rounded-3xl w-6 h-6" />
        </a>
        <a
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/"
        >
          <BsGithub className=" w-6 h-6" />
        </a>
      </div>
      </div>
  );
};

export default AdminLayout;
