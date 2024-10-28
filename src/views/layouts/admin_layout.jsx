import React, { memo, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { DashboardOutlined } from "@ant-design/icons";
import { ProjectName } from "@src/helpers/constants";
import { Scrollbars } from "react-custom-scrollbars-2";
import HeaderBar from "../components/header/header";
import { FARMER_ORDER_ACTIVE_ICON, FARMER_ORDER_ICON, LOGO, LOGO_WIDTH_TITLE, PRODUCT_DEMAND, PRODUCT_DEMAND_ACTIVE_ICON, SIDEBAR_IMAGE } from "@helpers/image_constant";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

const AdminLayoutTemplate = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const { t } = useTranslation()

  const [collapsed, set_collapsed] = useState(false);
  const [show_title, set_show_title] = useState(false);
  const [title, set_title] = useState("");

  const toggle = () => {
    set_collapsed(!collapsed);
  };

  useEffect(() => {
    let parts = document.title.split("|");
    let place = parts[0].trim();
    set_title(place);
  }, []);

  const handle_scroll = (value) => {
    const scroll = value.scrollTop;
    set_show_title(scroll > 40);
  };

  const handle_navigate = (path) => {
    navigate(`/admin/${path}`);
  };

  return (
    <div>
      <Layout className="layout">
        <Sidebar
          collapsed={collapsed}
          style={{
            width: collapsed ? 80 : 200,
            height: "100vh",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            border: "none"
          }}
          image={SIDEBAR_IMAGE}
        >
          <div className="sidebar_header_image_container">
            <img
              src={collapsed ? LOGO : LOGO_WIDTH_TITLE}
              className="sidebar_header_image"
            />
            {/* {!collapsed && <h1>{ProjectName}</h1>} */}
          </div>
          <Scrollbars id="sidebar" className="sidebar_content">
            <Menu
              rootStyles={{
                ["." + menuClasses.root]: {
                  color: "red",
                },
              }}
              menuItemStyles={{
                button: ({ level, active, disabled }) => {
                  if (level === 0)
                    return {
                      color: "#fff",
                      backgroundColor: active ? "#313c46" : undefined,
                    };
                  if (level === 1)
                    return {
                      color: disabled ? "#f5d9ff" : "#fff",
                      backgroundColor: collapsed ? "#111" : "transparent",
                    };
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  handle_navigate("product-demand");
                }}
                icon={<img src={location.pathname.includes("/admin/product-demand") ? PRODUCT_DEMAND : PRODUCT_DEMAND_ACTIVE_ICON} className="menu_item menu-icon" />}
                active={location.pathname.includes("/admin/product-demand")}
              >
                {t("product_demand")}
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handle_navigate("farmer-order");
                }}
                icon={<img src={location.pathname.includes("/admin/farmer-order") ? FARMER_ORDER_ACTIVE_ICON : FARMER_ORDER_ICON} className="menu_item menu-icon" />}
                active={location.pathname.includes("/admin/farmer-order")}
              >
                {t("farmer_order")}
              </MenuItem>
              {/* <MenuItem
                onClick={() => {
                  handle_navigate("customer-order");
                }}
                icon={<img src={location.pathname.includes("/admin/customer-order") ? FARMER_ORDER_ACTIVE_ICON : FARMER_ORDER_ICON} className="menu_item menu-icon" />}
                active={location.pathname.includes("/admin/customer-order")}
              >
                {t("customer_order")}
              </MenuItem> */}
            </Menu>
          </Scrollbars>
        </Sidebar>
        <div className="header_and_content_container">
          <HeaderBar
            title={title}
            show_title={show_title}
            toggle={toggle}
            set_title={set_title}
            collapsed={collapsed}
          />
          <Scrollbars
            id="scrollableElement"
            onScrollFrame={handle_scroll}
            style={{ overflowX: "hidden" }}
          >
            <Content className="main_content">
              <Outlet />
            </Content>
          </Scrollbars>
        </div>
      </Layout>
    </div>
  );
});

export default AdminLayoutTemplate;
