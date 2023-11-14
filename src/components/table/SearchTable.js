import { Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  mainTableColums,
  mainTableMocData,
  OutboundTableColums,
  OutboundTableMocData,
  ClearTableColums,
  ClearTableMocData,
  GradeTableColums,
  GradeTableMocData,
  lotTableColums,
  lotTableMocData,
  lotInfoTableColums,
  lotInfoTableMocData
} from './utils/data';
import { DataTableStyleWrap } from './Style';
import { TableWrapper } from '../../container/styled';
import { DataService } from '../../config/dataService/dataService';


function SearchTable({ type, title, sendData }) {
  const [pageSize, setPageSize] = useState(15);
  const [mocData, setMocData] = useState([]);
  const [sortColum, setSortColum] = useState([]);
  const [filterNum, setFilterNum] = useState(0);
  const ChangeSize = (page, size) => {
    setPageSize(size);
    if(type === 'mainTable') {
      let postData = {
        draw: 2,
        start: size * (page - 1),
        length: size,
        search: {
          value: '',
          regex: false,
        },
        inboundStartDate: sendData.inboundStart,
        inboundEndDate: sendData.inboundEnd,
        outboundStartDate: sendData.outboundStart,
        outboundEndDate: sendData.outboundEnd,
        poLotId: sendData.poID,
        warehouse: sendData.wareValue,
        outboundType: sendData.outBoundValue
      }
      getTabelData(postData);
    }
    
  }

  const sortTableData = (tableColums) => {
    const sortableColumns = tableColums.map((column) => {
      const { sorter, dataIndex, ...otherColumnProps } = column;

      if (sorter) {
        const { compare, ...otherSorterProps } = sorter;

        return {
          ...otherColumnProps,
          dataIndex,
          sorter: {
            compare: (rowA, rowB) => compare(rowA[dataIndex], rowB[dataIndex]),
            ...otherSorterProps
          }
        };
      }

      return { ...otherColumnProps, dataIndex };
    });
    setSortColum(sortableColumns)
  }

  const getTabelData = async (payload) => {
    const response = await DataService.post('/sales-search/get-sales-data', payload);
    setFilterNum(response.data.recordsFiltered)
    sortTableData(mainTableColums)
    setMocData(response.data.data)
  }


  useEffect(() => {
    if (type === 'mainTable') {
      if (Object.keys(sendData).length > 0) {
        let postData = {
          draw: 2,
          start: 0,
          length: 15,
          search: {
            value: '',
            regex: false,
          },
          inboundStartDate: sendData.inboundStart,
          inboundEndDate: sendData.inboundEnd,
          outboundStartDate: sendData.outboundStart,
          outboundEndDate: sendData.outboundEnd,
          poLotId: sendData.poID,
          warehouse: sendData.wareValue,
          outboundType: sendData.outBoundValue
        }
        getTabelData(postData);

      }

    }
    if (type === 'Outbound') {
      sortTableData(OutboundTableColums)
      setMocData(OutboundTableMocData)
    }
    if (type === 'Clear') {
      sortTableData(ClearTableColums)
      setMocData(ClearTableMocData)
    }
    if (type === 'Grade') {
      sortTableData(GradeTableColums)
      setMocData(GradeTableMocData)
    }
    if (type === 'lotTable') {
      sortTableData(lotTableColums)
      setMocData(lotTableMocData)
    }
    if (type === 'LotInfo') {
      sortTableData(lotInfoTableColums)
      setMocData(lotInfoTableMocData)
    }
  }, [sendData]);

  return (
    <DataTableStyleWrap>
      {
        type === 'mainTable' ? (
          <div className='maintable-title'>
            {title}
          </div>
        ) : (
          <div className='normaltable-title'>
            {title}
          </div>
        )
      }
      <div className="ninjadasj-datatable">
        <TableWrapper className="table-data-view table-responsive">
          <Table
            pagination={{
              pageSize: pageSize,
              showSizeChanger: true,
              total: filterNum,
              onChange: (page, size) => {
                ChangeSize(page, size)
              }
            }}
            dataSource={mocData} columns={sortColum}
          />
        </TableWrapper>
      </div>
    </DataTableStyleWrap>
  );
}

SearchTable.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  sendData: PropTypes.object,
};
export default SearchTable;
