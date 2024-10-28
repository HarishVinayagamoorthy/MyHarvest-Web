import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerDetails = ({ farmer, name_is_disable = false }) => {
  const { t } = useTranslation()
  const LabelInValue = ({ label, value }) => {
    return (
      <div className='farmer-label-container'>
        <text className='farmer-label-name'>
          {`${label}`}
        </text>
        <text >
          {`:`}
        </text>
        <text className='farmer-value-name'>
          {value}
        </text>
      </div>
    )
  }
  return (
    <div className='farmer-details-modal-container'>
      {!name_is_disable &&
        <LabelInValue label={"Name"} value={farmer?.name} />}
      <LabelInValue label={t("mobile_number")} value={farmer?.mobile_number} />
      <LabelInValue label={t("email")} value={farmer?.email} />
      <LabelInValue label={t("address")} value={farmer?.address} />
    </div>
  )
}

export default FarmerDetails
