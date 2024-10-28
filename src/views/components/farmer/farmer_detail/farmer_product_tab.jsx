import { useAPIRequest } from '@helpers/hooks';
import { apple, garlic, onion, snake_beans, veg, watermelon } from '@helpers/image_constant';
import LabelValuePair from '@views/components/common/label_value_pair';
import CommonModal from '@views/components/common/modal/custom_modal';
import { Button, Col, Collapse, Row } from 'antd';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { IoMdAddCircle } from 'react-icons/io';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import FarmerProductFormDetails from './farmer_product_form_details';

const FarmerProductTab = () => {
    const { t } = useTranslation()
    const [product_modal, set_product_modal] = useState(false)
    const [product_delete_modal, set_product_delete_modal] = useState(false)
    const [action_type, set_action_type] = useState(null)
    const [product_details, set_product_details] = useState({})

    let query_get_categories = useAPIRequest(
        "get_categories",
        null
    );
    const productCategories = [
        {
            id: "vegetables",
            name: 'Vegetables',
            url: veg,
            products: [
                { id: 1, name: 'Big Onion', price: '₹48 per kg', delivery: '2 Days', image: onion },
                { id: 4, name: 'Garlic', price: '₹80 per kg', delivery: '2 Days', image: garlic },
                { id: 5, name: 'Watermelon', price: '₹30 per kg', delivery: '2 Days', image: watermelon },
            ],
        },
        {
            id: "vegetables",
            name: 'Vegetables',
            url: veg,
            products: [
                { id: 1, name: 'Big Onion', price: '₹48 per kg', delivery: '2 Days', image: onion },
                { id: 2, name: 'Tomato', price: '₹200 per kg', delivery: '2 Days', image: '/path/to/tomato.png' },
                { id: 3, name: 'Beans', price: '₹30 per kg', delivery: '2 Days', image: '/path/to/beans.png' },
                { id: 4, name: 'Garlic', price: '₹80 per kg', delivery: '2 Days', image: garlic },
                { id: 5, name: 'Watermelon', price: '₹30 per kg', delivery: '2 Days', image: watermelon },
            ],
        },
    ];

    const ProductCard = ({ product }) => (
        <div className="farmer-product-card">
            <Row align="bottom" justify="end" gutter={10} className="icon-row">
                <Col className="icon-col">
                    <MdModeEdit size={18} onClick={() => handle_edit(product)} className='edit-icon' />
                </Col>
                <Col className="icon-col">
                    <MdDelete size={18} onClick={() => handle_delete(product)} className='delete-icon' />
                </Col>
            </Row>
            <img src={product.image} alt={product.name} className="farmer-product-image" />
            <div className="farmer-product-details">
                <h3 className="farmer-product-name">{product.name}</h3>
                <LabelValuePair label={t("price")} value={product.price} />
                <LabelValuePair label={t("deliver_in")} value={product.delivery} />
            </div>
        </div>
    );

    const ProductCategory = ({ category }) => (
        <div className="farmer-product-category">
            <div className="farmer-product-list">
                {category.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );

    const CategoryHeader = ({ category }) => {
        return (
            <div className='farmer-category-container'>
                <img src={category?.url} className='farmer-category-icon' />
                <h2 className="farmer-category-name">{category.name}</h2>
            </div>
        )
    }


    const handle_edit = (record) => {
        set_product_details(record)
        set_product_modal(true)
        set_action_type("update")
    }

    const handle_delete = (record) => {
        set_product_details(record)
        set_product_delete_modal(true)
        set_action_type("delete")
    }

    const handle_add = () => {
        set_product_details({})
        set_product_modal(true)
        set_action_type("add")
    }

    const handle_close = () => {
        set_product_modal(false)
        set_product_delete_modal(false)
        set_action_type(null)
    }

    return (
        <div>
            <Row justify={"end"} style={{ marginBottom: "30px" }}>
                <Button className='add-button' icon={<IoMdAddCircle />} onClick={handle_add}>
                    {t("add_product")}
                </Button>
            </Row>
            <Collapse>
                {productCategories.map(category => (
                    <Collapse.Panel header={<CategoryHeader category={category} />}>
                        <ProductCategory key={category.category} category={category} />
                    </Collapse.Panel>
                ))}
            </Collapse>
            <CommonModal title={t("add_product")} open={product_modal} onCancel={handle_close}>
                {/* <FarmerProductFormDetails /> */}
            </CommonModal>
        </div>
    )
}

export default FarmerProductTab
