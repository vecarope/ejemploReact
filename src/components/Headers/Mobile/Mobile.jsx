import React from "react";
import "./Mobile.css"



const Mobile = ({ open, setOpen }) => {
    return (
      <div class="bg-with-500 md:red-500 items-center text-blue-500 md:flex lg:null lg:shadow hidden-lg">
        <div className="close-icon" onClick={() => setOpen(!open)}>
          <i class="fi fi-br-cross close-icon"></i>
        </div>
        <div className="menu-mobiles" onClick={() => setOpen(!open)}>
          <ul aria-label="opciones">
            <li>
              <a href="/" aria-label="home">
                Inicio
              </a>
            </li>
            <li>
                <a href="/login" aria-label="login">
                    Login
                </a>
            </li>
            <li>
                <a href="/register" aria-label="registro">
                    Registro
                </a>
            </li>
            <li>
              <a href="/contact" aria-label="contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Mobile;
