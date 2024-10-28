import { gql } from "@apollo/client";

export const query_get_districts = gql`
  query get_district_list(
    $filter: district_filter_input
    $pagination: pagination_input
    $sort: [sort_input]
  ) {
    get_district_list(filter: $filter, pagination: $pagination, sort: $sort) {
      items {
        id
        name
      }
    }
  }
`;
