import { Input, Select, Table } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { DataTableStyleWrap } from './Style';
import { TableWrapper } from '../../container/styled';
import { Button } from '../buttons/buttons';

const { TextArea } = Input;

function CustomTable({ filterOption, filterOnchange, rowSelection, tableData, columns, totalNum, SearchEngine, getCurrentData }) {

  const [currentShowSize, setCurrentShowSize] = useState(10);

  const handleSearch = () => {
    const ESN = document.querySelector('.ninjadash-data-ESN').value;
    const OTM = document.querySelector('.ninjadash-data-OTM').value;
    const status = document.querySelector('.ninjadash-data-status .ant-select-selection-item').title;
    SearchEngine(1, currentShowSize, ESN, OTM, status);
  };

  const fetchData = (selectedPage, size) => {
    const ESN = document.querySelector('.ninjadash-data-ESN').value;
    const OTM = document.querySelector('.ninjadash-data-OTM').value;
    const status = document.querySelector('.ninjadash-data-status .ant-select-selection-item').title;
    getCurrentData(selectedPage, size, ESN, OTM, status);
    setCurrentShowSize(size);
  }

  return (
    <DataTableStyleWrap>
      {filterOption ? (
        <div className="ninjadash-datatable-filter">
          {!filterOnchange && (
            <div className="ninjadash-datatable-filter__left">
              <div className="ninjadash-datatable-filter__input">
                <span className="label">ESN:</span>
                <TextArea rows={4} className="ninjadash-data-ESN" placeholder="Search with ESN"
                  autoSize={{ minRows: 1, maxRows: 1 }}
                />
              </div>
              <div className="ninjadash-datatable-filter__input">
                <span className="label">Outbound Model:</span>
                <Input className="ninjadash-data-OTM" placeholder="Search with Outbound Model" />
              </div>
              <div className="ninjadash-datatable-filter__input">
                <span className="label">Outbound Type:</span>
                <Select style={{ width: 200 }} className="ninjadash-data-status" defaultValue="All">
                  <Select.Option value="All">All</Select.Option>
                  <Select.Option value="Parts">Parts</Select.Option>
                  <Select.Option value="Sales">Sales</Select.Option>
                  <Select.Option value="Smelt">Smelt</Select.Option>
                  <Select.Option value="WIP">WIP</Select.Option>
                </Select>
              </div>
              <div className="ninjadash-datatable-filter__action">
                <Button type="primary" size="small" onClick={handleSearch} >
                  Search
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        ''
      )}

      <div className="ninjadasj-datatable">
        <TableWrapper className="table-data-view table-responsive">
          {rowSelection ? (
            <Table
              rowSelection={{
                ...rowSelection,
              }}
              pagination={{  pageSize: currentShowSize,
                showSizeChanger: true,
                total: totalNum,
                onChange: (page, size) => {
                  fetchData(page, size)
                } }
              }
              dataSource={tableData}
              columns={columns}
            />
          ) : (
            <Table pagination={{
              pageSize: currentShowSize,
              showSizeChanger: true,
              total: totalNum,
              onChange: (page, size) => {
                fetchData(page, size)
              }
            }} dataSource={tableData} columns={columns} />
          )}
        </TableWrapper>
      </div>
    </DataTableStyleWrap>
  );
}

CustomTable.propTypes = {
  filterOption: PropTypes.bool,
  filterOnchange: PropTypes.bool,
  rowSelection: PropTypes.bool,
  tableData: PropTypes.array,
  columns: PropTypes.array,
  totalNum: PropTypes.number,
  SearchEngine: PropTypes.func,
  getCurrentData: PropTypes.func
};
export default CustomTable;
