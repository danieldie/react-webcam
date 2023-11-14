import React, { useState } from "react"
import { Button, Modal, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import IconEdit2 from "./Icons/Edit";
import IconDeleteOutline from "./Icons/Delete";
import IconTouchpad from "./Icons/Touch";
import { Sorter } from "./sorter"
import ActionGroup from "./ActionGroup";
import ImageDialog from "./ImageUpload";
const { confirm } = Modal;

const mainTableColums = [
    {
      title: 'SERIAL',
      dataIndex: 'SERIAL',
      key: 'SERIAL',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 10
      }
    },
    {
      title: 'IMEIHEX',
      dataIndex: 'IMEI_HEX',
      key: 'IMEI_HEX',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 9
      }
    },
    {
      title: 'INBOUNDMODEL',
      dataIndex: 'INBOUND_MODEL',
      key: 'INBOUND_MODEL',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 8
      }
    },
    {
      title: 'INBOUNDDATE',
      dataIndex: 'INBOUND_DATE',
      key: 'INBOUND_DATE',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 7
      }
    },
    {
      title: 'PRICE',
      dataIndex: 'OUTBOUND_PRICE',
      key: 'OUTBOUND_PRICE',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 6
      }
    },
    {
      title: 'OutboundModel',
      dataIndex: 'OUTBOUND_MODEL',
      key: 'OUTBOUND_MODEL',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 5
      }
    },
    {
      title: 'Grade',
      dataIndex: 'GRADE',
      key: 'GRADE',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 4
      }
    },
    {
      title: 'OutboundDate',
      dataIndex: 'INBOUND_DATE',
      key: 'INBOUND_DATE',
      sorter: {
        compare: Sorter.DATE,
        multiple: 3
      }
    },
    {
      title: 'ClearStatus',
      dataIndex: 'CLEAR_STATUS',
      key: 'CLEAR_STATUS',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 2
      }
    },
    {
      title: 'Warehouse',
      dataIndex: 'WAREHOUSE',
      key: 'WAREHOUSE',
      sorter: {
        compare: Sorter.DEFAULT,
        multiple: 1
      }
    },
]

const mainTableMocData = [
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'909353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },
    {
      SERIAL:'089353038504284480',
      IMEIHEX:'233453312',
      INBOUNDMODEL:'SOCKVOIT098 16GB',
      INBOUNDDATE:'10/1/2023',
      PRICE:'$100',
      OutboundModel:'SOCKVOIT098 16GB',
      Grade:'Smelt',
      OutboundDate:'10/1/2023',
      ClearStatus:'No',
      Warehouse:'IMM'
    },

  ]

const OutboundTableColums = [
    {
        title: 'Outbound Type',
        dataIndex: 'OutboundType',
        key: 'OutboundType',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 3
        }
    },
    {
        title: 'Qty',
        dataIndex: 'Qty',
        key: 'Qty',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 2
        }
    },
    {
        title: '%Total',
        dataIndex: 'Total',
        key: 'Total',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 1
        }
    },
]

const OutboundTableMocData = [
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%',
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
]

const ClearTableColums = [
    {
        title: 'Outbound Type',
        dataIndex: 'OutboundType',
        key: 'OutboundType',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 4
        }
        },
    {
        title: 'Not Cleared',
        dataIndex: 'NotCleared',
        key: 'NotCleared',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 3
        }
        },
    {
        title: 'Cleared...',
        dataIndex: 'Cleared',
        key: 'Cleared',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 2
        }
        },
    {
        title: '%Not cleared',
        dataIndex: 'Notcleared',
        key: 'Notcleared',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 1
        }
    },
]

const ClearTableMocData = [
    {
        OutboundType:'Accessroies',
        NotCleared:'0',
        Cleared:'31.55',
        Notcleared:'0.00%'
    },
    {
        OutboundType:'Accessroies',
        NotCleared:'0',
        Cleared:'31.55',
        Notcleared:'0.00%'
    },
    {
        OutboundType:'Accessroies',
        NotCleared:'0',
        Cleared:'31.55',
        Notcleared:'0.00%'
    },
    {
        OutboundType:'Accessroies',
        NotCleared:'0',
        Cleared:'31.55',
        Notcleared:'0.00%'
    },
    {
        OutboundType:'Accessroies',
        NotCleared:'0',
        Cleared:'31.55',
        Notcleared:'0.00%'
    },
]

