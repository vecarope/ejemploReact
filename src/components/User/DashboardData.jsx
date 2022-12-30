import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import { CgFileDocument } from 'react-icons/cg';

export const DashboardData = [
  {
    title: 'Home',
    icon: <AiOutlineHome />,
    path: '/user'
  },
  {
    title: 'Perfil',
    icon: <FiUserCheck />,
    path: '/user/profile'
  },
  {
    title: 'Test técnicos',
    icon: <CgFileDocument />,
    path: '/user/test'
  }
];
