import React from 'react'
import OrderDetails from "@views/components/farmer_order/farmer_order_details"
import PageTitle from '@views/components/common/page_title'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'
import BreadCrumb from '@views/components/common/bread_crumb'

const FarmerOrderDetails = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  let items = [
    {
      title: t("farmer_order"),
      path: "/admin/farmer-order"
    },
    {
      title: id,
    },
  ]
  return (
    <div>
      <div className='farmer-details-top-container'>
        <BreadCrumb items={items} />
      </div>
      <OrderDetails />
    </div>
  )
}

export default FarmerOrderDetails
