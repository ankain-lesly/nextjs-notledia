import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest_Error, makeRequest } from "..";

// CODE(Address):
export const useGetAddresses = () => {
  return useQuery({
    queryKey: ["addresses"],
    queryFn: async () => await makeRequest("GET", `/api/addresses`),
  });
};
export const useGetShopAddresses = (id: number) => {
  return useQuery({
    queryKey: ["addresses", id],
    queryFn: async () => await makeRequest("GET", `/api/addresses/shop/` + id),
    enabled: !!id,
  });
};

export const useMutationCreateAddress = (id = "") => {
  return useMutation({
    mutationKey: ["addresses", "update"],
    mutationFn: async (payload: unknown) =>
      await makeRequest(
        id ? "PUT" : "POST",
        `/api/addresses${id ? "/" + id : ""}`,
        payload
      ),
  });
};

export const useMutationDeleteAddress = () => {
  return useMutation({
    mutationKey: ["addresses", "delete"],
    mutationFn: async (payload: number) =>
      await makeRequest("DELETE", `/api/addresses/` + payload),
  });
};

// CODE(Profile):
export const useGetProfile = (payload = {}) => {
  return useQuery({
    queryKey: ["profile", "get"],
    queryFn: async () => await makeRequest("GET", `/api/profile`, payload),
  });
};

export const useMutationUpdateProfile = () => {
  return useMutation({
    mutationKey: ["addresses", "update"],
    mutationFn: async (payload: unknown) => {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      return await makeRequest("POST", "/api/profile", payload, config);
    },
  });
};

export const changePassword = async (payload = {}) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return await apiRequest_Error(
    "POST",
    `/api/account/change-password`,
    payload,
    config
  );
};
