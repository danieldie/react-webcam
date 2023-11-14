import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Inventory = lazy(() => import('../../container/pages/Inventory'));
const NotFound = lazy(() => import('../../container/pages/404'));

function InventoryRoutes() {
  return (
    <Routes>
      <Route index element={<Inventory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default InventoryRoutes;
