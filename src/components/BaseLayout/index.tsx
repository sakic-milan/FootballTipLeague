import { FunctionComponent } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface BaseLayoutProps {}

const BaseLayout: FunctionComponent<BaseLayoutProps> = () => {
  return (
    <>
      <Header />
      <div style={{ maxWidth: "350px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        labore nulla? Minus ducimus saepe natus qui repellendus unde aut facere?
        Recusandae, cum obcaecati? Eveniet iste dolores rerum architecto quidem
        aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, labore nulla? Minus ducimus saepe natus qui repellendus
        unde aut facere? Recusandae, cum obcaecati? Eveniet iste dolores rerum
        architecto quidem aspernatur! Lorem ipsum dolor sit amet consectetur
        nulla? Minus ducimus saepe natus qui repellendus unde aut facere?
        Recusandae, cum obcaecati? Eveniet iste dolores rerum architecto quidem
        aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, labore nulla? Minus ducimus saepe natus qui repellendus
        unde aut facere? Recusandae, cum obcaecati? Eveniet iste dolores rerum
        architecto quidem aspernatur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Exercitationem, labore nulla? Minus ducimus saepe
        natus qui repellendus unde aut facere? Recusandae, cum obcaecati?
        Eveniet iste dolores rerum architecto quidem aspernatur! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Exercitationem, labore
        nulla? Minus ducimus saepe natus qui repellendus unde aut facere?
        Recusandae, cum obcaecati? Eveniet iste dolores rerum architecto quidem
        aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, labore nulla? Minus ducimus saepe natus qui repellendus
        unde aut facere? Recusandae, cum obcaecati? Eveniet iste dolores rerum
        architecto quidem aspernatur!
      </div>
      <Footer />
    </>
  );
};

export default BaseLayout;
