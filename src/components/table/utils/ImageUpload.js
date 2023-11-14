
import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Input, Row, Col,Card ,Image} from 'antd';
import {
    UilImage
  } from '@iconscout/react-unicons';

function ImageDialog({ record }) {
    
    const [open, setOpen] = useState(false);
    const [serial, setSerial] = useState(record.SERIAL)
    const [agency, setAgency] = useState(record.Agency)
    const [status, setStatus] = useState(record.Status)
    const [inboundmodel, setInboundmodel] = useState(record.InboundModel)
    const [outbounddate, setOutbounddate] = useState(record.OutboundDate)
    const showImages = () => {
        setOpen(true);
    }
  
    const handleOk = () => {
        setOpen(false);
    };
    
    const handleCancel = () => {
        setOpen(false);
    };
    
    return (
        <>  
            <Modal
                open={open}
                title="Government Details"
                onOk={handleOk}
                onCancel={handleCancel}
                width={1500}
                footer={[
                    <Button key="Save" type="primary" onClick={handleOk}>
                        Done
                    </Button>
                ]}
            >
                <Row gutter={25}>
                    <Col xl={12} xs={24}>
                        <Card>
                            <div className="datatable-filter__input">
                                <span className="label">Serial</span>
                                <Input className="customeInput" value={serial}  placeholder="Search with Outbound Model" />
                            </div>
                            <div className="datatable-filter__input">
                                <span className="label">Agency</span>
                                <Input className="customeInput" value={agency} placeholder="Search with Outbound Model" />
                            </div>
                            <div className="datatable-filter__input">
                                <span className="label">Status</span>
                                <Input className="customeInput" value={status}  placeholder="Search with Outbound Model" />
                            </div>
                        </Card>
                    </Col>
                    <Col xl={12} xs={24}>
                        <Card>
                            <div className="datatable-filter__input">
                                <span className="label">INBOUNDMODEL</span>
                                <Input className="customeInput" value={inboundmodel}  placeholder="Search with Outbound Model" />
                            </div>
                            <div className="datatable-filter__input">
                                <span className="label">OUTBOUNDDATE</span>
                                <Input className="customeInput" value={outbounddate}  placeholder="Search with Outbound Model" />
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xl={12} xs={24}>
                        <Card>
                            <p style={{fontWeight:'700'}}>Inbound Image</p>
                            <img 
                                src="../images/InboundImage.png"
                                alt=":( Not Found"
                                style={{width:'100%'}}
                            />
                        </Card>
                    </Col>
                    <Col xl={12} xs={24}>
                        <Card>
                            <p style={{fontWeight:'700'}}>Outbound Image</p>
                            <img 
                                src="../images/OutboundImage.png"
                                alt=":( Not Found"
                                style={{width:'100%'}}
                            />
                        </Card>
                    </Col>
                </Row>
            </Modal>

            <a style={{marginLeft:'5px'}} onClick={showImages}> <UilImage /></a>
        </>
    )
}
ImageDialog.prototype = {
    record: PropTypes.object
}
export default ImageDialog;

