export const isUser = (userType: UserTypes | UserTypes[]): boolean => {
  return userType.includes("customer" as UserTypes);
};

/**
 * @param type type of user
 * @returns boolean
 */
export const isAdmin = (userType: UserTypes | UserTypes[]): boolean => {
  return userType.includes("admin" as UserTypes);
};

/**
 * @param type type of user
 * @returns boolean
 */
export const isUserAdmin = (userType: UserTypes | UserTypes[]): boolean => {
  return (
    userType.includes("seller" as UserTypes) &&
    userType.includes("admin" as UserTypes)
  );
};

/**
 * @param file static upload file
 * @returns string
 */
export const loadImageBlob = (file: File) => {
  return URL.createObjectURL(file);
};
