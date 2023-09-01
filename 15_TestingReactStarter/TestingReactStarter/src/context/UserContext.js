import { createContext } from "react";

export const UserContext = createContext({ userId: 1, userName: "guest" });

export function UserProvider({ children }) {
  const userInfo = {
    userId: 1,
    userName: "Jean Bartik",
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
}
