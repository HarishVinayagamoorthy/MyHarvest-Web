import React, { useState } from 'react';
import { Table, Button, Avatar, Col, Row } from 'antd';
import { apple, carrot, PROFILE } from '@helpers/image_constant';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../common/page_title';
import { useTranslation } from 'react-i18next';
import { IoMdAddCircle } from 'react-icons/io';
import FarmerOrderFormDetails from './farmer_order_form_details';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import FarmerOrderDeleteConfirmation from './farmer_order_delete_confirmation';
import FarmerDetails from '../product_demand/farmer_details';
import { formatStatus } from '@helpers/constants';
import moment from 'moment';
import CommonModal from '../common/modal/custom_modal';
const dataSource = [
    {
        key: '1',
        product: 'Apple',
        hsn: '08081000',
        quantity: '5 kgs',
        amount: '₹500',
        icon: apple
    },
    {
        key: '2',
        product: 'Carrot',
        hsn: '8051000',
        quantity: '7 kgs',
        amount: '₹200',
        icon: carrot,
    },
];


const OrderDetails = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [product_modal, set_product_modal] = useState(false);
    const [product_delete_modal, set_product_delete_modal] = useState(false);
    const [farmer_order, set_farmer_order] = useState({});
    const [action_type, set_action_type] = useState("add");

    const handle_back = () => {
        navigate("/admin/farmer-order")
    }
    const handle_order = () => {
        set_product_modal(true)
        set_action_type("add")

    }
    const handleCancel = () => {
        set_product_modal(false);
        set_product_delete_modal(false)
        set_action_type("")
        set_farmer_order({})

    };
    const handle_edit = (record) => {
        set_farmer_order(record)
        set_product_modal(true)
        set_action_type("update")
    }
    const handle_delete = (record) => {
        set_farmer_order(record)
        set_action_type("delete")
        set_product_delete_modal(true)
    }

    const columns = [
        {
            title: 'Product',
            dataIndex: 'product',
            key: 'product',
            render: (text, record) => (
                <div className='product-container'>
                    <img src={record.icon} alt="Product" className='product-image' />
                    {text}
                </div>
            ),
        },
        {
            title: 'HSN',
            dataIndex: 'hsn',
            key: 'hsn',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'amount',
            render: (record) => {
                return (
                    <Row gutter={20}>
                        <Col>
                            <MdModeEdit size={18} onClick={() => handle_edit(record)} className='edit-icon' />
                        </Col>
                        <Col>
                            <MdDelete size={18} onClick={() => handle_delete(record)} className='delete-icon' />
                        </Col>
                    </Row>
                )
            }
        },

    ];

    let farmer =
    {
        name: "Farmer9",
        id: "farmer_9",
        mobile_number: 9858434565,
        email: "Farmer1@gamil.com",
        address: "4/12,Vinayagar street, Chennai- 600042, Tamil Nadu",
    }

    return (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "30px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "10px" }}>
                    <b>
                        Date :
                    </b>
                    {moment(new Date).format("DD/MM/YYYY")}
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "10px" }}>
                    <b>
                        Status :
                    </b>
                    {formatStatus(`completed`)}
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Avatar size={100} src={PROFILE} />
                <div style={{ marginLeft: '20px' }}>
                    <FarmerDetails farmer={farmer} />
                </div>
            </div>
            <PageTitle title={t("product_details")} is_color={true} />
            <div className='farmer-list-header-container'>
                <Button className='add-button' icon={<IoMdAddCircle />} onClick={handle_order}>
                    {t("add_product")}
                </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: "40px", marginBottom: "20px" }} />
            <div className='farmer-order-po-container'>
                <Button onClick={handle_back} danger>
                    Back
                </Button>
                <Button type="primary">
                    Generate PO
                </Button>
            </div>
            <CommonModal
                title={action_type.includes("add") ? t("add_product") : t("update_product")}
                open={product_modal}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={700}
            >
                <FarmerOrderFormDetails action_type={action_type} close={handleCancel} farmer_order={farmer_order} />
            </CommonModal>
            <CommonModal title={t("delete_confirmation")}
                open={product_delete_modal}
                // onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                closeIcon={false}>
                <FarmerOrderDeleteConfirmation action_type={action_type} close={handleCancel} product={farmer_order} />
            </CommonModal>
        </div>
    );
};

export default OrderDetails;
