import { useQuery } from "@apollo/client";
import { Keepers } from "../../components/templates";
import { GET_KEEPERS } from "../../data/queries";

const KeepersPage = () => {
  const { data, loading, error } = useQuery(GET_KEEPERS);

  return <Keepers data={data} loading={loading} error={error} />;
};

export default KeepersPage;
