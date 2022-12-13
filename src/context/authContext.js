import { createContext, useState } from 'react';
import { postLoginAxios } from '../hooks/postAxios';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

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
          const b = Swal.getHtmlContainer().querySelector('b');
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      });
    }
  };

  const data = { userData, userLogout, postLogin };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