const GradeTableColums = [
    {
        title: 'Outbound Type',
        dataIndex: 'OutboundType',
        key: 'OutboundType',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 3
        }
    },
    {
        title: 'Qty',
        dataIndex: 'Qty',
        key: 'Qty',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 2
        }
    },
    {
        title: '%Total',
        dataIndex: 'Total',
        key: 'Total',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 1
        }
    },
]

const GradeTableMocData = [
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
    {
        OutboundType:'Sales',
        Qty:'236,345',
        Total:'31.55%'
    },
]

const lotTableColums = [
    {
        title: 'Lot ID',
        dataIndex: 'LotID',
        key: 'LotID',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 10
        }
    },
    {
        title: 'ANS Qty',
        dataIndex: 'ANSQty',
        key: 'ANSQty',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 9
        }
    },
    {
        title: 'Scan Qty',
        dataIndex: 'ScanQty',
        key: 'ScanQty',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 8
        }
    },
    {
        title: 'Missing',
        dataIndex: 'Missing',
        key: 'Missing',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 7
        }
    },
    {
        title: 'Extra',
        dataIndex: 'Extra',
        key: 'Extra',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 6
        }
    },
    {
        title: 'Variance',
        dataIndex: 'Variance',
        key: 'Variance',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 5
        }
    },
    {
        title: 'QC Owner',
        dataIndex: 'QCOwner',
        key: 'QCOwner',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 4
        }
    },
    {
        title: 'QC Date',
        dataIndex: 'QCDate',
        key: 'QCDate',
        sorter: {
            compare: Sorter.DATE,
            multiple: 3
        }
    },
    {
        title: 'Location',
        dataIndex: 'Location',
        key: 'Location',
        sorter: {
            compare: Sorter.DEFAULT,
            multiple: 2
        }
    },
    {
        title: 'Inbound Date',
        dataIndex: 'InboundDate',
        key: 'InboundDate',
        sorter: {
          compare: Sorter.DATE,
          multiple: 1
      }
    },
    {
        title: 'Actions',
        render: (_, record) => {
            return (
                <>
                    <ActionGroup record = {record} />
                </>
            )
        }
    }
]

const lotTableMocData = [
    {
        ID:1,
        LotID: 'DC45TRW0931231',
        ANSQty: '7,152',
        ScanQty: '7,153',
        Missing: '2',
        Extra: '3',
        Variance: '5',
        QCOwner: null,
        QCDate: '10/1/2023',
        Location: 'DC45',
        InboundDate: '3/23/2023'
    },
    {
        ID:2,
        LotID: 'DC45TRW0931231',
        ANSQty: '7,152',
        ScanQty: '7,153',
        Missing: '2',
        Extra: '3',
        Variance: '5',
        QCOwner: null,
        QCDate: '10/1/2023',
        Location: 'DC45',
        InboundDate: '3/23/2023'
    },
    {
        ID:3,
        LotID: 'DC45TRW0931231',
        ANSQty: '7,152',
        ScanQty: '7,153',
        Missing: '2',
        Extra: '3',
        Variance: '5',
        QCOwner: null,
        QCDate: '10/1/2023',
        Location: 'DC45',
        InboundDate: '3/23/2023'
    },
    {
        ID:4,
        LotID: 'DC45TRW0931231',
        ANSQty: '7,152',
        ScanQty: '7,153',
        Missing: '2',
        Extra: '3',
        Variance: '5',
        QCOwner: null,
        QCDate: '10/1/2023',
        Location: 'DC45',
        InboundDate: '3/23/2023'
    },
    {
        ID:5,
        LotID: 'DC45TRW0931231',
        ANSQty: '7,152',
        ScanQty: '7,153',
        Missing: '2',
        Extra: '3',
        Variance: '5',
        QCOwner: null,
        QCDate: '10/1/2023',
        Location: 'DC45',
        InboundDate: '3/23/2023'
    },
    {
        ID:6,
        LotID: 'DC45TRW0931231',
        ANSQty: '7,152',
        ScanQty: '7,153',
        Missing: '2',
        Extra: '3',
        Variance: '5',
        QCOwner: null,
        QCDate: '10/1/2023',
        Location: 'DC45',
        InboundDate: '3/23/2023'
    },
]

