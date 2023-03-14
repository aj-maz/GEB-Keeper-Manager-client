import { useQuery, useMutation } from "@apollo/client";
import { KeeperDetails } from "../../../components/templates";
import { GET_KEEPER } from "../../../data/queries";
import { useRouter } from "next/router";

const KeeperDetailsPage = () => {
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_KEEPER, {
    variables: { keeperId: router.query.id },
  });

  return <KeeperDetails data={data} loading={loading} error={error} />;
};

export default KeeperDetailsPage;
