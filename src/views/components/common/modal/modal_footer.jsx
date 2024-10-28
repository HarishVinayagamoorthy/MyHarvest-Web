import React from "react";
import { Button, Form, Space } from "antd";
import { useTranslation } from "react-i18next";

const ModalFooter = (props) => {
  const { handle_cancel, loading } = props;
  const { t } = useTranslation();

  return (
    <div className="modal_footer">
      <Space>
        <Form.Item>
          <Button type="default" onClick={handle_cancel}>
            {t("cancel")}
          </Button>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary" loading={loading}>
            {t("submit")}
          </Button>
        </Form.Item>
      </Space>
    </div>
  );
};
export default ModalFooter;
