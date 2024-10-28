import { Input } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const SearchBox = ({ onChange }) => {
    const { t } = useTranslation()

    const handle_change = (value) => {
        onChange(value?.target?.value)
    }
    return (
        <div>
            <Input.Search className='search-box-container' placeholder={t('search')} allowClear={true} onChange={handle_change} />
        </div>
    )
}

export default SearchBox
