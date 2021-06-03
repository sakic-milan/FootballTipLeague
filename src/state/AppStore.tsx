import { createContext, FunctionComponent, ReactNode, useContext } from "react";
import AuthStore from "./AuthStore";
import UserStore from "./UserStore";

export const AppContext = createContext({
  userStore: {} as UserStore,
  authStore: {} as AuthStore,
});

const userStore = new UserStore();
const authStore = new AuthStore();

interface AppStoreProps {
  children?: ReactNode;
}

const AppStore: FunctionComponent<AppStoreProps> = ({ children }) => (
  <AppContext.Provider value={{ userStore, authStore }}>
    {children}
  </AppContext.Provider>
);

export default AppStore;
