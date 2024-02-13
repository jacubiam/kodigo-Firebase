import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import LoginPage from "./pages/Login.Page";
import ProductPage from "./pages/Product.Page";
import CreateProductPage from "./pages/_CreateProductPage";

function App() {

  const routes = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/user/products", element: <ProductPage /> },
    { path: "/user/create", element: <CreateProductPage /> }
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
