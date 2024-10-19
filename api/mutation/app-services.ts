import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest_Error, makeRequest } from "..";

// CODE(Cart):
export const useMutateAddToWishlist = () => {
  return useMutation({
    mutationKey: ["add_to_wishlist"],
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/shop/user/wishlists", payload),
  });
};
export const useMutateAddToCart = () => {
  return useMutation({
    mutationKey: ["add_to_cart"],
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/shop/user/carts", payload),
  });
};
export const useMutateUpdateToCart = (id: number) => {
  return useMutation({
    mutationKey: ["add_to_cart"],
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/shop/user/carts/" + id, payload),
  });
};
export const useGetUserCart = () => {
  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/user/carts");
    },
  });
};
export const useGetUserWishlist = () => {
  return useQuery({
    queryKey: ["wishlists"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/user/wishlists");
    },
  });
};

// CODE(Orders):
export const useMutateCreateOrder = () => {
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/orders", payload),
  });
};

export const useGetOrders = (filter = "") => {
  return useQuery({
    queryKey: ["orders", filter],
    queryFn: async () => {
      return await makeRequest("GET", "/api/orders?" + filter);
    },
  });
};

export const useGetOrderDetails = (orderId: string) => {
  return useQuery({
    queryKey: ["orders", "details"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/orders/" + orderId);
    },
  });
};

export const useMutateCreateOrderStatus = () => {
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/orders/status", payload),
  });
};

export const useMutationOrderState = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/products/state", payload);
};

// CODE(HELP):
export const useMutateSendFeedback = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/help/feedback", payload, config),
  });
};
export const useGetFeedbacks = () => {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: async () => await makeRequest("GET", "/api/help/feedback"),
  });
};
export const useGetFeedbackDetails = (feedbackId: string) => {
  return useQuery({
    queryKey: ["feedback", feedbackId],
    queryFn: async () =>
      await makeRequest("GET", "/api/help/feedback/" + feedbackId),
  });
};
// CODE(Contact):
export const useMutateSendContact = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/help/contact", payload, config),
  });
};
// CODE(Importations):
export const useMutateRequestImportation = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: unknown) =>
      await makeRequest("POST", "/api/request/importations", payload, config),
  });
};

// // Notifications
// export const notifications = async (userId: number) => {
//   return await apiRequest_Error('GET',"/api/notifications/" + userId);
// };
