import { useMutation, useQuery } from "@tanstack/react-query";
import { makeRequest } from "..";

// Get payment methods
export const useGetPaymentMethods = () => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/v1/payments");
    },
  });
};
// Get payment accounts
export const useGetPaymentAccounts = () => {
  return useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/v1/payments/accounts");
    },
  });
};

// update messages status for a chart
// export const updateChatStatus = (chatId: string) => {
//   return apiRequest_Error("POST", "/api/v1/chats/status/" + chatId);
// };

// Create payment method
export const useMutationCreatePaymentMethod = (uid = "") => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: any) =>
      await makeRequest(
        "POST",
        `/api/v1/payments${uid ? "/" + uid : ""}`,
        payload,
        config
      ),
  });
};

// Create payment account
export const useMutationCreatePaymentAccount = (m_uid = "", uid = "") => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: any) =>
      await makeRequest(
        "POST",
        `/api/v1/payments/${m_uid}/accounts${uid ? "/" + uid : ""}`,
        payload,
        config
      ),
  });
};
