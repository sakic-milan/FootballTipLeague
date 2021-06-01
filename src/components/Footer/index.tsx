import React from "react";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <>
      {" "}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <section className={styles.footerAbout}>
            <h3>Football Tip League</h3>
            <p>
              Football tip league is platform where you can compete with your
              firends and with tens of thousands player world wide by predicting
              real football matches.
            </p>
          </section>
          <section className={styles.footerBox}>
            <h3>Links</h3>
          </section>
          <section className={styles.footerBox}>
            <h3>Social</h3>
          </section>
        </div>
      </footer>{" "}
      <section className={styles.footerBottomSection}>
        <div className={styles.footerBottomSectionInner}>Bottom</div>
      </section>
    </>
  );
}

export default Footer;
