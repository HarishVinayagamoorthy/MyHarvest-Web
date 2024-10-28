import AdminLayout from "@src/views/layouts/admin_layout";
import CustomerOrderDetail from "@views/components/customer_order/customer_order_detail";
import FarmerDetails from "@views/components/farmer/farmer_detail";
import FarmerList from "@views/components/farmer/farmer_list";
import ProductList from "@views/pages/customer/product_list/product_list";
import CustomerOrder from "@views/pages/customer_order";
import FarmerOrderDetails from "@views/pages/farmer_order/farmer_order_details";
import FarmerOrder from "@views/pages/farmer_order/farmer_order_list";
import Login from "@views/pages/login";
import ProductDemand from "@views/pages/product_demand";
const my_routes = [
  {
    path: "/",
    name: "Login",
    component: <Login />,
    authenticate: false,
  },
  {
    path: "/admin",
    name: "Admin Layout",
    component: <AdminLayout />,
    children: [
      {
        path: "product-demand",
        name: "Product Demand",
        component: <ProductDemand />,
        authenticate: false,
      },
      {
        path: "farmer-order",
        name: "Farmer Order",
        component: <FarmerOrder />,
        authenticate: false,
      },
      {
        path: "farmer-order/:id?",
        name: "Farmer Order",
        component: <FarmerOrderDetails />,
        authenticate: false,
      },
      {
        path: "customer-order",
        name: "Customer Order",
        component: <CustomerOrder />,
        authenticate: false,
      },
      {
        path: "customer-order/:id?",
        name: "Customer Order",
        component: <CustomerOrderDetail />,
        authenticate: false,
      },
      {
        path: "farmer",
        name: "Farmer",
        component: <FarmerList />,
        authenticate: false,
      },
      {
        path: "farmer/:id?",
        name: "Farmer Details",
        component: <FarmerDetails />,
        authenticate: false,
      },


      



    ],
  },
  {
    path: "/",
    name: "Customer Layout",
    component: <></>,
    children: [
      
    ],


  },


  {
    path: "product-list",
    name: "Product-List",
    component: <ProductList />,
    authenticate: false,
  },
 


];

export default my_routes;
