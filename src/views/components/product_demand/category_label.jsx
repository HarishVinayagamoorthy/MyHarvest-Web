import { PENDING } from '@helpers/image_constant'
import React from 'react'

const CategoryLabel = ({ record, product_totals, category, estimated_demand = 0, remaining_qty = 0 }) => {
    let get_category_wise_total = getCategoryWiseProducts(category)

    function getCategoryWiseProducts(data) {
        const categoryWiseProducts = {};

        data?.forEach(category => {
            const categoryProducts = category?.children || [];
            const productTotal = categoryProducts?.reduce((acc, product) => acc + Number(product?.target || 0), 0);
            const allottedValue = categoryProducts?.reduce((acc, product) => acc + (Number(product_totals?.[product?.id]) || 0), 0);

            categoryWiseProducts[category.id] = {
                product_total: productTotal,
                alloted_value: allottedValue
            };
        });

        return categoryWiseProducts;
    }



    return (
        <div className='category-container'>
            <div className='pending-status-container'>
                {/* {get_category_wise_total[record.id].product_total > get_category_wise_total[record?.id]?.alloted_value &&
                    <img src={PENDING} className='pending-icon' />
                } */}
            </div>
            <img src={record?.url} className='product-image' />
            <h5 className="category-name">{record?.name}</h5>
        </div>
    )
}

export default CategoryLabel
