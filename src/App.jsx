import { createBrowserRouter} from "react-router-dom";
import Home from "./Pages/Home";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";

import ProductPage from "./Pages/ProductPage";
import Layout from "./components/Layout";
import CategoryPage from "./Pages/CategoryPage";
import ProductDetails from "./Pages/ProductDetails";


const App = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <ContactPage />,
      },
       {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path:"/categories/:category_name",
        element:<CategoryPage/>
      },
      {
        path:"/product-details/:id",
        element:<ProductDetails/>
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      
     
    ],
  },
  
  
  
  
]);

export default App;
