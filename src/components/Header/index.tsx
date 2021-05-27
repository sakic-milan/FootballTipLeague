import { FunctionComponent } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/images/logo.png";
import MainNav from "../MainNav";
import MobileNav from "../MobileNav";

const Header: FunctionComponent<any> = () => {
  console.log(logo);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={logo} />
        <MainNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
