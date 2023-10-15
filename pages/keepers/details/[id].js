import { useQuery, useMutation } from "@apollo/client";
import { KeeperDetails } from "../../../components/templates";
import { GET_KEEPER } from "../../../data/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";

const KeeperDetailsPage = () => {
  const router = useRouter();

  const { data, loading, error, startPolling } = useQuery(GET_KEEPER, {
    variables: { keeperId: router.query.id },
  });

  useEffect(() => {
    startPolling(2000);
  }, []);

  console.log(error, "hi");

  return <KeeperDetails data={data} loading={loading} error={error} />;
};

export default KeeperDetailsPage;
