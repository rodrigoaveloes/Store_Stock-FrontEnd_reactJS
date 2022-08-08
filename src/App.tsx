import { useRoutes } from "react-router-dom";
import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import { Edit } from "./views/ProductEdit";
import { Products } from "./views/Products";

export const App  = () => {
  return useRoutes([
    {path: '/', element: <Home/>},
    {path: '/produtos', element: <Products/>},
    {path: '/editar/produto/:id', element: <Edit/>},
    {path: '*', element: <NotFound/>},
  ]);

  }