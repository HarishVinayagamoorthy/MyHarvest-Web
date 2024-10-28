import { Form, InputNumber } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerMobileNumber = () => {
  const { t } = useTranslation()
  return (
    <Form.Item name={"mobile_number"} label={t("mobile_number")}>
      <InputNumber type='number' onWheel={false} controls={false} className='number-input'/>
    </Form.Item>
  )
}

export default FarmerMobileNumber
