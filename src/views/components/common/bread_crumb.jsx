import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = ({ items }) => {
    function itemRender(currentRoute, params, items, paths) {
        const isLast = currentRoute?.path === items[items.length - 1]?.path;
      
        return isLast ? (
          <span>{currentRoute.title}</span>
        ) : (
          <Link to={`/${paths.join("/")}`}>{currentRoute.title}</Link>
        );
      }
      
    return (
        <Breadcrumb
            className='bread-crumb'
            items={items}
            itemRender={itemRender}
        />

    )
}

export default BreadCrumb
