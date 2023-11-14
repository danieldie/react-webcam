import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ImageUpload = lazy(() => import('../../container/pages/ImageUpload/ImageUpload'))
const NotFound = lazy(() => import('../../container/pages/404'));

function ImageUploadRoute() {
  return (
    <Routes>
      <Route index element={<ImageUpload />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default ImageUploadRoute;
