import React from 'react'
import logo from "../../assets/images/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png"
import { AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-[#1E239A] text-neutral-content text-center">
      <div className="items-center grid-flow-col">
        <img class="w-40" src={ logo } alt="Logo"/>
      </div> 
      <p className='justify-center mx-auto'>Copyright © 2022 - Devsafio</p>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a className='w-40' href="https://www.linkedin.com/company/devsafio/" target="_blank" rel="noopener         noreferrer">
          <AiOutlineLinkedin size="3rem" href='https://www.linkedin.com/company/devsafio/'/>
        </a> 
      </div>
  </footer>

  )
}

export default Footer
        

