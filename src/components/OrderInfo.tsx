import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { PRIVATE_KEY } from "../constants";

type Props = {
  id: string;
};

const OrderInfo = ({ id }: Props) => {
  const { data, isFetching, isError } = useQuery(`order-${id}`, () => {
    return axios.get(
      `https://api.shipup.co/v2/orders?order_number=${id}&expand[]=fulfillments.trackers.line_items`,
      {
        headers: {
          Authorization: `${PRIVATE_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
  });

  const order = data?.data?.data?.[0];

  if (isFetching) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    order && (
      <>
        <h1>Order info</h1>
        <div>Number: {order.order_number}</div>
        <div>First name: {order.first_name}</div>
        <div>Last name: {order.last_name}</div>
        <div>
          Trackers:
          <ul>
            {order.fulfillments?.data?.map((fulfillment: any) => {
              return fulfillment.trackers?.data?.map((tracker: any) => (
                <li key={tracker.id}>
                  <Link to={`/tracker/${tracker.tracking_number}`}>
                    Tracker #{tracker.tracking_number}:{" "}
                    {tracker.delivery_status_code} ({tracker.carrier.code})
                  </Link>
                </li>
              ));
            })}
          </ul>
        </div>
      </>
    )
  );
};

export default OrderInfo;
