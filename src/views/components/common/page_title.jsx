import React from "react";
const PageTitle = ({ title, is_color }) => {
  return (
    <h2
      style={{
        color: is_color ? "var(--layout-header)" : "#fff",
      }}
    >
      {title}
    </h2>
  );
};
export default PageTitle;
