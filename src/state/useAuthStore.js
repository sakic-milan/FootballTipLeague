import { useContext } from "react";
import { AppContext } from "./AppStore";

export const useAuthStore = () => {
  const { authStore } = useContext(AppContext);
  return authStore;
};
