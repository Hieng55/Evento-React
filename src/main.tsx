import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { PrivateLayout } from "./layout/privateLayout/index.tsx";
import { Shop } from "./components/shop/index.tsx";
import { CartDetail } from "./components/cartDetail/index.tsx";
import { NotFound } from "./components/notFound/index.tsx";
import { Cart } from "./components/cart/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <PrivateLayout />
      </Provider>
    ),
    children: [
      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "cart/:id",
        element: <CartDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router}></RouterProvider>);
