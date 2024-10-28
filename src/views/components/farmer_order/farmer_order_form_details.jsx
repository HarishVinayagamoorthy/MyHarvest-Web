import React from 'react';
import { Form, Select, Row, Col, InputNumber, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import FarmerUpdateFormDetail from './farmer_update_form_details';


const FarmerOrderFormDetails = ({ action_type = "add", close, farmer_order }) => {
    const { t } = useTranslation()
    const [form] = Form.useForm()
    // const quantity_value = Form.useWatch("qty", form)
    // const final_quantity_value = Form.useWatch("final_quantity", form)
    let product_list = [
        {
            label: "Apple",
            value: "apple"
        },
        {
            label: "Orange",
            value: "orange"
        }
    ]
    return (
        <>
            <Form layout="vertical" form={form}>
                {action_type.includes("add") ?
                    <Row gutter={10}>
                        <Col span={12} >
                            <Form.Item label={t("category")} name={"category"} rules={[{ required: true, message: 'product_is_required' }]}>
                                <Select options={product_list} />
                            </Form.Item>
                        </Col>
                        <Col span={12} >
                            <Form.Item label={t("product")} name={"product"} rules={[{ required: true, message: 'product_is_required' }]}>
                                <Select options={product_list} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={t("quantity")} name={"qty"} rules={[{ required: true, message: 'product_is_required' }]}>
                                <InputNumber type='number' onWheel={false} controls={false} className='number-input' />
                            </Form.Item>
                        </Col>

                    </Row> : <FarmerUpdateFormDetail farmer_order={farmer_order} />}
            </Form>
            <Row align={"bottom"} justify={"end"} gutter={10}>
                <Col>
                    <Button className='save-button'>
                        {t("save")}
                    </Button>
                </Col>
                <Col>
                    <Button onClick={close} className='close-button'>
                        {t("close")}
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default FarmerOrderFormDetails;
