import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest_Error, makeRequest } from "..";

// Get chats
export const useGetChats = () => {
  return useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/v1/chats");
    },
    refetchOnWindowFocus: true,
  });
};

// Get messages
export const useGetChatMessages = (chatId: string) => {
  return useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      return await makeRequest("GET", "/api/v1/chats/" + chatId + "/messages");
    },
  });
};

// update messages status for a chart
export const updateChatStatus = (chatId: string) => {
  return apiRequest_Error("POST", "/api/v1/chats/status/" + chatId);
};

// send message
export const useMutationSendMessage = (chatId: string) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: any) =>
      await makeRequest(
        "POST",
        `/api/v1/chats/${chatId}/messages`,
        payload,
        config
      ),
  });
};

// Create chat or new chat message
export const useMutationNewChat = () => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return useMutation({
    mutationFn: async (payload: any) =>
      await makeRequest("POST", `/api/v1/chats/start`, payload, config),
  });
};
