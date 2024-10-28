import LabelValuePair from '@views/components/common/label_value_pair';
import CommonModal from '@views/components/common/modal/custom_modal';
import { Button, Col, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { TiEdit } from "react-icons/ti";
import FarmerProductFormDetails from './farmer_product_form_details';
const { Title, Text } = Typography;
const FarmerAboutTab = () => {
    const { t } = useTranslation()
    const [farmer_update_modal, set_farmer_update_modal] = useState(false)
    let farmer = {
        mail_id: "farmer1@gmail.com",
        "gst_no": "12124324",
        "logistic_mode": "Delivery",
        "bank_name": "SBI",
        "ifsc_code": "JNFJNJN2313"

    }
    const handle_update = () => {
        set_farmer_update_modal(true)
    }
    const handle_close = () => {
        set_farmer_update_modal(false)
    }

    return (
        <div>
            <Row align={"top"} justify={"end"}>
                <Button icon={<TiEdit color='white' />} className='add-button' onClick={handle_update}>
                    {t("update")}
                </Button>
            </Row>
            {/* <FarmerProductFormDetails /> */}

            <div className='farmer-about-main-container'>
                <LabelValuePair label={t("mail_id")} value={farmer.mail_id} />
                <LabelValuePair label={t("address")} value={farmer.mail_id} />
                <LabelValuePair label={t("gst_no")} value={farmer.gst_no} />
                <LabelValuePair label={t("bank_name")} value={farmer.bank_name} />
                <LabelValuePair label={t("ifsc_code")} value={farmer.ifsc_code} />
            </div>
            <CommonModal title={t("update_farmer_details")} open={farmer_update_modal} onCancel={handle_close} width={800}>
                <FarmerProductFormDetails close={handle_close} />
            </CommonModal>
        </div>
    )
}

export default FarmerAboutTab