import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const SalesSearch = lazy(() => import('../../container/pages/SalesSearch/SalesSearch'))
const NotFound = lazy(() => import('../../container/pages/404'));

function SalesSearchPage() {
  return (
    <Routes>
      <Route index element={<SalesSearch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default SalesSearchPage;
