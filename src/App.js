import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const HomePage = React.lazy(() => import('./views/Home'));
const RegisterPage = React.lazy(() => import('./views/Register'));
const Error404Page = React.lazy(() => import('./views/Error404'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
