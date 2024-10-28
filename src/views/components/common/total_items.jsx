import { Typography } from "antd";
import React from "react";

const TotalItems = ({ total_count }) => {
  return (
    <Typography className="total_items">{`Total items ( ${
      total_count || 0
    } )`}</Typography>
  );
};
export default TotalItems;
