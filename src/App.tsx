import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import BaseLayout from "./components/BaseLayout";
import { useUserStore } from "./state/useUserStore";
import Test from "./Test";
import AppStore from "./state/AppStore";

{
  /* <BaseLayout /> */
}
function App() {
  const [user, setUser] = useState(null);

  const store = useUserStore();

  console.log("store", store);

  return (
    <AppStore>
      <Test />
    </AppStore>
  );
}

export default App;
