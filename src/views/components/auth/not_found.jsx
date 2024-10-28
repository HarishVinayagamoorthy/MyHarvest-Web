import React from "react";
import { Link } from "react-router-dom";
import { Result, Button, Typography } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography;

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Result
      status="404"
      title={<Title level={2}>{t("404")}</Title>}
      subTitle={<Text>{t("not_exist")}</Text>}
      icon={<SmileOutlined />}
      extra={
        <Link to="/">
          <Button type="primary">{t("home")}</Button>
        </Link>
      }
    />
  );
};

export default NotFound;
