import { useContext } from "react";
import { AppContext } from "./AppStore";

export const useUserStore = () => {
  const { userStore } = useContext(AppContext);

  return userStore;
};
