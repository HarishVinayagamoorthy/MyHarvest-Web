import { gql } from "@apollo/client";

export const file_upload_query = gql`
  query get_upload_url($type: String, $fileName: String) {
    get_upload_url(type: $type, fileName: $fileName) {
      status
      url
      error {
        status_code
        message
      }
    }
  }
`;
