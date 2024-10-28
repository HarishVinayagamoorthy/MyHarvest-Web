import React from 'react';
import { Table, Space, Button, DatePicker, Select } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import SearchBox from '../common/search_box';

const CustomerOrderList = () => {
    const navigate = useNavigate()

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Customer Name',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <FaEye className='view-icon' onClick={() => navigate(`/admin/customer-order/${record.orderId}`)} />
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            orderId: 'MYH204',
            customerName: 'Alosius Sujin',
            totalAmount: '₹1080',
        },
        {
            key: '2',
            orderId: 'MYH205',
            customerName: 'John Doe',
            totalAmount: '₹1200',
        },
    ];
    const location = [
        {
            label: "Chennai",
            value: "chennai"
        }
    ]
    return (
        <div style={{ padding: '24px' }}>
            <div className='farmer-list-filter-container'>
                <div className='farmer-body-filter-container'>
                    <DatePicker.RangePicker format={"DD-MM-YYYY"} placeholder={["Order from date", "Order to date"]} />
                    <DatePicker.RangePicker format={"DD-MM-YYYY"} placeholder={["Delivery from date", "Delivery to date"]} />
                    <Select options={location} placeholder={"Location"} style={{ width: "200px" }} />
                </div>
                <SearchBox />
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default CustomerOrderList;
