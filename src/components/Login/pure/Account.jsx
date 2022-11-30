import React from 'react';
import Option from './Option';
import { loginOptions } from '../../../common/loginOptions';

const Account = ({ change }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-4 max-w-xs md:max-w-lg mx-auto">
      {loginOptions.map((ele) =>
        ele.title === 'Ingresa con tu mail' ? (
          <button
            className="md:col-span-2 md:col-start-2"
            onClick={() => change('email')}
          >
            <Option info={ele} key={'option' + ele.id} />
          </button>
        ) : (
          <button
            className="md:col-span-2" /* onClick={() => **aqui iria la llamada a la api para el login de cada opcion} */
          >
            <Option info={ele} key={'option' + ele.id} />
          </button>
        )
      )}
    </div>
  );
};

export default Account;
