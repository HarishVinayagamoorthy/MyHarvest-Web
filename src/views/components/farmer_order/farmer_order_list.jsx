import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, DatePicker, Modal, Select, Space, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import PageTitle from '../common/page_title';
import dayjs from 'dayjs';
import moment from 'moment';
import { FaEye } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import SearchBox from '../common/search_box';
import { useTranslation } from 'react-i18next';
import { IoMdAddCircle } from 'react-icons/io';
import { formatStatus } from '@helpers/constants';


const FarmerOrderList = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [demand_date, set_demand_date] = useState(null)

    const dataSource = [
        {
            key: '1',
            orderId: '12345',
            date: '18/07/2024',
            farmerName: 'Elumalai',
            mobile: '9876567878',
            status: 'Pending',
        },
        {
            key: '2',
            orderId: '12346',
            date: '17/07/2024',
            farmerName: 'Ravi',
            mobile: '9876543210',
            status: 'Completed',
        },
    ];
    const handle_view = (record) => {
        navigate(`/admin/farmer-order/${record.key}`)
    }

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Farmer Name',
            dataIndex: 'farmerName',
            key: 'farmerName',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: formatStatus,
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <FaEye className='view-icon' onClick={() => { handle_view(record) }} />
            ),
        },
    ];
    let farmers = [
        {
            label: "Elumalai",
            value: "elumalai"
        },
        {
            label: "Ravi",
            value: "ravi"
        }
    ]
    let Status = [
        {
            label: "Pending",
            value: "pending"
        },
        {
            label: "Completed",
            value: "completed"
        }
    ]



    const handle_change = (date) => {
        set_demand_date(date)
    }



    useEffect(() => {
        set_demand_date(dayjs(moment(new Date()).format("DD-MM-YYYY"), 'DD-MM-YYYY'))
    }, [])
    return (
        <div>
            <PageTitle title={"Farmer Order"} is_color={true} />

            <div className='farmer-list-filter-container'>
                <div className='farmer-body-filter-container'>
                    <DatePicker.RangePicker onChange={handle_change} format={"DD-MM-YYYY"} />
                    <Select options={farmers} placeholder={"Farmer"} style={{ width: "200px" }} />
                    <Select options={Status} placeholder={"Status"} style={{ width: "200px" }} />
                </div>
                <SearchBox />
            </div>
            <Table dataSource={dataSource} columns={columns} />

        </div>
    )
}

export default FarmerOrderList
