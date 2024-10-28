import { Tag } from "antd";
import { startCase } from "lodash";
import moment from "moment";

export const ProjectName = "myHarvest";

export const formatStatus = (value) => {
  switch (value) {
    case "active":
      return <Tag className="status-tag status-active">Active</Tag>;
    case "Completed":
    case "completed":
      return <Tag className="status-tag status-active">Completed</Tag>;
    case "Approved":
      return <Tag className="status-tag status-active"> Approved</Tag>;
    case "Failure":
      return <Tag className="status-tag status-closed">Failure</Tag>;
    case "Rejected":
      return <Tag className="status-tag status-closed">Rejected</Tag>;
    case "closed":
      return <Tag className="status-tag status-closed">Closed</Tag>;
    case "Pending":
    case "on_queue":
      return <Tag className="status-tag status-pending">Pending</Tag>;
    case "Reverted":
    case "failed":
      return <Tag className="status-tag status-revert">{startCase(value)}</Tag>;
    case "duplicate":
      return <Tag className="status-tag status-revert">Duplicate</Tag>;
    case "processed_with_error":
      return <Tag className="status-tag status-revert">{startCase(value)}</Tag>;
    case "processing":
      return (
        <Tag className="status-tag status-pending">{startCase(value)}</Tag>
      );
    case "skip":
      return <Tag className="status-tag status-pending">Skip</Tag>;
    default:
      return value ? startCase(value) : "-";
  }
};

export const disable_date = (current) => {
  return current && current < moment().startOf("day");
};

export const measurement_type = {
  piece: "pc",
  bunch: "bn",
  gram: "g",
  kilogram: "kg",
  litre: "L",
  millilitre: "mL",
};
