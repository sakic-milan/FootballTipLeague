import { FunctionComponent } from "react";
import styles from "./styles.module.scss";

interface ContentProps {
  children: any;
}

const Content: FunctionComponent<ContentProps> = ({ children }) => {
  return (
    <section className={styles.contentWrapper}>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

export default Content;
