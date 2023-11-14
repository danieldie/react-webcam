import React, { useState, useEffect,lazy, Suspense, } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Skeleton,DatePicker, Select ,Button} from 'antd';
import { Card, Space } from 'antd';
import moment from 'moment';
import { Main, SalesSearchWrapper, DatePickerWrappers} from './Style';
import SearchTable from '../../../components/table/SearchTable';
import { DataService } from '../../../config/dataService/dataService';
import { OutBoundType } from '../../../redux/DashboardSearch/actionCreator';

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

function SalesSearch() {

    const OutBoundTypeState = useSelector((state) => state.OutBound.data)
    const initailDate = useSelector((state) => state.search.data);
    const dateFormat = 'MM/DD/YYYY';
    const defaultStartDate = moment(initailDate.startDate, 'MM/DD/YYYY');
    const defaultEndDate = moment(initailDate.endDate, 'MM/DD/YYYY');
    const [poID, setPoID] = useState("");
    const [wareValue, setwareValue] = useState("");
    const [outBoundValue, setOutBoundValue] = useState("");
    
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
    const [sendData, setSendData] = useState({})

    useEffect(() => {
        getPOID_SelectBoxList();
    },[])

    useEffect(() => {
        if(OutBoundTypeState === 4)
        {
            setOutBoundValue("")
        }
        if(OutBoundTypeState === 0) {
            setOutBoundValue("Parts")
        }
        if(OutBoundTypeState === 1) {
            setOutBoundValue("Sales")
        }
        if(OutBoundTypeState === 2) {
            setOutBoundValue("Smelt")
        }
        setSendDataType(OutBoundTypeState);
    }, [OutBoundTypeState])

    const getPOID_SelectBoxList = async () => {
        const res = await DataService.post('sales-search/get-po-lot-data');
        res.data.data.map((item) => {
            setSelectBoxListPOID((prev) => [...prev, {
                value: item,
                title: item
            }])
        })
    }

    const setSendDataType = (index) => {
        let tmpOutValue = "";
        if(index === 4) tmpOutValue = ""
        if(index === 0) tmpOutValue = "Parts"
        if(index === 1) tmpOutValue = "Sales"
        if(index === 2) tmpOutValue = "Smelt"
        const tmpData = {
            inboundStart: stateInDateStart.dateString,
            inboundEnd: stateInDateEnd.dateString,
            outboundStart: stateOutDateStart.dateString,
            outboundEnd: stateOutDateEnd.dateString,
            poID: poID,
            wareValue: wareValue,
            outBoundValue: tmpOutValue
        }
        setSendData(tmpData)
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

    const onSearchAction = () => {
        const tmpData = {
            inboundStart: stateInDateStart.dateString,
            inboundEnd: stateInDateEnd.dateString,
            outboundStart: stateOutDateStart.dateString,
            outboundEnd: stateOutDateEnd.dateString,
            poID: poID,
            wareValue: wareValue,
            outBoundValue: outBoundValue
        }
        setSendData(tmpData)
    }
    const onReset = () => {
        setOutBoundValue("")
        setwareValue("");
        setPoID("");
        setStateInDateStart({
            date: null,
            dateString: "",
        })
        setStateInDateEnd({
            date: null,
            dateString: "",
        })
        setStateOutDateEnd({
            date: null,
            dateString: initailDate.startDate,
        })
        setStateOutDateEnd({
            date: null,
            dateString: initailDate.endDate,
        })
        const tmpData = {
            inboundStart: "",
            inboundEnd: "",
            outboundStart: initailDate.startDate,
            outboundEnd: initailDate.endDate,
            poID: "",
            wareValue: "",
            outBoundValue: ""
        }
        setSendData(tmpData)
    }

    return (
        <>
            <Main>
                <Row gutter={25}>
                    <Col xxl={18} xs={24}>
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
                                                        <DatePicker onChange={onChangeOutStartDate} format={dateFormat} value={moment(stateOutDateStart.dateString, 'MM/DD/YYYY')}/>
                                                    </DatePickerWrappers>
                                                </div>
                                            </div>
                                            <div className='toDate date-filter align-center-v'>
                                                <label>Outbound To</label>
                                                <div className='date-pick'>
                                                    <DatePickerWrappers>
                                                        <DatePicker onChange={onChangeOutEndDate}  format={dateFormat} value={moment(stateOutDateEnd.dateString, 'MM/DD/YYYY')} />
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
                                                <Select style={{ width: 250 }} 
                                                    value = {poID}
                                                    onChange={handleChangePO}
                                                    showSearch
                                                    optionFilterProp="children"
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
                                                <Select style={{ width: 250 }} value = {wareValue} onChange={handleChangeWare}>
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
                                                <Select style={{ width: 250 }} value = {outBoundValue} onChange={handleChangeOutbound}>
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
                                                <Button type="primary" size="" onClick={ onSearchAction } >
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
                                type = {'mainTable'}
                                title = {'Sales'}
                                sendData = {sendData}
                            />
                        </Card>
                    </Col>
                    <Col xxl={6} xs={24}>
                        <Row gutter={25}>
                            <Col xs={24}>
                                <SearchTable 
                                    type = {'Clear'}
                                    title = {'Clear Status By Outbound Type'}
                                    sendData = {sendData}
                                />
                            </Col>
                            <Col xs={24}>
                                <SearchTable 
                                    type = {'Outbound'}
                                    title = {'By Outbound Type'}
                                    sendData = {sendData}
                                /> 
                            </Col>
                            <Col xs={24}>
                                <SearchTable 
                                    type = {'Grade'}
                                    title = {'By Grade'}
                                    sendData = {sendData}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Main>
        </>
    );
}

export default SalesSearch;
