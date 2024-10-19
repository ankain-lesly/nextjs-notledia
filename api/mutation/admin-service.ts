import { useMutation } from "@tanstack/react-query";
import { makeRequest } from "..";

export const useMutationPaymentMethod = (id = "") => {
  return useMutation({
    mutationKey: ["addresses", "update"],
    mutationFn: async (payload: unknown) =>
      await makeRequest(
        id ? "PUT" : "POST",
        `/api/payment-methods${id ? "/" + id : ""}`,
        payload
      ),
  });
};
