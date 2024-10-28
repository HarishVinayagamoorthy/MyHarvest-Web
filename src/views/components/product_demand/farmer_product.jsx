import { PENDING } from '@helpers/image_constant'
import React from 'react'
import ProductCheckBox from './product_check_box'
import FarmerDetailsLabel from './farmer_detail_label'
import { useTranslation } from 'react-i18next'
import { measurement_type } from '@helpers/constants'

const FarmerProduct = (props) => {
    const { t } = useTranslation()
    const { product_estimate_totals, product_totals, record, handle_change_product_check_box, selected_product_id } = props
    let estimated_demand = Number(product_estimate_totals?.[record?.id] || 0)
    let placed_qty = Number(product_totals?.[record?.id] || 0)
    let remaining_qty = estimated_demand - placed_qty
    return (
        <>
            <div className='product-container'>
                <div className='pending-status-container'>
                    {estimated_demand > placed_qty &&
                        <img src={PENDING} className='pending-icon' />
                    }
                </div>
                <ProductCheckBox product={record} onCheckChange={handle_change_product_check_box} isChecked={selected_product_id === record.id} />
                <img src={record?.url} className='product-image' />
                <h5 className="product-name">{`${record?.name} ( ${measurement_type[record?.measurement_type]} )`}</h5>
            </div>

            <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <FarmerDetailsLabel label={t("estimated_demand")} value={estimated_demand} />
                <FarmerDetailsLabel label={t("placed_qty")} value={placed_qty} />
                <FarmerDetailsLabel label={t("remaining_qty")} value={remaining_qty || 0} />
            </div>
        </>
    )
}

export default FarmerProduct
