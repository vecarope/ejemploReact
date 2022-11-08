import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../../assets/images/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

//import Button from "../../Buttons";


//justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8"

/*export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 md:bg-[#1E239A] md-3 sm-null shadow-md w-full fixed top-0 left-0">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#login"
              >
                <Link to={"/"}>
                    <img class="w-40" src={ logo } alt="Logo"/>
                </Link>
              </a>
              <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/"
                  >
                  
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Inicia Sesión</span>
                  
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#admin"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Administra la página</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="/register"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Registrate</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#contact"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Contáctanos</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }*/

//max-w-[1240px] mx-auto px-4

const Navbar = () => {
    const [nav, setNav] = useState(true)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-24  text-white md:bg-[#1E239A] justify-between px-2 py-3">
      <Link to={"/"}>
        <img class="w-40" src={ logo } alt="Logo"/>
      </Link>

      <ul className="hidden md:flex">
        <li className="p-4">Iniciar Sesión</li>
        <li className="p-4">Administra la Pagina</li>
        <li className="p-4"><a href="/register">Registrate</a></li>
        <li className="p-4">Contactanos</li>
      </ul>

      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
        
      
      <div className={!nav ? "fixed left-0 top-0 z-10 bg-white md:max-w-[50%] w-full border-r border-r-blue-900 bg-[#E2F2FE] ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}>
        <h1 className="w-full text-3x1 font-bold text-[#1E239A] m-4">Menú</h1>

        <ul className="pt-12 uppercase text-blue-500 p-4">
          <li className="p-4 border-b border-blue-600">Iniciar Sesión</li>
          <li className="p-4 border-b border-blue-600">Administra la Pagina</li>
          <li className="p-4 border-b border-blue-600"><a href="/register">Registrate</a></li>
          <li className="p-4">Contactanos</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;

//fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-900 bg-[#E2F2FE]



/*const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white md:bg-[#1E239A]'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;*/