import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const LotInfo = lazy(() => import('../../container/pages/LotInfo/LotInfo'))
const NotFound = lazy(() => import('../../container/pages/404'));

function LotInfoPage() {
  return (
    <Routes>
      <Route index element={<LotInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default LotInfoPage;
