import { Outlet } from "react-router";
import { Header } from "../header";
import { Footer } from "../footer";


export const PrivateLayout = () => {

  return (
    <>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </>
  );
};
