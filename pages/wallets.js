import { useQuery } from "@apollo/client";
import { Wallets } from "../components/templates";
import { GET_WALLETS } from "../data/queries";

const WalletsPage = () => {
  const { data, loading, error } = useQuery(GET_WALLETS);

  return <Wallets data={data} loading={loading} error={error} />;
};

export default WalletsPage;
