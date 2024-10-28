import PageTitle from '@views/components/common/page_title'
import CustomerOrderList from '@views/components/customer_order/customer_order_list'
import React from 'react'
import { useTranslation } from 'react-i18next'

const CustomerOrder = () => {
    const { t } = useTranslation()
    return (
        <div>
            <PageTitle title={t("customer_order")} is_color={true} />
            <CustomerOrderList />
        </div>
    )
}

export default CustomerOrder
