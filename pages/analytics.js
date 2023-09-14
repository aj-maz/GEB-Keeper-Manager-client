/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Analytics } from "../components/templates";
import RAI_SAFES from "../data/queries/RAI_SAFES";
import { useQuery } from "@apollo/client";

const AnalyticsPage = () => {
  const { data, loading, error } = useQuery(RAI_SAFES);

  return (
    <div>
      <Analytics data={data} loading={loading} error={error} />
    </div>
  );
};
export default AnalyticsPage;
