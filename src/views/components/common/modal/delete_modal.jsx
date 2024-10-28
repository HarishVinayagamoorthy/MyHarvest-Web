import React from "react";
import { Modal } from "antd";
import { useTranslation } from "react-i18next";

const DeleteConfirmationModal = (props) => {
  const {
    is_delete_modal_visible,
    handle_delete,
    hide_delete_modal,
    item,
    loading,
  } = props;

  const { t } = useTranslation();
  return (
    <div>
      <Modal
        title={t("confirm_delete")}
        open={is_delete_modal_visible}
        onOk={() => {
          handle_delete(item?.id);
        }}
        onCancel={hide_delete_modal}
        okText={t("yes")}
        cancelText={t("no")}
        confirmLoading={loading}
      >
        <p>{`Are you sure you want to delete this ${item?.name}?`}</p>
      </Modal>
    </div>
  );
};

export default DeleteConfirmationModal;
