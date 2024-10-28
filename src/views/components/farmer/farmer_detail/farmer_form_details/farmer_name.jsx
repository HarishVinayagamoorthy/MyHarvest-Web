import { Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerName = () => {
    const { t } = useTranslation()
    return (
        <Form.Item name={"name"} label={t("name")}>
            <Input />
        </Form.Item>
    )
}

export default FarmerName
