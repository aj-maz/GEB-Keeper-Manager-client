/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InfoRow } from "../../atoms";

const NetworksList = ({ network }) => {
  return (
    <div>
      {network.systems.length > 0 ? (
        network.systems.map((system) => (
          <div
            key={system.name}
            css={css`
              margin-top: 1em;
            `}
          >
            <InfoRow label="System Name" value={system.name} />
            <InfoRow label="Graph Endpoint" value={system.graph_endpoint} />
          </div>
        ))
      ) : (
        <div
          css={css`
            margin-top: 1em;
          `}
        >
          No system exists.
        </div>
      )}
    </div>
  );
};

export default NetworksList;
