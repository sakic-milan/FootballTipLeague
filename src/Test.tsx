import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import BaseLayout from "./components/BaseLayout";
import { useUserStore } from "./state/useUserStore";
import { observer } from "mobx-react-lite";
import { useAuthStore } from "./state/useAuthStore";

{
  /* <BaseLayout /> */
}
function Test() {
  const userStore = useUserStore();
  const authStore = useAuthStore();

  console.log("rerendered");

  return (
    <div>
      <h1>Hello there!</h1>
      {userStore?.value}

      <button onClick={userStore?.increment}>Incement</button>

      <h1>Other Store Hello there!</h1>
      {authStore?.vrednost}

      <button onClick={authStore?.povecaj}>povecaj</button>
    </div>
  );
}

export default observer(Test);
