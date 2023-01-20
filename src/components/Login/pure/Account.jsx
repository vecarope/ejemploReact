import React,{useState} from 'react';
import Option from './Option';
import { loginOptions } from '../../../common/loginOptions';
import { useAuth } from '../../../context/authContext';
import { useNavigate } from 'react-router-dom'
import { DiChrome } from 'react-icons/di';


const Account = ({ change }) => {

  const { loginWithGoogle} = useAuth(); 
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleGoogleSignin = async () => {
    try {
      const google = await loginWithGoogle();
      console.log('google',google);
      navigate("/");
    } catch ( error) {
      setError(error.message);
    }
  };
  
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 p-4 max-w-xs md:max-w-lg mx-auto">
      {loginOptions.map((ele) =>
        ele.title === 'Ingresa con tu mail' ? (
          <button
            key={ele.id}
            className="py-1 md:col-span-2 md:col-start-2"
            onClick={() => change('email')}
          >
            <Option info={ele} key={'option' + ele.id} />
          </button>
        ) : (
          <button
            key={ele.id}
            className="py-1 md:col-span-2" /* onClick={() => **aqui iria la llamada a la api para el login de cada opcion} */
          >
            <Option info={ele} key={'option' + ele.id} />
          </button>
        )
      )}
    </div>
    <div className="form-control mt-6 justify-items-center ">
    <button onClick={handleGoogleSignin} className="btn bg-white py-1 md:col-span-2 text-black"><DiChrome />Google</button>
  </div>
  </>
  );
};

export default Account;
