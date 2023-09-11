import { Link, useParams } from "react-router-dom";
import OrderInfo from "../components/OrderInfo";

const Order = () => {
  const { id } = useParams();

  if (!id) return <h1>Error</h1>;

  return (
    <>
      <Link to={`/`}>{"<"} Back home</Link>
      <OrderInfo id={id} />
    </>
  );
};

export default Order;
