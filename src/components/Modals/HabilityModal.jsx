import { useState } from 'react';
import Modal from '../Modals/Index';
import * as FormField from '../Forms';
import { Form, Formik } from 'formik';
import '../../assets/componentsCSS/button.css';
import { FiEdit2 } from 'react-icons/fi';
import apiClient from '../../services/api.service';
//import Swal from 'sweetalert2';

function ShowLanguage(){
  alert("form lenguajes")
}
const HabilityModal = () => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowOptions(true)}>
        <FiEdit2 />
      </button>
      {showOptions ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
          <h3 className="text-3xl font-semibold">Escoge opción</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost text-black"
              onClick={() => setShowOptions(false)}
            >
              X
            </button>
            </div>
            <div onClick={ShowLanguage} className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b hover:bg-light-purple hover:text-white">Lenguajes</div>
            <div onClick={ShowLanguage} className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b hover:bg-light-purple hover:text-white">Herramientas</div>
            <div onClick={ShowLanguage} className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b hover:bg-light-purple hover:text-white">Frameworks</div>
          </div>
          </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ): null}
    </>
  );
};

export default HabilityModal
