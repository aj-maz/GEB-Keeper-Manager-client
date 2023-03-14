import { useQuery, useMutation } from "@apollo/client";
import { AddKeeper } from "../../components/templates";
import { GET_WALLETS_PLUS_NETWORKS, START_KEEPER } from "../../data/queries";

const AddKeeperPage = () => {
  const { data, loading, error } = useQuery(GET_WALLETS_PLUS_NETWORKS);
  const [startKeeper] = useMutation(START_KEEPER);

  return (
    <AddKeeper
      data={data}
      loading={loading}
      error={error}
      startKeeper={startKeeper}
    />
  );
};

export default AddKeeperPage;
