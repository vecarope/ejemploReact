import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLoginAxios } from '../hooks/postAxios';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // const [token, setToken] = useState(null);

  let timerInterval;
  const navigate = useNavigate();

  const loginStatus = async (user) => {
    setUserData(user);
    userData !== null ? navigate('/application') : navigate('/register');
    console.log(Object.values(user));
  };

  const logoutStatus = async () => {
    setUserData(null);
    userData !== null ? navigate('/application') : navigate('/register');
  };

  const postLogin = async (values) => {
    const { user } = await postLoginAxios(values);
    localStorage.setItem('userInfo', { user });
    console.log('USER DESDE POSTLOGIN -> ', user);
    loginStatus(localStorage.getItem('userInfo'));
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

  const data = { userData, postLogin, logoutStatus };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
