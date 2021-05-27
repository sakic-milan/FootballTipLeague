import React from "react";
import styles from "./styles.module.scss";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const NavItem = () => {
  return (
    <div className={styles.navItem}>
      <div className={styles.navItemIconWrapper}>
        <ContactMailIcon className={styles.navItemIcon} />
      </div>

      <p className={styles.navItemText}>My profile</p>
    </div>
  );
};

export default NavItem;
