import HomePage from "./components/Routes/homePage/homePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./components/Routes/listPage/listPage.jsx";
import Layout from "./components/Routes/layout/layout.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
