import { Form, InputNumber } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerAccountNumber = () => {
    const { t } = useTranslation()
    return (
        <Form.Item name={"account_number"} label={t("account_number")}>
            <InputNumber type='number' onWheel={false} controls={false} className='number-input' />
        </Form.Item>
    )
}

export default FarmerAccountNumber
