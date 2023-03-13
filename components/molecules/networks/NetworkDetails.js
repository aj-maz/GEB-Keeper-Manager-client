import { PaddedContainer, InfoRow } from "../../atoms";

const NetworkDetails = ({ network }) => {
  return (
    <PaddedContainer>
      <InfoRow label="Chain ID" value={network.id} />
      <InfoRow label="Network Name" value={network.name} />
      <InfoRow label="RPC URI" value={network.rpc_uri} />
    </PaddedContainer>
  );
};

export default NetworkDetails;
