import { Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerAddress = () => {
    const { t } = useTranslation()
    return (
        <Form.Item name={"address"} label={t("address")}>
            <Input.TextArea />
        </Form.Item>
    )
}

export default FarmerAddress
