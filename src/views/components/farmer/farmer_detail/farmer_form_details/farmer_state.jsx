import { useAPIRequest } from '@helpers/hooks'
import { query_get_districts, query_get_states } from '@services/graphql'
import { useDynamicSelector } from '@services/redux'
import { Form, Select } from 'antd'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const FarmerState = () => {
    const { t } = useTranslation()
    const { items: state_list } = useDynamicSelector("get_state_list")
    let get_states_list = useAPIRequest("get_state_list", query_get_states)

    useEffect(() => {
        debugger
        get_states_list({}, true)
    }, [])

    console.log("state_list", state_list);
    return (
        <Form.Item name={"state_id"} label={t("state")}>
            <Select options={state_list}  />
        </Form.Item>
    )
}

export default FarmerState
