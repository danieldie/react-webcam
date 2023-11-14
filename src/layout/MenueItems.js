import {
  UilCreateDashboard, UilAlignAlt, UilSearch, UilLaptop, UilStore
} from '@iconscout/react-unicons';
import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import propTypes from 'prop-types';
import { OutBoundType } from '../redux/DashboardSearch/actionCreator';

function MenuItems({ toggleCollapsed }) {
  const { t } = useTranslation();
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const { topMenu } = useSelector((state) => {
    return {
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  });

  const path = '/admin';
  const pathName = window.location.pathname;
  const pathArray = pathName && pathName !== '/' ? pathName.split(path) : [];
  const mainPath = pathArray.length > 1 ? pathArray[1] : '';
  const mainPathSplit = mainPath.split('/');
  const dispatch = useDispatch();
  const [openKeys, setOpenKeys] = React.useState(
    !topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[1] : 'dashboard'}`] : [],
  );

  const onOpenChange = (keys) => {
    setOpenKeys(keys[keys.length - 1] !== 'recharts' ? [keys.length && keys[keys.length - 1]] : keys);
  };

  const onClick = (item) => {
    if (item.keyPath.length === 1) setOpenKeys([]);
    if(item.key === "SalesSearch") {
      dispatch(OutBoundType(4));
    }
  };

  
  const items = [
    getItem(
      <NavLink onClick={toggleCollapsed} to={path}>
        {t('dashboard')}
      </NavLink>,
      'dashboard',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={path}>
          <UilCreateDashboard />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'inventory'}>
        {t('inventory')}
      </NavLink>,
      'inventory',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={'inventory'}>
          <UilAlignAlt />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'SalesSearch'}>
        {t('Sales Search')}
      </NavLink>,
      'SalesSearch',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={'SalesSearch'}>
          <UilSearch />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed} to={'lotManagement'}>
        {t('Lot Management')}
      </NavLink>,
      'lotManagement',
      !topMenu && (
        <NavLink className="menuItem-iocn" to={'lotManagement'}>
          <UilLaptop />
        </NavLink>
      ),
    ),
    getItem(
      <NavLink onClick={toggleCollapsed}>
        {t('Government Devices')}
      </NavLink>,
      'governementDevices',
      !topMenu && (
        <NavLink className="menuItem-iocn">
          <UilStore />
        </NavLink>
      ),[
        getItem(
          <NavLink onClick={toggleCollapsed} to={'lotInfo'}>
            {t('Lot Infomation')}
          </NavLink>,
          'lotInfo',
        ),
        getItem(
          <NavLink onClick={toggleCollapsed} to={'imageUpload'}>
            {t('Image Upload')}
          </NavLink>,
          'imageUpload',
        )
      ]
    ),
  ];

  return (
    <Menu
      onOpenChange={onOpenChange}
      onClick={onClick}
      mode={!topMenu || window.innerWidth <= 991 ? 'inline' : 'horizontal'}
      // // eslint-disable-next-line no-nested-ternary
      selectedKeys={ mainPathSplit.length > 1 ? [mainPathSplit[1]] : ['dashboard']}
      defaultSelectedKeys={
        !topMenu
          ? [
            `${mainPathSplit.length === 1 ? 'home' : mainPathSplit.length === 2 ? mainPathSplit[1] : mainPathSplit[2]
            }`,
          ]
          : []
      }
      defaultOpenKeys={!topMenu ? [`${mainPathSplit.length > 2 ? mainPathSplit[mainPathSplit.length - 1] : 'dashboard'}`] : []}
      overflowedIndicator={<UilEllipsisV />}
      openKeys={openKeys}
      items={items}
    />
  );
}

MenuItems.propTypes = {
  toggleCollapsed: propTypes.func,
};

export default MenuItems;
