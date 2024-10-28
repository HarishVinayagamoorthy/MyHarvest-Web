import React from "react";
import { Link } from "react-router-dom";
import { Result, Button, Typography } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const NotAllowed = () => {
  const { t } = useTranslation();

  return (
    <Result
      status="403"
      title={<Title level={2}>{t("403")}</Title>}
      subTitle={<Text>{t("not_allowed")}</Text>}
      icon={<FrownOutlined />}
      extra={
        <Link to="/">
          <Button type="primary">{t("home")}</Button>
        </Link>
      }
    />
  );
};

export default NotAllowed;
