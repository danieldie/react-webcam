import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'; 

import { DashboardCounter } from '../../../../redux/gallary/actionCreator';
import { DataService } from '../../../../config/dataService/dataService';
import OverviewCard from '../../../../components/cards/OverviewCard';
import { OverviewDataStyleWrap } from '../../Style';
import OverviewData from '../../../../demoData/overviewData.json';
import { OutBoundType } from '../../../../redux/DashboardSearch/actionCreator';

const OverviewDataList = React.memo(({ column }) => {
  const value = useSelector((state) => state.search.data);
  const overviewData1 = useSelector((state) => state.gallery.data);
  const OverviewDataSorted = OverviewData.slice(0, 4);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(DashboardCounter(value));
  }, [value]);

  const boardClick = (index) => {
    dispatch(OutBoundType(index));
    navigate('/admin/SalesSearch')
  }

  return (
    <OverviewDataStyleWrap>
      <Row gutter={25}>
        {overviewData1.map((item, i) => {
          return (
            <Col xxl={column === '2' ? null : 6} md={6} xs={24} key={i} onClick={() => boardClick(i)}  className='panel-border'>
                <OverviewCard data={item} contentFirst />
            </Col>
          );
        })}
      </Row>
    </OverviewDataStyleWrap>
  );
});

OverviewDataList.propTypes = {
  column: propTypes.string,
};

OverviewDataList.defaultProps = {
  column: '2',
};

export default OverviewDataList;
