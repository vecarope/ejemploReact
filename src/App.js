import React, { Suspense } from 'react';
import { AuthProvider } from './context/authContext';
import { Navigate, Route, Routes } from 'react-router-dom';
const Error404 = React.lazy(() => import('./views/Error404'));
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const HomePage = React.lazy(() => import('./views/Home'));
const RegisterPage = React.lazy(() => import('./views/Register'));
const LoginPage = React.lazy(() => import(`./views/Login`));
const ApplicationFormPage = React.lazy(() => import('./views/ApplicationForm'));
const UserHome = React.lazy(()=> import('./views/UserHome'));
const UserProfile = React.lazy(()=> import('./views/UserProfile'));
const UserTest= React.lazy(()=> import ('./views/UserTest'));

function App() {
  return (
    <Suspense>      
      <AuthProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="application" element={<ApplicationFormPage />} />
            <Route path="/404" element={<Error404 />} />
            
            <Route path='/userHome' exact element={<UserHome/>}/>
            <Route path='/userProfile' exact element={<UserProfile/>}/>
            <Route path='/userTest' element={<UserTest/>}/>
            
            <Route path="*" element={<Navigate to="/404" />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
