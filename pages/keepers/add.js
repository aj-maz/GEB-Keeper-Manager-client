import { useQuery, useMutation } from "@apollo/client";
import { AddKeeper } from "../../components/templates";
import {  START_KEEPER, GET_SYSTEMS } from "../../data/queries";

const AddKeeperPage = () => {
  console.log(GET_SYSTEMS)

  const { data, loading, error } = useQuery(GET_SYSTEMS);
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
