import { useState, useEffect } from "react";
import { retrieve_item } from "@src/helpers/functions";

const useCheckLogin = () => {
  let is_logged_in = null;
  let session_id = retrieve_item("session_id");
  try {
    if (session_id) {
      is_logged_in = true;
    } else {
      is_logged_in = false;
    }
  } catch (e) {
    is_logged_in = false;
  }
  return is_logged_in;
};

const usePageAccess = (key) => {
  let hasAccess = null;
  let page_accesses = retrieve_item("page_accesses");
  try {
    let pageAccess = page_accesses.find((x) => x === key);

    if (pageAccess) {
      hasAccess = true;
    } else {
      hasAccess = false;
    }
  } catch (e) {
    hasAccess = false;
  }
  return hasAccess;
};

const usePageComponentAccess = (key) => {
  const [hasAccess, setHasAccess] = useState(null);
  useEffect(() => {
    let page_component_accesses = retrieve_item("page_component_accesses");
    try {
      let pageComponentAccess = page_component_accesses.find((x) => x === key);
      if (pageComponentAccess) {
        setHasAccess(true);
      } else {
        setHasAccess(false);
      }
    } catch (e) {
      setHasAccess(false);
    }
  });
  return hasAccess;
};

export {
  useCheckLogin as useCheckLogin,
  usePageAccess as usePageAccess,
  usePageComponentAccess as usePageComponentAccess,
};
