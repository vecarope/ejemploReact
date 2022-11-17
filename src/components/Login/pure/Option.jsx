import React from 'react';

const Option = ({ info }) => {
  /*       {
    id: 1,
    title: 'Ingresa con tu mail',
    icon: <TfiEmail />,
    color: 'white'
  } */
  return (
    <span
      className={`flex px-2.5 py-2 border-2 border-solid mx-auto 
           md:border-slate-700 border-slate-100
            rounded-xl text-center items-center ${info.color}`}
    >
      <div className="px-3">{info.icon}</div>

      <p>{info.title}</p>
    </span>
  );
};

export default Option;
