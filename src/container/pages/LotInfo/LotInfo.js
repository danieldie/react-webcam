import React, { useState, useEffect,lazy, Suspense, } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton,DatePicker, Select ,Button} from 'antd';
import { Card, Space } from 'antd';
import moment from 'moment';
import { Main, SalesSearchWrapper, DatePickerWrappers} from './Style';
import SearchTable from '../../../components/table/SearchTable';
import { DataService } from '../../../config/dataService/dataService';

const SelectBoxListWarehouse = [
    {
        value: "",
        title: "Please Select"
    },
    {
        value: "IMM",
        title: "IMM"
    },
    {
        value: "MANUAL PO ENTRY",
        title: "MANUAL PO ENTRY"
    },
    {
        value: "DC45",
        title: "DC45"
    },
    {
        value: "RW2",
        title: "RW2"
    },
]

const SelectBoxListOutboundType = [
    {
        value: "",
        title: "Please Select"
    },
    {
        value: "Smelt",
        title: "Smelt"
    },
    {
        value: "WIP",
        title: "WIP"
    },
    {
        value: "Sales",
        title: "Sales"
    },
    {
        value: "Parts",
        title: "Parts"
    },
    {
        value: "Accessories",
        title: "Accessories"
    },
]
const SelectBoxListAgenctType = [
    {
        value: "",
        title: "Please Select"
    },
    {
        value: "N/A",
        title: "N/A"
    },

]

