import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Text } = Typography;

const LabelValuePair = ({ label, value }) => (
    <Row style={{ marginBottom: '8px' }}>
        <Col span={11}>
            <Text strong>{label}</Text>
        </Col>
        <Col span={1} >
            :
        </Col>
        <Col span={12}>
            <Text>{value}</Text>
        </Col>
    </Row>
);

export default LabelValuePair;
