import { Checkbox, Switch } from 'antd'
import React from 'react'

const ProductCheckBox = ({ product, isChecked, onCheckChange }) => {

    const handleCheckboxChange = (e) => {
        onCheckChange(product.id, e);
    };

    return (
        <div>
            <Switch checked={isChecked} onChange={handleCheckboxChange} id={`checkbox-${product.id}`} style={{ width: "30px" }} size='small' className='product-switch' />
        </div>
    )
}

export default ProductCheckBox
