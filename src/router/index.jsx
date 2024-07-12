import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Rentals from "../pages/Rentals";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path:' ',
            element: <Home />
        },
        {
            path:'/rentals',
            element: <Rentals />
        },
        {
            path:'/pricing',
            element: <Pricing />
        },
        {
            path:'/contact',
            element: <Contact />
        }
      ]
    },
  ]);

export default router;