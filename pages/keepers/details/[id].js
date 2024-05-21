import { useQuery, useMutation } from "@apollo/client";
import { KeeperDetails } from "../../../components/templates";
import { GET_KEEPER, GET_KEEPER_STATUS } from "../../../data/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";

const KeeperDetailsPage = () => {
  const router = useRouter();

  const { data, loading, error, startPolling } = useQuery(GET_KEEPER, {
    variables: { keeperId: router.query.id },
  });

  const keeperStatus = useQuery(GET_KEEPER_STATUS, {
    variables: { keeperId: router.query.id },
  });

  useEffect(() => {
    startPolling(2000);
    keeperStatus.startPolling(500);
  }, []);

  console.log(error, "hi", data);

  return (
    <KeeperDetails
      data={data}
      loading={loading}
      error={error}
      keeperStatus={keeperStatus}
    />
  );
};

export default KeeperDetailsPage;
