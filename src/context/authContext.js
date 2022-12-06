import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLoginAxios } from '../hooks/postAxios';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  // const [token, setToken] = useState(null);

  let timerInterval;
  const navigate = useNavigate();

  /*  useEffect(() => {
    setUserData(user);
  }, []); */

  const postLogin = async (values) => {
    const { user } = await postLoginAxios(values);
    console.log('USER DESDE POSTLOGIN -> ', user);
    setUserData(user);
    console.log('USER DESDE USER -> ', userData);
    /*  Swal.fire({
      title: 'Bienvenido!',
      html: `Bienvenido, ${profile.user.firstName} ${profile.user.lastName},`,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }); */
  };

  userData.length !== 0 || null
    ? navigate('/application')
    : navigate('/register');

  const data = { userData, postLogin };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
