import { gql } from "@apollo/client";

export const query_get_states = gql`
  query get_state_list(
    $filter: state_filter_input
    $pagination: pagination_input
    $sort: [sort_input]
  ) {
    get_state_list(filter: $filter, pagination: $pagination, sort: $sort) {
      items {
        id
        name
      }
    }
  }
`;

