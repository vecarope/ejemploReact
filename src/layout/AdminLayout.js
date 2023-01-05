import React from 'react';
import apiClient from '../services/api.service';
import { GrDocumentTransfer } from 'react-icons/gr';
import { FiEdit2 } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import
  {
    MdOutlineBookmarkAdded,
    MdOutlineEventAvailable
  } from 'react-icons/md';
import { RiFolderUserLine, RiDeleteBinLine } from 'react-icons/ri';
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
    <div className="grid container mx-auto mr-10 md:w-screen md:mt-5 lg:my-10 ml-3 lg:mx-20 lg:w-screen m-5 lg:m-12">
      <div className='container text-end  ml-3 md:mx-20 '>
      <button
        onClick={exportExcelWorkProfile}
        className="inline-flex items-center px-4 py-2 m-4 bg-[#2738F5] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md text-[#FFFFFF]"
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
        className="inline-flex items-center px-4 py-2 m-4 bg-[#2738F5] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md text-[#FFFFFF]"
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
      
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl md:mb-3 lg:mb-4 ">
        ¡Bienvenido!
      </h1>
      <br />
      <br />
      <div className="lg:flex lg:justify-between mb-2 lg:mb-6 ">
        <div className="flex gap-6 md:text-md lg:text-lg mb-2">
          <GrDocumentTransfer /> <h1 className="mr-2">sube tu Cv </h1>
        </div>
        <div className="flex ml-10 gap-8 justify-between">
          <h2 className="text-sm">url Cv</h2>
          <button onClick={'modal'}>
            <FiEdit2 />
          </button>
        </div>
        </div>
        <hr className=" border-black" />
      <div className="grid grid-cols-2 gap-2 justify-between sm:grid-cols-3 lg:justify-between mb-2 mt-4 lg:mb-7 lg:gap-6 lg:mt-10">
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
      <hr className=" border-black" />
      <div className="lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex gap-5 text-lg">
          <MdOutlineBookmarkAdded />
          <h2>Experiencia Laboral</h2>
        </div>
        <div className="flex ml-10 gap-8 justify-between">
          <div className=" lg:text-end text-sm">
            <h2 className="font-bold">
              Experiencia</h2>
            <h2>Nivel Ingles </h2>
          </div>
          <div>
            <FiEdit2 />
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex gap-5 text-lg">
          <MdOutlineEventAvailable />
          <p>Disponibilidad</p>
        </div>
        <div className="flex gap-8 justify-between">
          <div className="text-start ml-10 lg:text-end text-sm">
            <h2 className="font-bold">Full time</h2>
            <h2>Disponibilidad inmediata</h2>
          </div>
          <div>
            <FiEdit2 />
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="lg:flex lg:justify-between mb-4 lg:mb-7 mt-4 lg:mt-10">
        <div className="flex gap-6 text-lg">
          <RiFolderUserLine />
          <p>Rol y salario actual</p>
        </div>
        <div className="flex gap-8 justify-between">
          <div className="text-start ml-10 lg:text-end text-sm">
            <p className="font-bold">Empresa</p>
            <p>Salario anual 1.000.000 clp</p>
          </div>
          <div>
            <FiEdit2 />
          </div>
        </div>
        </div>
        <hr className="border-black" />
        <div className="mb-4 p-1 lg:mb-7 mt-4 lg:mt-10">
          <div className="flex justify-between mb-8">
            <h1 className="text-2xl">Habilidades</h1>
            <FiEdit2 className="mt-2" />
          </div>
          <div className="gap-5 lg:gap-12 grid-col">
            <div className=" flex flex-row">
              <div className="flex-col space-y-3 ">
                <h1 className="mb-4">Avanzado</h1>
                <h1 className="mb-4">Experimentado</h1>
                <h1 className=" mt-2">Principiante</h1>
            </div>
          </div>
        </div>
        </div>
      <hr className="border-black" />
      <div className="lg:flex-col p-1 mb-4 lg:mb-7 mt-4 lg:mt-10">
        <h1 className=" text-2xl mb-10">Educación</h1>
        <div className=" flex justify-between">
          <div>
            <h1 className=" text-blue-700 text-sm font-bold">fecha</h1>
            <h1 className="text-2xl">Institucion</h1>
            <h1 className=" text-blue-700 text-sm font-bold">
              Carrera
            </h1>
          </div>
          <div className=" flex gap-5 justify-between">
            <FiEdit2 />
            <RiDeleteBinLine />
          </div>
          </div>
        </div>
      </div>
  );
};

export default AdminLayout;
