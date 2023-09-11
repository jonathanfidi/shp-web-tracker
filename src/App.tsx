import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Tracker from "./pages/tracker";
import Order from "./pages/order";
import Index from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/order/:id",
    element: <Order />,
  },
  {
    path: "/tracker/:trackingNumber",
    element: <Tracker />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
