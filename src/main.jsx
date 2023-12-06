import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './Error_page'
import Home from './Components/Home'
import Contact from './Components/Contact';
import About from './Components/About';
import ItemDetails from './Components/ItemDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/ItemDetails",
    element: <ItemDetails />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
