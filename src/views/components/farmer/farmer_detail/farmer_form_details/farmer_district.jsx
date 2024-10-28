import { useAPIRequest } from '@helpers/hooks'
import { useDynamicSelector } from '@services/redux'
import { Form, Select } from 'antd'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const FarmerDistrict = ({ form }) => {
    const { t } = useTranslation()
    const { items: district_list } = useDynamicSelector("get_districts")
    const state_id = Form.useWatch("state_id", form)
    let get_districts = useAPIRequest("", null)
    useEffect(() => {
        if (state_id) {
            get_districts({
                id: state_id
            })
        }

    }, [state_id])
    return (
        <Form.Item name={"district_id"} label={t("district")}>
            <Select options={district_list} />
        </Form.Item>
    )
}

export default FarmerDistrict
