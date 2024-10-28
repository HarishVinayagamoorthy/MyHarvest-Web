import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Dropdown, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { PROFILE } from "@helpers/image_constant";

const { Header } = Layout;

const HeaderBar = memo((props) => {
  const { title, show_title, set_title, toggle, collapsed } = props;
  const { t } = useTranslation()
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const role = {
    name: "Officer"
  }

  useEffect(() => {
    let parts = document.title.split("|");
    let place = parts[0].trim();
    set_title(place);
  }, []);

  const items = [
    {
      label: t("change_password"),
      key: '1',
    },
    {
      label: t("logout"),
      key: '2',
    },
  ];

  const handleMenuClick = (e) => {
    if (e.key === '2') {
      navigate("/")
    }
  };
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  return (
    <Header className="header">
      <div style={{ paddingLeft: 16, display: "flex" }}>
        {collapsed ? (
          <MenuUnfoldOutlined onClick={toggle} className="menu-expand-icon" />
        ) : (
          <MenuFoldOutlined onClick={toggle} className="menu-expand-icon" />
        )}
        {show_title && (
          <div
            style={{
              animation: show_title ? "slideIn 0.4s ease-in-out" : "none",
            }}
          >
            <span className="animated_title">{title}</span>
          </div>
        )}
      </div>

      <Dropdown
        menu={{
          items,
          onClick: handleMenuClick,
        }}
        onOpenChange={handleOpenChange}
        open={open}

      >
        <div className="header-user-container">
          <text className="header-user-title">
            {`${role?.name}`}
          </text>
          <img src={PROFILE} alt="logo" className="profile_logo" />
        </div>
      </Dropdown>
    </Header>
  );
});

export default HeaderBar;
