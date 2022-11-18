import React from 'react';
import Option from './Option';
import { loginOptions } from '../../../common/loginOptions';

const Account = ({ change }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {loginOptions.map((ele) =>
        ele.title === 'Ingresa con tu mail' ? (
          <div>
            <button onClick={() => change('email')}>
              <Option info={ele} key={'option' + ele.id} />
            </button>
          </div>
        ) : (
          <div>
            <button /* onClick={() => **aqui iria la llamada a la api para el login de cada opcion} */
            >
              <Option info={ele} key={'option' + ele.id} />
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default Account;
