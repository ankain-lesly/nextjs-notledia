import { useQuery } from "@tanstack/react-query";
import { apiRequest_Error, makeRequest } from "..";

// CODE(Categories):
// interface Props {
//   select: (data: any) => void;
// }

export const useAPICategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/categories");
    },
    // ...options,
  });
};
// export const APICategories = async () => {
//   return await apiRequest_Error("GET", "/api/categories");
// };

export const APIGetCategory = async (cat_id: number) => {
  return await apiRequest_Error("GET", "/api/categories/" + cat_id);
};

export const APICreateCategory = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/categories", payload);
};
export const APIUpdateCategory = async (id: number, payload = {}) => {
  return await apiRequest_Error("PUT", "/api/categories/" + id, payload);
};

export const APIDeleteCategory = async (id: number) => {
  return await apiRequest_Error("DELETE", "/api/categories/" + id);
};

// CODE(Product):
export const APIProducts = async () => {
  return await apiRequest_Error("GET", "/api/products");
};

export const APIGetProduct = async (id: string | number) => {
  return await apiRequest_Error("GET", "/api/products/" + id);
};

export const APICreateProduct = async (payload = {}) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return await apiRequest_Error("POST", "/api/products", payload, config);
};

export const APIUpdateProduct = async (id: number, payload = {}) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return await apiRequest_Error("POST", "/api/products/" + id, payload, config);
};

export const useMutationProductState = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/products/state", payload);
};

// CODE(ProductImages):

export const APIDeleteProductImage = async (id: number) => {
  return await apiRequest_Error("DELETE", "/api/products/images/" + id);
};
