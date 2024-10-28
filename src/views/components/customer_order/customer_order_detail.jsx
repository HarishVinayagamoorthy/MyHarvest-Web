import React from 'react';
import { Card, Row, Col, Typography, Table, Button, Descriptions } from 'antd';
import LabelValuePair from '../common/label_value_pair';
import { useTranslation } from 'react-i18next';
import BreadCrumb from '../common/bread_crumb';
import { useNavigate, useParams } from 'react-router-dom';
import { apple, banana } from '@helpers/image_constant';
import PageTitle from '../common/page_title';

const { Title, Text } = Typography;

const CustomerOrderDetail = () => {
    const { t } = useTranslation()
    const { id } = useParams()
    const navigate = useNavigate()
    const columns = [
        {
            title: 'Product',
            dataIndex: '',
            key: 'product',
            render: (record) => {
                return (
                    <div className='category-container'>
                        <img src={record?.url} className='product-image' />
                        <h5 className="category-name">{record?.name}</h5>
                    </div>
                )
            },
        },
        {
            title: 'Variant / Quantity ',
            dataIndex: 'variant',
            key: 'variant',
            render: text => <Text>{text}</Text>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: "right",
            render: text => <Text>{text}</Text>,
        },
    ];

    const data = [
        {
            key: '1',
            name: 'Banana',
            variant: '2 kg',
            price: '₹680',
            url: banana
        },
        {
            key: '2',
            name: 'Apple',
            variant: '2 kg',
            price: '₹400',
            url: apple

        },
    ];
    const orderData = {
        orderId: 'MYH204',
        orderedOn: '10/04/2024',
        deliveryDate: '10/04/2024',
        totalAmount: '₹1080',
        customerName: 'Alosius Sujin',
        address: 'Plot 2, 76A, 8th Main Rd, Kanikapuram, Ram Nagar, Velachery, Chennai, Tamil Nadu - 600042.',
        mobileNumber: '8124456991',
        status: 'Placed',
        products: [
            { key: '1', product: 'Banana', variant: '2 kg', price: '₹680', url: banana },
            { key: '2', product: 'Apple', variant: '2 kg', price: '₹400', url: apple },
        ],
    };

    let items = [
        {
            title: t("customer_order"),
            path: "/admin/customer-order"
        },
        {
            title: id,
        },
    ]
    const handle_back = () => {
        navigate("/admin/customer-order")
    }
    return (
        <div style={{ padding: '24px' }}>
            <BreadCrumb items={items} />
            <Row gutter={16} className='customer-order-detail-container'>
                <Col span={14}>
                    <Card bordered={false} className="order-card">

                        <Descriptions column={3}>
                            <Descriptions.Item label="Order ID">{orderData.orderId}</Descriptions.Item>
                            <Descriptions.Item label="Ordered on">{orderData.deliveryDate}</Descriptions.Item>
                            <Descriptions.Item label="Delivery on">{orderData.deliveryDate}</Descriptions.Item>
                        </Descriptions>
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            summary={() => (
                                <Table.Summary.Row>
                                    <Table.Summary.Cell >
                                    </Table.Summary.Cell>
                                    <Table.Summary.Cell align='right' colSpan={2} >
                                        <Text strong>Total Amount:</Text>
                                        <Text strong>₹1080</Text>
                                    </Table.Summary.Cell>
                                </Table.Summary.Row>
                            )}
                        />
                    </Card>
                </Col>
                <Col span={10}>
                    <Card bordered={false}>
                        <LabelValuePair label="Name" value={orderData.customerName} />
                        <LabelValuePair label="Delivery Address" value={orderData.address} />
                        <LabelValuePair label="Mobile Number" value={orderData.mobileNumber} />
                        <LabelValuePair label="Status" value={orderData.status} />
                    </Card>
                </Col>
            </Row>
            <Row justify={"end"}>
                <Button danger onClick={handle_back}>
                    {t("back")}
                </Button>
            </Row>
        </div>
    );
};

export default CustomerOrderDetail;
