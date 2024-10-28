import React, { useState } from 'react';
import { Card, Col, Row, Avatar, Typography, Tabs, Button, Modal, Form, Input, Select, Rate } from 'antd';
import { MailOutlined, PhoneOutlined, EditOutlined, EnvironmentOutlined, PlusOutlined } from '@ant-design/icons';
import FarmerAboutTab from './farmer_detail/farmer_about_tab';
import FarmerProductTab from './farmer_detail/farmer_product_tab';
import FarmerRatingTab from './farmer_detail/farmer_rating_tab';
import { PROFILE } from '@helpers/image_constant';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const FarmerDetails = () => {
    const { t } = useTranslation()
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const items = [
        {
            key: 'farmer_about',
            label: t('farmer_about'),
            children: <FarmerAboutTab />,
        },
        {
            key: 'farmer_products',
            label: t('farmer_products'),
            children: <FarmerProductTab />
        },
        {
            key: 'product_rating',
            label: t('Ratings'),
            children: <FarmerRatingTab />
        },
    ];
    return (
        <div style={{ padding: '20px' }}>
            <Card>
                <Row gutter={16}>
                    <Col span={3}>
                        <Avatar size={100} src={PROFILE} />
                    </Col>
                    <Col span={21}>
                        <Title level={4}>Elumalai</Title>
                        <Text><PhoneOutlined /> 9876567878</Text><br />
                        <Text><EnvironmentOutlined /> Thiruvallur</Text>
                    </Col>
                </Row>
            </Card>
            <Tabs defaultActiveKey="farmer_about" style={{ marginTop: '20px' }} items={items} />
        </div>
    );
};

export default FarmerDetails;
