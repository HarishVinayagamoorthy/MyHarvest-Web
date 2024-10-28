import { Col, Form, Input, InputNumber, Row } from 'antd';
import React from 'react'
import { useTranslation } from 'react-i18next';
import LabelValuePair from '../common/label_value_pair';

const FarmerUpdateFormDetail = ({ farmer_order }) => {
    const { t } = useTranslation()
    return (
        <div>
            <LabelValuePair label={t("name")} value={farmer_order?.product} />
            <LabelValuePair label={t("amount")} value={farmer_order?.amount} />
            <LabelValuePair label={t("quantity")} value={farmer_order?.quantity} />
            <LabelValuePair label={t("hsn_no")} value={farmer_order?.hsn} />

            <Row gutter={10} style={{ marginTop: "20px" }}>
                <Col span={12}>
                    <Form.Item label={t("receivable_quantity")} name={"receivable_quantity"}
                        rules={[
                            { required: true, message: 'product_is_required' },
                            // {
                            //     validator: (_, value) => {
                            //         if (value !== undefined && quantity_value !== undefined && value > quantity_value) {
                            //             return Promise.reject(t("final_quantity_exceeds_ordered_quantity"));
                            //         }
                            //         return Promise.resolve();
                            //     },
                            // },
                        ]}>
                        <InputNumber type='number' onWheel={false} controls={false} className='number-input' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("wastage_quantity")} name={"wastage_quantity"} rules={[{ required: true, message: 'product_is_required' }]}>
                        <InputNumber type='number' onWheel={false} controls={false} className='number-input' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label={t("billable_amount")} name={"billable_amount"} rules={[{ required: true, message: 'product_is_required' }]}>
                        <InputNumber type='number' onWheel={false} controls={false} className='number-input' />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label={t("remarks")} name={"remarks"} rules={[{ required: false, message: 'product_is_required' }]}>
                        <Input.TextArea />
                    </Form.Item>
                </Col>
            </Row>
        </div>
    )
}

export default FarmerUpdateFormDetail
