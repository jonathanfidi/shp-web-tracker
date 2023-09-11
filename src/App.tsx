import { useQuery } from "react-query";
import "./App.css";
import axios from "axios";

const PRIVATE_KEY = "lnWvjqugGwUay3jKE8j31w";

function App() {
  const { data, isFetching, isError } = useQuery("order-UK1876YH08", () => {
    return axios.get(
      "https://api.shipup.co/v2/orders?order_number=UK1876YH08_2",
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
    <>
      <h1>Order #{order?.id}</h1>
      <div>{JSON.stringify(order)}</div>
    </>
  );
}

export default App;
