import { createContext, useState, useContext } from 'react';
import { postLoginAxios } from '../hooks/postAxios';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthContextProvider');
  }
  return context;
};

const initialUser = localStorage.getItem('user');

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(
    initialUser ? JSON.parse(initialUser) : null
  );

  const userLogout = () => {
    setUserData(null);
    localStorage.clear();
  };

  const postLogin = async (values) => {
    const { user, token } = await postLoginAxios(values);
    if (user) {
      setUserData(user);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      let timerInterval;
      Swal.fire({
        title: 'Bienvenido!',
        html: `Bienvenido, ${user.firstName} ${user.lastName},`,
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          timerInterval = setInterval(() => {
            Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      });
    }
  };

  const forgotPassword = async (values) => {
    // console.log('FORGOT PASSWORD =>', values);
    let timerInterval;
    Swal.fire({
      title: 'Enlace enviado!',
      html: `Revisa el email: ${values.email},`,
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    });
  };

  const restorePassword = async (values) => {
    // console.log('RESTORE PASSWORD =>', values);
    alert('Contraseña cambiana');
  };

  const data = {
    userData,
    userLogout,
    postLogin,
    forgotPassword,
    restorePassword
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
