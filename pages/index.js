import { useQuery } from "@apollo/client";
import { Keepers } from "../components/templates";
import { GET_KEEPERS } from "../data/queries";
import { useEffect } from "react";

const HomePage = () => {
  const { data, loading, error, startPolling } = useQuery(GET_KEEPERS);

  console.log(data, loading, error);

  useEffect(() => {
    startPolling(500);
  }, []);

  return <Keepers data={data} loading={loading} error={error} />;
};

export default HomePage;
