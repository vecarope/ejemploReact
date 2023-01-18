import React, { useState, useEffect } from 'react';
import { GrDocumentTransfer } from 'react-icons/gr';
import { FiEdit2 } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import {
  MdOutlineBookmarkAdded,
  MdOutlineEventAvailable
} from 'react-icons/md';
import { RiFolderUserLine, RiDeleteBinLine } from 'react-icons/ri';
import { useAuth } from '../../context/authContext';
import apiClient from '../../services/api.service';
import Availability from '../../components/Modals/Availability';
import CvModal from '../../components/Modals/CvModal';
import WorkModal from '../../components/Modals/WorkModal';
import {RoleAndCurrentSalary}  from '../../components/Modals/RoleAndCurrentSalary';
import EducationModal from '../../components/Modals/EducationModal'

export default function UserProfile() {

  const { userData } = useAuth();

  const [profile,setProfile]= useState([]);
  const [education,setEducation]= useState([]);
  const [devLanguage,setLanguage]= useState([]);
  const [database, setDataBase] =useState([]);
  const [tools, setTools] = useState([]);
  

  useEffect(() => {
    async function getData() {
      const res = await apiClient.get('/applicant');
      setProfile(res.data[0])
      setEducation(res.data[1])
      setLanguage(res.data[2])
      setDataBase(res.data[3])
      setTools(res.data[4])
    }
    getData();
  },[]);

  const updateProfile = (newState) => {
    setProfile(prevState => ({...prevState, ...newState}));
  }; 
  
  const updateEducation =(newState) =>{
    setEducation(prevState =>([{...prevState, ...newState}]));
  };

  if (!userData)
    return (
      <div className="container m-8 ">
        <div className="alert bg-fill-light shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span className="text-primary">Cargado datos del usuario...</span>
          </div>
        </div>
      </div>
      )
    return (
    <div className="grid container mx-auto mr-10 md:w-screen md:mt-5 lg:my-10 ml-3 lg:mx-20 lg:w-screen m-5 lg:m-12">
      <h1 className="font-bold text-lg md:text-xl lg:text-2xl md:mb-3 lg:mb-4 ">  
        ¡Bienvenido!
      </h1>
      <br />
      <br />
      <div className="lg:flex lg:justify-between mb-2 lg:mb-6 ">
        <div className="flex gap-6 md:text-md lg:text-lg mb-2">
          <GrDocumentTransfer /> <h1 className="mr-2">sube tu Cv </h1>
        </div>
        <div className="flex ml-7 gap-8 justify-between">
          <h2 className="text-sm">{profile.cvUrl}</h2>
        </div>
        <div>
          <CvModal updateProfile={updateProfile} />
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
          <p className="text-lg">{profile.country}</p>
        </div>
        <div>
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
          <p className="hidden md:block">{profile.phoneNumber}</p>
        </div>
        <a
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href={`${profile.linkedinUrl}`}
        >
          <BsLinkedin className=" rounded-3xl w-6 h-6" />
        </a>
        <a
          role="button"
          target="_blank"
          rel="noopener noreferrer"
          href={`${profile.githubUrl}`}
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
            <h2 className="font-bold">{profile.devExperience}</h2>
            <h2>Nivel Ingles: {profile.englishLevel}</h2>
          </div>
          <div>
            <WorkModal updateProfile={updateProfile} />
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
            <h2 className="font-bold">{profile.workAvailability}</h2>
            <h2>Posibilidad de ingreso: {profile.availabilityStatus}</h2>
          </div>
          <div>
            <Availability updateProfile={updateProfile} />
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
            <p className="font-bold">{profile.stack}</p>
            <p> Salario actual: USD {profile.currentSalary}</p>
          </div>
          <div>
            <RoleAndCurrentSalary updateProfile={updateProfile} />
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
              {devLanguage.map((element, id) => (
                <div className=" md:flex lg:flex ">
                  <div
                    className="badge badge-outline border-light-purple p-1 pt-0 pb-0 rounded-md"
                    id={id}
                  >
                    {element.name}
                  </div>
                </div>
              ))}
              <h1 className="mb-4">Experimentado</h1>
              {database.map((element, id) => (
                <div className="md:flex lg:flex ">
                  <div
                    className="badge badge-outline border-light-purple p-1 pt-0 pb-0 rounded-md"
                    id={id}
                  >
                    {element.name}
                  </div>
                </div>
              ))}
              <h1 className=" mt-2">Principiante</h1>
              {tools.map((element, id) => (
                <div className="md:flex lg:flex">
                  <div
                    className="badge badge-outline border border-light-purple p-1 pt-0 pb-0 rounded-md"
                    id={id}
                  >
                    {element.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black" />
      <div className="lg:flex-col p-1 mb-4 lg:mb-7 mt-4 lg:mt-10">
        <h1 className=" text-2xl mb-10">Educación</h1>
        {education.map((element, id )=>(
        <div className=" flex justify-between" id={id}>
          <div>
            <h1 className=" text-blue-700 text-sm font-bold">{element.startMonth} {element.startYear} - {element.endMonth} {element.endYear}</h1>
            <h1 className="text-2xl">{element.name}</h1>
            <h1 className=" text-blue-700 text-sm font-bold">
              {element.instituteName}
            </h1>
          </div>
          <div className=" flex gap-5 justify-between">
            <EducationModal updateEducation={updateEducation} />
            <RiDeleteBinLine />
          </div>
        </div>))}
      </div>
    </div>
    ); 
}
