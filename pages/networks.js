import { useQuery } from "@apollo/client";
import { Networks } from "../components/templates";
import { GET_NETWORKS } from "../data/queries";

const NetworksPage = () => {
  const { data, loading, error } = useQuery(GET_NETWORKS);

  return <Networks data={data} loading={loading} error={error} />;
};

export default NetworksPage;
