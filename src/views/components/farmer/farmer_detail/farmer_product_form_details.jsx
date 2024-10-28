import { Button, Col, Form, Row, Select } from 'antd'
import React from 'react'
import FarmerName from "./farmer_form_details/farmer_name"
import FarmerMobileNumber from "./farmer_form_details/farmer_mobile_number"
import FarmerMail from './farmer_form_details/farmer_mail_id'
import FarmerAddress from './farmer_form_details/farmer_address'
import FarmerDistrict from './farmer_form_details/farmer_district'
import FarmerState from './farmer_form_details/farmer_state'
import FarmerLogisticsMode from './farmer_form_details/farmer_logistics_mode'
import FarmerIDProof from './farmer_form_details/farmer_id_proof'
import FarmerAccountNumber from './farmer_form_details/farmer_account_number'
import FarmerBankIFSCCode from './farmer_form_details/farmer_banK_ifsc'
import FarmerProfile from './farmer_form_details/farmer_profile'
import { useTranslation } from 'react-i18next'
import FarmerBankName from './farmer_form_details/farmer_bank_name'

const FarmerProductFormDetails = ({ close }) => {
    const { t } = useTranslation()


    return (
        <Form layout='vertical'>
            <Row gutter={10} align={"top"}>
                <Col span={12}>
                    <FarmerProfile />
                </Col>
                <Col span={12}>
                    <FarmerName />
                </Col>
                <Col span={12}>
                    <FarmerMobileNumber />
                </Col>

                <Col span={12}>
                    <FarmerMail />
                </Col>
                <Col span={12}>
                    <FarmerState />
                </Col>
                <Col span={12}>
                    <FarmerDistrict />
                </Col>
                <Col span={24}>
                    <FarmerAddress />
                </Col>
                <Col span={12}>
                    <FarmerLogisticsMode />
                </Col>
                <Col span={12}>
                    <FarmerBankName />
                </Col>
                <Col span={12}>
                    <FarmerAccountNumber />
                </Col>
                <Col span={12}>
                    <FarmerBankIFSCCode />
                </Col>
                <Col span={12}>
                    <FarmerIDProof />
                </Col>
            </Row>
            <Row align={"top"} justify={"end"} gutter={10}>
                <Col span={3}>
                    <Button className='add-button' htmlType='submit'>
                        {t("update")}
                    </Button>
                </Col>
                <Col span={3}>
                    <Button className='close-button' onClick={close}>
                        {t("close")}
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FarmerProductFormDetails