const lotInfoTableColums = [
  {
    title: 'SERIAL',
    dataIndex: 'SERIAL',
    key: 'SERIAL',
    sorter: {
        compare: Sorter.DEFAULT,
        multiple: 8
    }
  }, 
  {
    title: 'IMEIHEX',
    dataIndex: 'IMEIHEX',
    key: 'IMEIHEX',
    sorter: {
        compare: Sorter.DEFAULT,
        multiple: 7
    }
  }, 
  {
    title: 'Agency',
    dataIndex: 'Agency',
    key: 'Agency',
    sorter: {
        compare: Sorter.DEFAULT,
        multiple: 6
    }
  }, 
  {
    title: 'FileName',
    dataIndex: 'FileName',
    key: 'FileName',
    sorter: {
        compare: Sorter.DEFAULT,
        multiple: 5
    }
  }, 
  {
    title: 'Inbound Model',
    dataIndex: 'InboundModel',
    key: 'InboundModel',
    sorter: {
        compare: Sorter.DEFAULT,
        multiple: 4
    }
  }, 
  {
    title: 'Inbound Date',
    dataIndex: 'InboundDate',
    key: 'InboundDate',
    sorter: {
        compare: Sorter.DATE,
        multiple: 3
    }
  }, 
  {
    title: 'Outbound Date',
    dataIndex: 'OutboundDate',
    key: 'OutboundDate',
    sorter: {
        compare: Sorter.DATE,
        multiple: 2
    }
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    sorter: {
      compare: Sorter.DATE,
      multiple: 1
    }
  },  
  {
    title: 'Images(Inbound/Outbound)',
    render: (_, record) => {
      return (
          <>
              <ImageDialog record = {record} />
          </>
      )
    }
  }
]

const lotInfoTableMocData = [
  {
    ID:1,
    SERIAL: '02211431398092817',
    IMEIHEX: '104879209121',
    Agency: 'N/A',
    FileName: 'ADHGOVT091827KS',
    InboundModel: 'IPHONE XR',
    InboundDate: '09/29/2023',
    OutboundDate: '09/30/2023',
    Status:'Closed',
  },
  {
    ID:2,
    SERIAL: '02211431398092817',
    IMEIHEX: '104879209121',
    Agency: 'N/A',
    FileName: 'ADHGOVT091827KS',
    InboundModel: 'IPHONE XR',
    InboundDate: '09/29/2023',
    OutboundDate: '09/30/2023',
    Status:'Closed',
  },
  {
    ID:3,
    SERIAL: '02211431398092817',
    IMEIHEX: '104879209121',
    Agency: 'N/A',
    FileName: 'ADHGOVT091827KS',
    InboundModel: 'IPHONE XR',
    InboundDate: '09/29/2023',
    OutboundDate: '09/30/2023',
    Status:'Closed',
  },
  {
    ID:4,
    SERIAL: '02211431398092817',
    IMEIHEX: '104879209121',
    Agency: 'N/A',
    FileName: 'ADHGOVT091827KS',
    InboundModel: 'IPHONE XR',
    InboundDate: '09/29/2023',
    OutboundDate: '09/30/2023',
    Status:'Closed',
  },
  {
    ID:5,
    SERIAL: '02211431398092817',
    IMEIHEX: '104879209121',
    Agency: 'N/A',
    FileName: 'ADHGOVT091827KS',
    InboundModel: 'IPHONE XR',
    InboundDate: '09/29/2023',
    OutboundDate: '09/30/2023',
    Status:'Closed',
  }
]

export {mainTableColums, 
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
    lotInfoTableMocData,
};

