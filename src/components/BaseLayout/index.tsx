import { FunctionComponent } from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

interface BaseLayoutProps {}

const BaseLayout: FunctionComponent<BaseLayoutProps> = () => {
  return (
    <>
      <Header />

      <Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        aliquid ipsum culpa tempore ea! Nisi asperiores, esse nihil quidem eos
        nobis totam atque nulla iste blanditiis, minima recusandae, expedita
        voluptas.
      </Content>
      <Footer />
    </>
  );
};

export default BaseLayout;
