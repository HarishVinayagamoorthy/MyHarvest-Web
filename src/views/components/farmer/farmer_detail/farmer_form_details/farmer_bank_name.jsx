import { Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerBankName = () => {
    const { t } = useTranslation()
    return (
        <Form.Item name={"bank"} label={t("bank_name")}>
            <Input />
        </Form.Item>
    )
}

export default FarmerBankName
