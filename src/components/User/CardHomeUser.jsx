import React from 'react'

export default function CardHomeUser() {
    const dataCard =[
        {
            number: 1,
            b: "completa",
            text: "tu perfil usuario"
        },
        {
            number: 2,
            b: "realiza",
            text: "test técnicos"
        },
        {
            number: 3,
            b: "participa",
            text: "en show the code"
        },
        {
            number: 4,
            b: "recibe",
            text: "ofertas de trabajo"
        }
    ]
  return (
        <>
            {dataCard.map((item, index)=>(
            <div className="shadow-lg h-44 bg-fill-light rounded-md p-5 mb-4" key={index}>
            <div className="bg-dark-purple rounded-full content-center w-6 items-center mb-5">
                <h1 className=' m-2 rounded-full text-white items-center'>{item.number}</h1>
            </div>
            <b>{item.b}</b>
            <span> {item.text}</span>
            </div>
            ))}
        </>
  )
}
