import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const HomePage = React.lazy(() => import('./views/Home'));
const RegisterPage = React.lazy(() => import('./views/Register'));
const ApplicationFormPage = React.lazy(() => import('./views/ApplicationForm'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="application" element={<ApplicationFormPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
