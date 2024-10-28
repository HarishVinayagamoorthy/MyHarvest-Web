import { Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerBankIFSCCode = () => {
    const { t } = useTranslation()
    return (
        <Form.Item name={"ifsc"} label={t("ifsc_code")}>
            <Input />
        </Form.Item>
    )
}

export default FarmerBankIFSCCode
