import { Button, DatePicker, Table } from "antd";
import React, { useEffect, useState } from "react";
import PageTitle from "../common/page_title";
import { useTranslation } from "react-i18next";
import FarmerHeader from "./farmer_header";
import moment from "moment";
import dayjs from "dayjs";
import CategoryLabel from "./category_label";
import { disable_date } from "@helpers/constants";
import { useAPIRequest } from "@helpers/hooks";
import {
    mutation_create_product_demand,
    query_get_categories,
    query_get_previous_product_demand,
    query_get_product_demand_farmer,
} from "@services/graphql";
import { useDynamicSelector } from "@services/redux";
import {
    calculate_product_totals,
    filter_categories_by_farmer,
    get_farmers_by_product_Id,
    row_class_name,
} from "./product_demand";
import ProductInputBox from "./product_input_box";
import FarmerProduct from "./farmer_product";

const ProductDemandDetails = () => {
    const { t } = useTranslation();
    const [selected_farmer, set_selected_farmer] = useState([]);
    const [product_totals, set_product_totals] = useState({});
    const [product_estimate_totals, set_product_estimate_totals] = useState({});
    const [selected_farmer_Id, set_selected_farmer_id] = useState(null);
    const [selected_product_id, set_selected_product_id] = useState(null);
    const [category, set_category] = useState([]);
    const [demand_date, set_demand_date] = useState(null);
    const [expanded_row_keys, set_expanded_row_keys] = useState([]);
    const [product_previous_demand, set_product_previous_demand] = useState([]);

    let get_category_list = useAPIRequest(
        "get_category_list",
        query_get_categories
    );
    let crate_farmer_product_demand = useAPIRequest(
        "create_farmer_order_list",
        mutation_create_product_demand
    );
    let get_product_demand_farmer = useAPIRequest(
        "get_product_demand_farmers",
        query_get_product_demand_farmer
    );
    let get_previous_product_demand = useAPIRequest(
        "get_pervious_demand_list",
        query_get_previous_product_demand
    );

    const { items: farmer_list, loading: get_farmer_loading } =
        useDynamicSelector("get_product_demand_farmers");
    const { items: category_list, loading: get_category_loading } =
        useDynamicSelector("get_category_list");
    const {
        items: previous_product_demand,
        loading: previous_product_demand_loading,
    } = useDynamicSelector("get_pervious_demand_list");
    const columns = [
        {
            title: "",
            dataIndex: "index",
            key: "index",
            fixed: "left",
            width: 50,
        },
        {
            title: "Product",
            dataIndex: "category",
            key: "category",
            fixed: "left",
            width: "300px",
            render: (text, record) => {
                return (
                    <div className={record?.children?.length > 0 ? "group-header" : ""}>
                        {record?.children ? (
                            <CategoryLabel
                                record={record}
                                product_totals={product_totals}
                                category={category}
                            />
                        ) : (
                            <FarmerProduct
                                record={record}
                                product_estimate_totals={product_estimate_totals}
                                product_totals={product_totals}
                                handle_change_product_check_box={
                                    handle_change_product_check_box
                                }
                                selected_product_id={selected_product_id}
                            />
                        )}
                    </div>
                );
            },
        },
        ...(selected_farmer?.map((farmer, ind) => ({
            title: (
                <FarmerHeader
                    farmer={farmer}
                    onCheckChange={handle_check_change}
                    isChecked={selected_farmer_Id === farmer?.id}
                />
            ),
            dataIndex: "value",
            key: farmer.id,
            width: "200px",
            align: "center",
            render: (text, record, value) => {
                if (!record?.children) {
                    return (
                        <ProductInputBox
                            record={record}
                            farmer={farmer}
                            product_previous_demand={product_previous_demand}
                            previous_product_demand={previous_product_demand}
                            selected_farmer={selected_farmer}
                            set_product_previous_demand={set_product_previous_demand}
                        />
                    );
                }
            },
        })) || []),
    ];

    const handle_check_change = (id, checked) => {
        let get_farmer = selected_farmer?.find((fp) => fp?.id === id);

        if (checked) {
            set_selected_farmer_id(id);
            set_selected_product_id(null);
            set_category(filter_categories_by_farmer(category_list, get_farmer));
        } else {
            set_selected_farmer_id(null);
            set_selected_farmer(farmer_list);
            set_category(category_list);
        }
    };

    const handle_change_product_check_box = (id, checked) => {
        if (checked) {
            set_selected_product_id(id);
            set_selected_farmer_id(null);
            set_selected_farmer(get_farmers_by_product_Id(id, farmer_list));
            set_category(category_list);
            // set_category(getProductById(id))
        } else {
            set_selected_farmer(farmer_list);
            set_selected_product_id(null);
        }
    };

    const handle_expand = (expanded, record) => {
        if (expanded) {
            set_expanded_row_keys([...expanded_row_keys, record.id]);
        } else {
            set_expanded_row_keys(
                expanded_row_keys.filter((key) => key !== record.id)
            );
        }
    };
    const handle_generate = () => {
        let order_request_json = product_previous_demand.map((farmer, index) => {
            let order_line_item_list = farmer.products.map((farmer) => {
                return {
                    farmer_product_id: farmer?.farmer_product?.product_id,
                    quantity: farmer?.quantity,
                };
            });
            return {
                order_reference: `MYHARV000${index}`,
                farmer_id: farmer?.id,
                order_line_item_list,
            };
        });
        crate_farmer_product_demand({ data: order_request_json }, true);
    };

    const handle_change = (date) => {
        set_demand_date(date);
    };

    useEffect(() => {
        set_demand_date(
            dayjs(moment(new Date()).format("DD-MM-YYYY"), "DD-MM-YYYY")
        );
    }, []);

    useEffect(() => {
        get_product_demand_farmer({}, true);
        get_category_list({ sort: { field: "name", order: "asc" } }, true);
        get_previous_product_demand(
            { sort: { field: "name", order: "asc" } },
            true
        );
    }, []);

    useEffect(() => {
        set_selected_farmer(farmer_list);
        set_category(category_list);
        set_product_totals(calculate_product_totals(farmer_list));
    }, [farmer_list, category_list]);

    useEffect(() => {
        set_product_totals(
            calculate_product_totals(selected_farmer, product_previous_demand)
        );
    }, [selected_farmer, product_previous_demand]);

    useEffect(() => {
        set_product_previous_demand(previous_product_demand);
        set_product_estimate_totals(
            calculate_product_totals(selected_farmer, previous_product_demand)
        );
    }, [previous_product_demand, selected_farmer]);

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <PageTitle title={t("product_demand")} is_color={true} />
            <div className="product-demand-table-container">
                <div className="product-demand-footer">
                    <div className="date-picker-container">
                        {t("delivery_out")}
                        <DatePicker
                            onChange={handle_change}
                            value={demand_date}
                            format={"DD-MM-YYYY"}
                            disabledDate={disable_date}
                        />
                    </div>
                    <Button type="primary" onClick={handle_generate}>
                        {t("generate")}
                    </Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={category}
                    pagination={false}
                    scroll={{ x: "max-content" }}
                    rowKey={"id"}
                    sticky={{
                        offsetHeader: 50,
                    }}
                    className="table-striped-rows"
                    rowClassName={(record, index) =>
                        row_class_name(record, index, category_list)
                    }
                    expandable={{
                        expanded_row_keys,
                        onExpand: handle_expand,
                    }}
                    loading={
                        get_farmer_loading ||
                        get_category_loading ||
                        previous_product_demand_loading
                    }
                />
            </div>
        </div>
    );
};

export default ProductDemandDetails;
