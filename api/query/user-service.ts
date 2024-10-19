import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "..";

// CODE(APPInit):
export const useInitializeStore = (token: boolean) => {
  return useQuery({
    queryKey: ["user", "store"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/shop/users/store");
    },
    retry: 0,
    enabled: token,
  });
};

// CODE(APPInit):
export const useGetUser = () => {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: async () => {
      return await makeRequest("GET", "/api/user");
    },
  });
};

// CODE(UserMatrix):
export const useGetUserMatrix = (user: UserTypes) => {
  return useQuery({
    queryKey: ["matrix", user],
    queryFn: async () => {
      return await makeRequest("GET", "/api/matrix/" + user);
    },
    retry: 1,
    // retryDelay:1000,
  });
};

// CODE(StatusMatrix):
export const useGetStatusMatrix = (
  user: UserTypes | "stream",
  canLoad = true
) => {
  return useQuery({
    queryKey: ["client-status", user],
    queryFn: async () => {
      return await makeRequest("GET", "/api/client-status/" + user);
    },
    enabled: canLoad,
    retry: 1,
    refetchOnWindowFocus: true,
    // refetchInterval: 1000,
  });
};
