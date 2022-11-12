import React, { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../../../assets/images/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import logoColor from "../../../assets/images/DEV IMAGOTIPO COLOR HORIZONTAL.png"





const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav)
    }

  return (
    <nav className="flex justify-between items-center h-20 text-white justify-between px-2 py-3 bg-[#1E239A]">
      <Link to={"/"}>
        <img class="w-40" src={ logo } alt="Logo"/>
      </Link>

      <ul className="hidden md:flex gap-3">
        <li className="p-4"><a href="/Logín">Iniciar Sesión</a></li>
        <li className="p-4"><a href="/">Administra la Pagina</a></li>
        <button type="button" className="p-4 bg-[#E2F2FE]] text-[#E2F2FE] p-3 border-2 border-sky-500] rounded-lg ...">
        <a href="/register">Registrate</a></button>
        <button className="p-4 bg-[#E2F2FE] text-[#1E239A] p-3 rounded-lg ...">
        <a href="/contact">Contactanos</a></button>
      </ul>
        
        

      <div onClick={handleNav} className="md:hidden text-blue">
        { <AiOutlineMenu size={40} className="text-[#E2F2FE]"/>}
      </div>
        
      
      <div className={ `
            md:hidden flex flex-col ${nav ? "fixed left-0 top-0 z-10 bg-white  w-full border-r border-r-blue-900 bg-[#E2F2FE] ease-in-out duration-500" : "ease-in-out duration-500 fixed left-[-100%]"}`}>
        
        <div className="flex justify-between items-center">
          <Link to={"/"} className="justify-between px-2 py-3">
            <img class="w-40" src={ logoColor } alt="LogoColor"/>
          </Link>
            
          {<AiOutlineClose onClick={handleNav} size={40} className="text-[#1E239A] md:hidden"/>}
            
        </div>
        
         
        <ul className="pt-12 uppercase text-blue-500 p-4 justify-center ...">
          <li className="p-4 border-b border-blue-600"><a href="/">Inicio</a></li>
          <li className="p-4 border-b border-blue-600"><a href="/Logín">Logín</a></li>
          <li className="p-4 border-b border-blue-600"><a href="/register">Registro</a></li>
          <li className="p-4"><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
