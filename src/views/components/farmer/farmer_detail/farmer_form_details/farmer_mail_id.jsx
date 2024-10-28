import { Form, Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerMail = () => {
    const { t } = useTranslation()
    return (
        <Form.Item name={"mail"} label={t("mail_id")}>
            <Input />
        </Form.Item>
    )
}

export default FarmerMail
