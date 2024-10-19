import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest_Error, makeRequest } from "..";

// CODE(Shop):

// Get shops
export const useGetShops = (filter = "") => {
  return useQuery({
    queryKey: ["shops", filter],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shops" + filter);
    },
  });
};

// Get seller shop
export const useGetSellerShop = (
  enabled = true,
  user_id = "",
  user = false
) => {
  // TODO: add user data
  return useQuery({
    queryKey: ["shop", user_id],
    queryFn: async () => {
      return await makeRequest(
        "GET",
        `/api/seller/shop?ref=${user_id}${user ? "&user=true" : ""}`
      );
    },
    enabled: enabled,
  });
};

// Get shop by id
export const useGetShopDetails = (id: number) => {
  return useQuery({
    queryKey: ["shop", id],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shops/" + id);
    },
  });
};

// create
export const useMutationCreateShop = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/shops", payload, config),
  });
};
// Update
export const useMutationUpdateShop = (id: number) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/shops/" + id, payload, config),
  });
};

// Get shop by name
export const useGetShopNameDetails = (name: string) => {
  return useQuery({
    queryKey: ["shop", name],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shops/details/" + name);
    },
  });
};

// Get shop by name
export const validateShop = (payload: { [key: string]: number | string }) => {
  return apiRequest_Error(
    "POST",
    "/api/shop/validate/" + payload?.ref,
    payload
  );
};

// Verify Email
export const useMutationVerifyShop = () => {
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/shop/verify", payload),
  });
};
