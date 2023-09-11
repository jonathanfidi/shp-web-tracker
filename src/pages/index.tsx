import { Link } from "react-router-dom";
import OrderInfo from "../components/OrderInfo";

const Index = () => {
  return (
    <>
      <h1>Welcome,</h1>
      <h2>Orders</h2>
      <ul>
        <li>
          <Link to="/order/UK1876YH08_2">Order #UK1876YH08_2</Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
