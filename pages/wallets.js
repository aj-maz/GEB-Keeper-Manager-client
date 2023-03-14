import { useQuery, useMutation } from "@apollo/client";
import { Wallets } from "../components/templates";
import { GET_WALLETS, GENERATE_NEW_WALLET } from "../data/queries";

const WalletsPage = () => {
  const { data, loading, error, refetch } = useQuery(GET_WALLETS);
  const [generateNewWallet] = useMutation(GENERATE_NEW_WALLET);

  return (
    <Wallets
      data={data}
      loading={loading}
      error={error}
      refetch={refetch}
      generateNewWallet={generateNewWallet}
    />
  );
};

export default WalletsPage;
