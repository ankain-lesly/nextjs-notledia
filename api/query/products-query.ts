import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "..";

export const useProductsTrending = () => {
  return useQuery({
    queryKey: ["products", "trending"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/products/trending");
    },
  });
};

export const useProductsLatest = (filter = "") => {
  return useQuery({
    queryKey: ["products", "latest", filter],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/products/latest?" + filter);
    },
  });
};

export const useSearchProduct = (filter = "") => {
  return useQuery({
    queryKey: ["products", "latest", filter],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/products/latest?" + filter);
    },
    enabled: !!filter,
  });
};

export const useProductsAccessories = () => {
  return useQuery({
    queryKey: ["products", "accessories"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/products/accessories");
    },
  });
};

export const useProductsRelated = (id: number) => {
  return useQuery({
    queryKey: ["products", "related"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/products/related?cat=" + id);
    },
  });
};

export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      return await makeRequest("GET", "/api/details/products/" + id);
    },
    enabled: !!id,
  });
};

export const useGetShopProducts = (shopId: string) => {
  return useQuery({
    queryKey: ["products", shopId],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/products/" + shopId);
    },
  });
};

// export const useAddToCart = () => {
//   return useMutation<Product, unknown, Product>(async (product) => {
//     const response = await axios.post("/api/cart", product);
//     return response.data; // Response after adding to the cart
//   });
// };

// export const usePlaceOrder = () => {
//   return useMutation<OrderData, unknown, OrderData>(async (orderData) => {
//     const response = await axios.post("/api/orders", orderData);
//     return response.data; // Response after placing the order
//   });
// };
