import React from "react";
import InputField from "../../components/shared/InputField";
import styles from "./styles.module.scss";

const Login = () => {
  return (
    <section className={styles.loginPage}>
      <div className={styles.loginContent}>
        <div className={styles.promoWrapper}>Promo</div>
        <div className={styles.loginWrapper}>
          Login
          <InputField />
          <InputField />
          <InputField />
          <InputField />
        </div>
      </div>
    </section>
  );
};

export default Login;
