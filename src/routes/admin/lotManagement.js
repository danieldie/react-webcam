import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LotManagement = lazy(() => import('../../container/pages/lotManagement/lotManagement'))
const NotFound = lazy(() => import('../../container/pages/404'));

function LotManagementPage() {
  return (
    <Routes>
      <Route index element={<LotManagement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default LotManagementPage;
