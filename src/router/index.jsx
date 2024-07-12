import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Rentals from "../pages/Rentals";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import { Gallery } from "../pages/Gallery";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
            path:'',
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
          path:'/gallery',
          element: <Gallery />
        },
        {
            path:'/contact',
            element: <Contact />
        }
      ]
    },
  ]);

export default router;