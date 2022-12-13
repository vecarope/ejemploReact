import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Login from '../../components/Login';

const LoginPage = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-b from-mid-light-blue via-mid-blue to-dark-purple min-h-screen flex justify-center items-center">
      {userData ? <Navigate to={'/'} /> : <Login />}
    </div>
  );
};

export default LoginPage;
