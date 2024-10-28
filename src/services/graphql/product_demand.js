import { gql } from "@apollo/client";

export const mutation_create_product_demand = gql`
  mutation create_farmer_order_list($data: [create_farmer_order_input]) {
    create_farmer_order_list(data: $data) {
      id
      status
      error {
        message
      }
    }
  }
`;

export const query_get_product_demand_farmer = gql`
  query get_farmer_list {
    get_product_demand_farmers: get_farmer_list {
      items {
        id
        name
        products: farmer_product_list {
          id: product_id
        }
      }
    }
  }
`;

export const query_get_previous_product_demand = gql`
  query get_pervious_demand_list {
    get_pervious_demand_list {
      items {
        id
        farmer_id
        ordered_datetime
        products: order_line_item_list {
          id
          farmer_product_id
          quantity
          farmer_product {
            product_id
          }
        }
      }
    }
  }
`;
