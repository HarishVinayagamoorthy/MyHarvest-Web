import { InputNumber } from 'antd';
import moment from 'moment';
import React from 'react'
import { LuHistory } from 'react-icons/lu';
import { MdOutlineDateRange } from 'react-icons/md';
import { handle_change } from './product_demand';

const ProductInputBox = (props) => {
    const { product_previous_demand, selected_farmer, previous_product_demand, set_product_previous_demand, farmer, record } = props

    const isProductApplicableToFarmer = (farmer_id, product_id) => {
        const farmer = selected_farmer?.find(f => f?.id === farmer_id);
        if (!farmer) {
            return false;
        }
        return farmer?.products?.some(product => product?.id === product_id);
    }
    let find_one_farmer = product_previous_demand?.find(pre_dem => pre_dem?.farmer_id?.includes(farmer?.id))
    let get_product = find_one_farmer?.products?.find(fp => fp?.farmer_product?.product_id?.includes(record?.id));

    let previous_find_one_farmer = previous_product_demand?.find(pre_dem => pre_dem?.farmer_id?.includes(farmer?.id))
    let previous_get_product = previous_find_one_farmer?.products?.find(fp => fp?.farmer_product?.product_id?.includes(record?.id));
    let is_product_applicable = isProductApplicableToFarmer(farmer?.id, record?.id)


    return (
        <div div style={{ display: "flex", flexDirection: 'column', gap: "10px", justifyContent: "space-between", width: "100%", height: "100px" }}>
            <div style={{ height: "20px", width: "100%", textAlign: "end" }}>
                {previous_get_product?.quantity &&
                    <>
                        <div className='label-container' style={{ minWidth: "auto", width: "auto" }}>
                            <text className='label-name'>
                                {/* {`${t("date")} :`} */}
                                <MdOutlineDateRange size={15} />
                            </text>
                            <text className='value-date-name'>
                                {moment(new Date(find_one_farmer?.ordered_datetime)).format("DD/MM/YYYY")}
                            </text>
                        </div>
                        <div className='label-container' style={{ minWidth: "auto", width: "auto" }}>
                            <text className='label-name'>
                                {/* {`${t("previous_orderd")} :`} */}
                                <LuHistory size={15} />
                            </text>
                            <text className='value-date-name'>
                                {previous_get_product?.quantity}
                            </text>
                        </div>
                    </>
                }
            </div>
            <InputNumber
                value={get_product?.quantity}
                onChange={value => handle_change(farmer?.id, record?.id, value, set_product_previous_demand)}
                disabled={!is_product_applicable}
                style={{ width: "140px" }}
                key={farmer?.id}
                type="number"
                controls={false}
                changeOnWheel={false}
            // step={record?.measurement_type !== "Kilogram" ? "0.01" : undefined}
            />

        </div>
    )
}

export default ProductInputBox
