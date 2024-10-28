// import React from 'react'
// import { MdInstallMobile } from 'react-icons/md'



// const fruits_icons = [
//     {
//         image:"fruits icon 1",
//         category_name:"Fruits"
//     },
//     {
//         image:"fruits icon 1",
//         category_name:"Vegetables"
//     },
//     {
//         image:"fruits icon 1",
//         category_name:"Rice"
//     },
//     {
//         image:"fruits icon 1",
//         category_name:"Oil"
//     },,
//     {
//         image:"fruits icon 1",
//         category_name:"Ghee"
//     }
//     ,
//     {
//         image:"fruits icon 1",
//         category_name:"Masala & Species"
//     },
//     {
//         image:"Sweet",
//         category_name:"Oil"
//     },
//     {
//         image:"Nuts",
//         category_name:"Oil"
//     }
// ]
    

// function ProductCategoryList() {
//   return (
//     <div className='product_category_container'>

// <h4 className='product_category_heading'>Shop by</h4>

// <div className="product_category_box_container">
// {
//     fruits_icons.map((item)=>{

// return<div className="product_category_box" key={item.id}>
//     <img src={item.image} alt='icon'/>
//     <p className='product_category_title' >{item.category_name}</p>
// </div>
//     })

// }


// </div>
//     </div>
//   )
// }

// export default ProductCategoryList











// src/components/Sidebar.js
// import React from 'react';
// import { Menu } from 'antd';
// import {
//   AppleOutlined,
//   AppstoreOutlined,
//   CoffeeOutlined,
//   DatabaseOutlined,
//   GoldOutlined,
//   HeartOutlined,
//   FireOutlined,
//   TrophyOutlined,
// } from '@ant-design/icons';

// const { SubMenu } = Menu;

// const categories = [
//   { name: 'Fruits', icon: <AppleOutlined /> },
//   { name: 'Vegetables', icon: <AppstoreOutlined /> },
//   { name: 'Rice', icon: <CoffeeOutlined /> },
//   { name: 'Oil', icon: <DatabaseOutlined /> },
//   { name: 'Ghee', icon: <GoldOutlined /> },
//   { name: 'Masala & Spices', icon: <FireOutlined /> },
//   { name: 'Sweet', icon: <HeartOutlined /> },
//   { name: 'Nuts', icon: <TrophyOutlined /> },
// ];

// const Sidebar = () => {
//   return (
//     <Menu
//       style={{ width: 256 }}
//       defaultSelectedKeys={['1']}
//       mode="inline"
//     >
//       {categories.map((category, index) => (
//         <Menu.Item key={index} icon={category.icon}>
//           {category.name}
//         </Menu.Item>
//       ))}
//     </Menu>
//   );
// };

// export default Sidebar;





import React from 'react';
import { List, Typography } from 'antd';
import {
  AppleOutlined,
  AppstoreOutlined,
  CoffeeOutlined,
  DatabaseOutlined,
  GoldOutlined,
  HeartOutlined,
  FireOutlined,
  TrophyOutlined,
} from '@ant-design/icons';

const { Text } = Typography;

const categories = [
  { name: 'Fruits', icon: <AppleOutlined /> },
  { name: 'Vegetables', icon: <AppstoreOutlined /> },
  { name: 'Rice', icon: <CoffeeOutlined /> },
  { name: 'Oil', icon: <DatabaseOutlined /> },
  { name: 'Ghee', icon: <GoldOutlined /> },
  { name: 'Masala & Spices', icon: <FireOutlined /> },
  { name: 'Sweet', icon: <HeartOutlined /> },
  { name: 'Nuts', icon: <TrophyOutlined /> },
];

const Sidebar = () => {
  return (
    <List
      style={{ width: 256 }}
      bordered
      dataSource={categories}
      renderItem={item => (
        <List.Item>
          {item.icon} <Text style={{ marginLeft: 8 }}>{item.name}</Text>
        </List.Item>
      )}
    />
  );
};

export default Sidebar;

