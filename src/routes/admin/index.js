import { Spin } from 'antd';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './dashboard';
import Gallery from './gallery';
import Inventory from './inventory';
import SalesSearch from './SalesSearch';
import LotManagement from './lotManagement';
import LotInfo from './lotInfo';
import ImageUpload from './imageUpload';
import withAdminLayout from '../../layout/withAdminLayout';
import { DataService } from '../../config/dataService/dataService';
import { SearchValue } from '../../redux/DashboardSearch/actionCreator';

const Components = lazy(() => import('./components'));
const Firebase = lazy(() => import('./firebase'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Admin = React.memo(() => {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  // dispatch(SearchValue(preMonth));
  const setInitDashboardSectionValue = async () => {
    try {
      const value = {
        startDate: '',
        endDate: ''
      }
      const response = await DataService.post("/dashboard/get-config-date",value);
      const initData = {
        lastUpdate: response.data.data.sales.lastUpdated,
        startDate: response.data.data.dashboard.startDate,
        endDate: response.data.data.dashboard.endDate,  
      }
      
      dispatch(SearchValue(initData))
    } catch (error) {
      console.log("Error getting the value", error);
    }
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
    tokenCheck();
    setInitDashboardSectionValue();
  }, [pathname]);
  const tokenCheck = async () => {
    try {
      const response = await DataService.get('/tokenCheck')
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }
  return (
    <Suspense
      fallback={
        <div className="spin">
          <Spin />
        </div>
      }
    >
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route index path="inventory/*" element={<Inventory />} />
        <Route index path="SalesSearch/*" element={<SalesSearch />} />
        <Route index path="lotManagement/*" element={<LotManagement />} />
        <Route index path="lotInfo/*" element={<LotInfo />} />
        <Route index path="imageUpload/*" element={<ImageUpload />} />
        <Route path="gallery/*" element={<Gallery />} />
        <Route path="components/*" element={<Components />} />
        {/* <Route path="app/kanban/*" element={<Kanban />} /> */}
        <Route path="firestore/*" element={<Firebase />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
});

export default withAdminLayout(Admin);
