import { useQuery, useMutation } from "@apollo/client";
import { KeeperDetails } from "../../../components/templates";
import { GET_KEEPER } from "../../../data/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";

const KeeperDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    startPolling(500);
  }, []);

  const { data, loading, error, startPolling } = useQuery(GET_KEEPER, {
    variables: { keeperId: router.query.id },
  });

  console.log(data, error);

  return <KeeperDetails data={data} loading={loading} error={error} />;
};

export default KeeperDetailsPage;
