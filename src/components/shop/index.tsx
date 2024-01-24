import { Footer } from "../../layout/footer";
import { Header } from "./../../layout/header/index";
import { Banner } from "./bannerShop";
import { Cards } from "./cardProduct";
export const Shop = () => {
  return (
    <div className="bg-ctGrayBg ">
      <header>
        <Header />
      </header>
      <main className="p-5">
        <Banner />
        <Cards />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
