import React from "react";
import styles from "./styles.module.scss";
import MenuIcon from "@material-ui/icons/Menu";

const MobileNav = () => {
  return (
    <div className={styles.mobileNav}>
      <MenuIcon className={styles.mobileNavIcon} />
    </div>
  );
};

export default MobileNav;
