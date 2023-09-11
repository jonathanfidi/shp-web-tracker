import { Link, useParams } from "react-router-dom";
import { PRIVATE_KEY } from "../../constants";
import { useQuery } from "react-query";
import axios from "axios";

const Tracker = () => {
  const { trackingNumber } = useParams();

  const { data, isFetching, isError } = useQuery(
    `tracker-${trackingNumber}`,
    () => {
      return axios.get(
        `https://api.shipup.co/v2/trackers?tracking_number=${trackingNumber}&expand[]=notifications&expand[]=fulfillment.order`,
        {
          headers: {
            Authorization: `${PRIVATE_KEY}`,
            "Content-Type": "application/json",
          },
        },
      );
    },
  );

  const tracker = data?.data?.data?.[0];
  const sortedNotifications = tracker?.notifications?.data
    ?.sort((a: any, b: any) => (a.created_at > b.created_at ? 1 : -1))
    .sort((a: any, b: any) => (a.id > b.id ? 1 : -1));

  if (isFetching) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;

  return (
    tracker && (
      <>
        <Link to={`/order/${tracker.fulfillment.order.order_number}`}>
          {"<"} Back to the order
        </Link>
        <h1>Tracker #{tracker?.tracking_number}</h1>
        <h2>Notifications</h2>
        <ul>
          {sortedNotifications?.map((notification: any) => (
            <li key={notification.id}>
              Notification #{notification.id} - {notification.created_at}
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Tracker;
