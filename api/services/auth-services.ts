import { apiRequest_Error } from "..";

// Handle Auth Requests
export const register = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/auth/register", payload);
};

// Login
export const login = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/auth/login", payload);
};

// Logout
export const logout = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/auth/logout", payload);
};

// Reset Password
export const resetAccPass = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/auth/reset-password", payload);
};
// Change Password
export const changeAccPass = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/auth/change-password", payload);
};
// check reset Password
export const checkResetPass = async (payload = {}) => {
  return await apiRequest_Error("POST", "/api/auth/check-reset", payload);
};