function LotInfo() {
    const initailDate = useSelector((state) => state.search.data);
    const dateFormat = 'MM/DD/YYYY';
    const defaultStartDate = moment(initailDate.startDate, 'MM/DD/YYYY');
    const defaultEndDate = moment(initailDate.endDate, 'MM/DD/YYYY');
    const [poID, setPoID] = useState("");
    const [wareValue, setwareValue] = useState("");
    const [outBoundValue, setOutBoundValue] = useState("");
    const [agencyValue, setAgencyValue] = useState("")

    const [searchData, setSearchData] = useState({
        inDateStart: initailDate.startDate,
        inDateEnd: initailDate.endDate,
    });
    const [stateInDateStart, setStateInDateStart] = useState({
        date: null,
        dateString: "",
    })
    const [stateInDateEnd, setStateInDateEnd] = useState({
        date: null,
        dateString: "",
    })
    const [stateOutDateStart, setStateOutDateStart] = useState({
        date: null,
        dateString: initailDate.startDate,
    })
    const [stateOutDateEnd, setStateOutDateEnd] = useState({
        date: null,
        dateString: initailDate.endDate,
    })
    const onChangeInStartDate = (date, dateString) => {
        setStateInDateStart({ ...stateInDateStart, date, dateString });
    };
    const onChangeInEndDate = (date, dateString) => {
        setStateInDateEnd({ ...stateInDateEnd, date, dateString });
    };
    const onChangeOutStartDate = (date, dateString) => {
        setStateOutDateStart({ ...stateOutDateStart, date, dateString });
    };
    const onChangeOutEndDate = (date, dateString) => {
        setStateOutDateEnd({ ...stateOutDateEnd, date, dateString });
    };

    const [selectBoxListPOID, setSelectBoxListPOID] = useState([]); 

    useEffect(() => {
        getPOID_SelectBoxList();
    },[])

    const getPOID_SelectBoxList = async () => {
        const res = await DataService.post('sales-search/get-po-lot-data');
        res.data.data.map((item) => {
            setSelectBoxListPOID((prev) => [...prev, {
                value: item,
                title: item
            }])
        })
    }

    const filterOption = (input, option) =>
        (option?.value ?? '').toLowerCase().includes(input.toLowerCase());

    const handleChangePO = (value) => {
        setPoID(value);
    }
    const handleChangeWare = (value) => {
        setwareValue(value);
    }
    const handleChangeOutbound = (value) => {
        setOutBoundValue(value);
    }
    const handleChangeAgency = (value) => {
        setAgencyValue(value);
    }
    
    const onSearch = () => {
        setSearchData({
            inDateStart: "",
            inDateEnd: "",
        })
    }
    const onReset = () => {
        
    }

    return (
        <>
            <Main>
                <Row gutter={25}>
                    <Col xxl={24} xs={24}>
                        <Card >
                            <Row gutter={25}>
                                <Col lg={12} xs={24}>
                                    <SalesSearchWrapper>
                                        <div className="banner-cta__content">
                                            <div className='from date-filter align-center-v'>
                                                <label>Inbound From</label>
                                                <div className='date-pick'>
                                                    <DatePickerWrappers>
                                                        <DatePicker onChange={onChangeInStartDate} format={dateFormat} defaultValue={""} />
                                                    </DatePickerWrappers>
                                                </div>
                                            </div>
                                            <div className='toDate date-filter align-center-v'>
                                                <label>Inbound To</label>
                                                <div className='date-pick'>
                                                    <DatePickerWrappers>
                                                        <DatePicker onChange={onChangeInEndDate} format={dateFormat} defaultValue={""} />
                                                    </DatePickerWrappers>
                                                </div>
                                            </div>
                                            <div className='from date-filter align-center-v'>
                                                <label>Outbound From</label>
                                                <div className='date-pick'>
                                                    <DatePickerWrappers>
                                                        <DatePicker onChange={onChangeOutStartDate} format={dateFormat} defaultValue={defaultStartDate} />
                                                    </DatePickerWrappers>
                                                </div>
                                            </div>
                                            <div className='toDate date-filter align-center-v'>
                                                <label>Outbound To</label>
                                                <div className='date-pick'>
                                                    <DatePickerWrappers>
                                                        <DatePicker onChange={onChangeOutEndDate} format={dateFormat} defaultValue={defaultEndDate} />
                                                    </DatePickerWrappers>
                                                </div>
                                            </div>
                                        </div>
                                    </SalesSearchWrapper>
                                </Col>
                                <Col lg={12} xs={24}>
                                    <SalesSearchWrapper>
                                        <div className="banner-cta__content">
                                            <div className='from date-filter align-center-v'>
                                                <label>PO/Lot ID</label>
                                                <Select style={{ width: 400 }} 
                                                    value = {poID} 
                                                    onChange={handleChangePO}
                                                    showSearch
                                                    optionFilterProp="children"
                                                    onSearch={onSearch}
                                                    filterOption={filterOption}
                                                    >
                                                    <Select.Option value = "" > Please Select </Select.Option>
                                                    {
                                                        selectBoxListPOID.map((item) => {
                                                            return (
                                                                <Select.Option value = {item.value} > {item.title} </Select.Option>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </div>
                                            <div className='date-filter align-center-v'>
                                                <label>Warehouse</label>
                                                <Select style={{ width: 400 }} value = {wareValue} onChange={handleChangeWare}>
                                                    {
                                                        SelectBoxListWarehouse.map((item) => {
                                                            return (
                                                                <Select.Option value = {item.value} > {item.title} </Select.Option>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </div>

                                            <div className='date-filter align-center-v'>
                                                <label>Outbound Type</label>
                                                <Select style={{ width: 400 }} value = {outBoundValue} onChange={handleChangeOutbound}>
                                                    {
                                                        SelectBoxListOutboundType.map((item) => {
                                                            return (
                                                                <Select.Option value = {item.value} > {item.title} </Select.Option>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </div>
                                            <div className='date-filter align-center-v'>
                                                <label>Agency</label>
                                                <Select style={{ width: 400 }} value = {agencyValue} onChange={handleChangeAgency}>
                                                    {
                                                        SelectBoxListAgenctType.map((item) => {
                                                            return (
                                                                <Select.Option value = {item.value} > {item.title} </Select.Option>
                                                            )
                                                        })
                                                    }
                                                </Select>
                                            </div>
                                            <div className='date-filter align-center-v'>
                                                <Button type="primary" size="" onClick={ onSearch } >
                                                    Search
                                                </Button>
                                                <Button type="primary" size="" onClick={ onReset } >
                                                    Reset
                                                </Button>
                                            </div>
                                        </div>
                                    </SalesSearchWrapper>
                                </Col>
                            </Row>
                        </Card>
                        <Card >
                            <SearchTable 
                                type = {'LotInfo'}
                                title = {'LotInfo'}
                                SearchData = {searchData}
                            />
                        </Card>
                    </Col>
                    
                </Row>
            </Main>
        </>
    );
}

export default LotInfo;
