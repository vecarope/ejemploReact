import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 }  from './views/Error404';
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const HomePage = React.lazy(() => import('./views/Home'));
const RegisterPage = React.lazy(() => import('./views/Register'));
const LoginPage = React.lazy(() => import(`./views/Login`));
const ApplicationFormPage = React.lazy(() => import('./views/ApplicationForm'));



function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="application" element={<ApplicationFormPage />} />
          <Route path="/404" element={<Error404/>}/>
          <Route path="*" element={<Navigate to ="/404"/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
