import { Form, Select } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerLogisticsMode = () => {
    const { t } = useTranslation()
    const logistic_mode = [
        {
            id: "courier",
            name: "Courier"
        },
        {
            id: "public_transport",
            name: "Public Transport"
        }
    ]
    return (
        <Form.Item name={"logistic_mode"} label={t("logistic_mode")}>
            <Select options={logistic_mode} />
        </Form.Item>
    )
}

export default FarmerLogisticsMode
