import React from 'react';
import { Outlet } from 'react-router-dom';
import apiClient from '../services/api.service';
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
  return (
    <>
      <Outlet />
    <div class="text-center">

      <button
        onClick={exportExcelWorkProfile}
        class="inline-flex items-center px-4 py-2 m-4 bg-[#2738F5] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md text-[#FFFFFF]"
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
        class="inline-flex items-center px-4 py-2 m-4 bg-[#2738F5] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md text-[#FFFFFF]"
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
    </>
  );
};

export default AdminLayout;
