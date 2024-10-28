import React from "react";
import { Button } from "antd";

const AddButton = (props) => {
  const { handle_add, button_text } = props;

  return (
    <Button type="default" onClick={handle_add}>
      {button_text}
    </Button>
  );
};
export default AddButton;
