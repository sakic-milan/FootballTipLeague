import React from "react";
import NavItem from "./NavItem";
import styles from "./styles.module.scss";

const MainNav = () => {
  return (
    <nav className={styles.mainNav}>
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </nav>
  );
};

export default MainNav;
