import { gql } from "@apollo/client";

export const query_get_categories = gql`
  query get_category_list(
    $filter: category_filter_input
    $pagination: pagination_input
    $sort: [sort_input]
  ) {
    get_category_list(filter: $filter, pagination: $pagination, sort: $sort) {
      items {
        id
        name
        image
        children: product_list {
          id
          name
          image_list
          measurement_type
          category_id
        }
      }
    }
  }
`;
