import { get_uuid } from "@helpers/functions";

export const get_farmers_by_product_Id = (productId, farmers) => {
  let farmers_list = farmers?.filter((farmer) =>
    farmer?.products?.some((product) => product?.id === productId)
  );
  return farmers_list;
};

export const filter_categories_by_farmer = (categories, farmer) => {
  let farmer_products = categories
    ?.map((category) => {
      const filtered_children = category?.children?.filter((child) =>
        farmer?.products?.some((product) => product?.id === child?.id)
      );
      return {
        ...category,
        children: filtered_children,
      };
    })
    .filter((category) => category?.children?.length > 0);

  return farmer_products;
};

export const getAllProducts = (data) => {
  let products = [];
  data?.forEach((order) => {
    order?.products?.forEach((product) => {
      products.push(product);
    });
  });
  return products;
};

export const row_class_name = (record, index, categories_list) => {
  if (record?.children) {
    let my_category_index = categories_list?.findIndex(
      (x) => x.id === record?.id
    );

    if (my_category_index % 2 === 0) {
      return "category-even-row";
    }
    return "category-odd-row";
  } else {
    let my_category = categories_list?.find(
      (x) => x?.id === record?.category_id
    );
    let my_category_products = my_category?.children;
    let my_index = my_category_products?.findIndex((x) => x?.id === record?.id);
    const is_my_index_even = my_index % 2 === 0;
    return is_my_index_even ? "product-even-row" : "product-odd-row";
  }
};

export const handle_change = (farmer_id, product_id, value, set_state) => {
  set_state((prev_farmers) =>
    prev_farmers?.map((farmer) => {
      if (farmer?.farmer_id === farmer_id) {
        let product_exists = false;
        const updated_products = farmer?.products?.map((product) => {
          if (product?.farmer_product?.product_id.includes(product_id)) {
            product_exists = true;
            return {
              ...product,
              quantity: value,
            };
          }
          return product;
        });

        if (!product_exists) {
          updated_products.push({
            farmer_product: { product_id: product_id },
            farmer_product_id: get_uuid(),
            quantity: value,
          });
        }

        return {
          ...farmer,
          products: updated_products,
        };
      }
      return farmer;
    })
  );
};

export const calculate_product_totals = (farmers, demand_value) => {
  const totals = demand_value?.reduce((acc, farmer) => {
      farmer?.products?.forEach((product) => {
          if (!acc[product?.farmer_product?.product_id]) {
              acc[product?.farmer_product?.product_id] = 0;
          }
          acc[product?.farmer_product?.product_id] += Math.round(product?.quantity);
      });
      return acc;
  }, {});
  return totals;
};