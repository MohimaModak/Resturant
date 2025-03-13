import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import Menu from "./assets/Component/Menu/Menu";
import Testimonial from "./assets/Component/Testimonial/Testimonial";
import Promotion from "./assets/Component/Promotion/Promotion";
import Reservation from "./assets/Component/Reservation/Reservation";
import Contact from "./assets/Component/Contact/Contact";
import Gallery from "./assets/Component/Gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Menu",
        element: <Menu></Menu>,
      },
      {
        path: "/Testimonial",
        element: <Testimonial></Testimonial>,
      },
      {
        path: "/Promotion",
        element: <Promotion></Promotion>,
      },
      {
        path: "/Reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Gallery",
        element: <Gallery></Gallery>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
