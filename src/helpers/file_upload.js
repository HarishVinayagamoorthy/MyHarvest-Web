import axios from "axios";
import { get_uuid } from "./functions";
import { query_request } from "@services/apollo/api_service";
import { file_upload_query } from "@services/graphql";

let file_upload_response = "";
export let file_list = [];

export const action = file_upload_response?.data?.get_upload_url?.url;
export const handle_file_changed = ({ file }) => {
  if (file?.status === "removed") {
    file_list = [];
  } else if (file?.status === "uploading") {
    file = {
      ...file,
      url: file_upload_response?.data?.get_upload_url?.url,
      message: file_upload_response?.data?.get_upload_url?.message,
    };
    file_list = [file];
    return file;
  } else if (file?.status === "done") {
    file_list = [...file_list];
    return file;
  }
};
export const handle_before_upload = async (file) => {
  const { name, type } = file;
  const allowed_types = ["image/png", "image/jpg", "image/jpeg"];
  const valid_extensions = [".png", ".jpg", ".jpeg"];
  const is_valid_extensions = valid_extensions.some((ext) =>
    name.endsWith(ext)
  );
  if (is_valid_extensions || allowed_types.includes(type)) {
    let file_upload = {
      type: "document",
      fileName: get_uuid(),
    };

    file_upload_response = await query_request(file_upload_query, file_upload);
  } else {
    file_upload_response = {
      data: {
        get_upload_url: {
          url: get_uuid(),
          status: "done",
          message: "Allow only PNG, JPG and JPEG images",
        },
      },
    };
  }
};
export const handle_upload = ({ onSuccess, onError, file }) => {
  if (!file_list?.[0]?.message) {
    axios
      .put(file_list?.[0]?.url, file, {
        headers: { "Content-Type": file.type },
      })
      .then((response) => {
        file.url = file_list?.[0]?.url.split("?")[0];

        onSuccess(null, file);
      })
      .catch((error) => {});
  } else {
    onError(null, file_list?.[0]?.message);
  }
};
