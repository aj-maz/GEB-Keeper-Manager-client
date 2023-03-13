/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PaddedContainer = ({ padding = 1, children }) => {
  return (
    <div
      css={css`
        padding: ${padding}em;
      `}
    >
      {children}
    </div>
  );
};

export default PaddedContainer;
