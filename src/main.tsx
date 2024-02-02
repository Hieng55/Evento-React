import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from "./components/shop/homePage/index";
import { Contact } from "./components/shop/contactPage/index";
import { User } from "./components/shop/userPage/index";
import { About } from "./components/shop/aboutPage/index";

import { PrivateLayout } from "./components/layout/privateLayout";
import { PublicLayout } from "./components/layout/publicLayout/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "login",
    element: <PublicLayout />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(<RouterProvider router={router} />);
