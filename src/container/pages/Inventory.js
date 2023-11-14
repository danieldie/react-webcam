import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { UserTableStyleWrapper } from './style';

import { TableWrapper } from '../styled';

import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import CustomTable from '../../components/table/CustomTable';
import { DataService } from '../../config/dataService/dataService';


function Inventory() {
  const [usersTableData, setUsersTableData] = useState([]);
  const [totalNum, setTotalNum] = useState(0);

  const token = Cookies.get('access_token');

  const auth_token = token; // Replace with your actual JWT token

  // Create a configuration object with the headers
  const config = {
    headers: {
      Authorization: `Bearer ${auth_token}`,
    },
  };

  const postObject = {
    "draw": 2,
    "start": 0,
    "length": 10,
    "search": {
      "value": "",
      "regex": true
    },
    "customSearch": "",
    "outboundModel": "",
    "outboundType": ""
  }

  const usersTableColumns = [
    {
      title: 'SERIAL',
      dataIndex: 'SERIAL',
      key: 'SERIAL',
    },
    {
      title: 'MEID_DEC',
      dataIndex: 'MEID_DEC',
      key: 'MEID_DEC',
    },
    {
      title: 'MEID_HEX',
      dataIndex: 'MEID_HEX',
      key: 'MEID_HEX',
    },
    {
      title: 'IMEI_HEX',
      dataIndex: 'IMEI_HEX',
      key: 'IMEI_HEX',
    },
    {
      title: 'INBOUND_LIST',
      dataIndex: 'INBOUND_LIST',
      key: 'INBOUND_LIST',
    },
    {
      title: 'INBOUND_DATE',
      dataIndex: 'INBOUND_DATE',
      key: 'INBOUND_DATE',
    },
    {
      title: 'INBOUND_MODEL',
      dataIndex: 'INBOUND_MODEL',
      key: 'INBOUND_MODEL',
    },
    {
      title: 'OUTBOUND_LIST',
      dataIndex: 'OUTBOUND_LIST',
      key: 'OUTBOUND_LIST',
    },
    {
      title: 'OUTBOUNDDATE',
      dataIndex: 'OUTBOUNDDATE',
      key: 'OUTBOUNDDATE',
    },
    {
      title: 'OUTBOUND_MODEL',
      dataIndex: 'OUTBOUND_MODEL',
      key: 'OUTBOUND_MODEL',
    },
    {
      title: 'OUTBOUND_PRICE',
      dataIndex: 'OUTBOUND_PRICE',
      key: 'OUTBOUND_PRICE',
    },
    {
      title: 'OUTBOUND_TYPE',
      dataIndex: 'OUTBOUND_TYPE',
      key: 'OUTBOUND_TYPE',
    },
    {
      title: 'GRADE',
      dataIndex: 'GRADE',
      key: 'GRADE',
    },
    {
      title: 'FUNCTIONALITY',
      dataIndex: 'FUNCTIONALITY',
      key: 'FUNCTIONALITY',
    },
    {
      title: 'FILE_NAME',
      dataIndex: 'FILE_NAME',
      key: 'FILE_NAME',
    },
    {
      title: 'WAREHOUSE',
      dataIndex: 'WAREHOUSE',
      key: 'WAREHOUSE',
    },
    {
      title: 'INBOUND_PART_NUM',
      dataIndex: 'INBOUND_PART_NUM',
      key: 'INBOUND_PART_NUM',
    },
    {
      title: 'CLEAR_STATUS',
      dataIndex: 'CLEAR_STATUS',
      key: 'CLEAR_STATUS',
    },
    {
      title: 'CLEAR_TYPE',
      dataIndex: 'CLEAR_TYPE',
      key: 'CLEAR_TYPE',
    },
    {
      title: 'MSN',
      dataIndex: 'MSN',
      key: 'MSN',
    },
  ];

  const UpdatePostObject = (index, listCnt, filter_ESN, filter_Model, filter_Type) => {
    postObject.start = parseInt((index - 1) * listCnt)
    postObject.length = listCnt;
    postObject.outboundModel = filter_Model
    postObject.customSearch = filter_ESN
    filter_Type === "All" ? filter_Type = "" : filter_Type = filter_Type
    postObject.outboundType = filter_Type;
  }

  const SearchEngine = (index, listCnt, filter_ESN, filter_Model, filter_Type) => {
    UpdatePostObject(index, listCnt, filter_ESN, filter_Model, filter_Type)
    getInitalTableData();
  }

  const getCurrentData = (index, listCnt, filter_ESN, filter_Model, filter_Type) => {
    UpdatePostObject(index, listCnt, filter_ESN, filter_Model, filter_Type)
    getInitalTableData()
  }

  useEffect(() => {
    getInitalTableData()
  }, []);


  const getInitalTableData = async () => {
    try {
      const response = await DataService.post('/tmo-inventory/search', postObject)
      setUsersTableData(response.data.data)
      setTotalNum(response.data.recordsFiltered)
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  const PageRoutes = [
    {
      path: 'index',
      breadcrumbName: 'Dashboard',
    },
    {
      path: '',
      breadcrumbName: 'Inventory',
    },
  ];


  return (
    <>
      <PageHeader className="ninjadash-page-header-main" title="Inventory" routes={PageRoutes} />
      <Cards headless>
        <UserTableStyleWrapper>
          <TableWrapper className="table-responsive">
            <CustomTable
              rowSelection={false}
              tableData={usersTableData}
              columns={usersTableColumns}
              filterOnchange={false}
              filterOption={true}
              totalNum={totalNum}
              SearchEngine={SearchEngine}
              getCurrentData={getCurrentData}
            />
          </TableWrapper>
        </UserTableStyleWrapper>
      </Cards>
    </>
  );
}

export default Inventory;
