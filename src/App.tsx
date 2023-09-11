import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import OrderInfo from "./OrderInfo";
import Tracker from "./Tracker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrderInfo id="UK1876YH08_2" />,
  },
  {
    path: "/order",
    element: <OrderInfo id="UK1876YH08_2" />,
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
