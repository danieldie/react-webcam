
import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import IconEdit2 from "./Icons/Edit";
import IconDeleteOutline from "./Icons/Delete";
import IconTouchpad from "./Icons/Touch";
import { Sorter } from "./sorter"
const { confirm } = Modal;

function ActionGroup({ record }) {
    
    const [open, setOpen] = useState(false);

    const editRow = (ID) => {
        setOpen(true);
    }
  
    const handleOk = () => {
        setOpen(false);
    };
    
    const handleCancel = () => {
        setOpen(false);
    };
    
    const deleteRow = (ID) => {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content:
                <div>
                    <p>Do you want to delete this row?</p>
                    Selected row ID is:{ID}
                </div>,
            onOk() {
                deleteData(ID)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const deleteData = (ID) => {
    }
    
    const touchRow = (ID) => {
    }
    
    return (
        <>  
            <Modal
                open={open}
                title="Edit"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="Save" type="primary" onClick={handleOk}>
                        Save
                    </Button>
                ]}
            >
                <p>Selected ID: {record.ID}</p>
                <p>Response Date from API</p>
            </Modal>

            <a style={{color:'grey'}} onClick={() => touchRow(record.ID)}> <IconTouchpad /></a>
            <a style={{marginLeft:'5px'}} onClick={() => editRow(record.ID)}> <IconEdit2 /></a>
            <a style={{color:'red', marginLeft:'5px'}} onClick={() => deleteRow(record.ID)}> <IconDeleteOutline /></a>
        </>
    )
}
ActionGroup.prototype = {
    record: PropTypes.object
}
export default ActionGroup;

