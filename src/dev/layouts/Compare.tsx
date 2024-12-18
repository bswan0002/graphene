import { Typography } from "@mui/material";

import { MuiBlock } from "../MuiBlock";

type Props = {
  intro: React.ReactNode;
  mui: React.ReactNode;
  carbon: React.ReactNode;
};

export const Compare = ({ intro, mui, carbon }: Props) => {
  return (
    <div style={{ padding: "16px 24px" }}>
      {intro}
      <div style={{ display: "flex", padding: "16px 0px" }}>
        <MuiBlock
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <Typography>MUI</Typography>
          {mui}
        </MuiBlock>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <p>Carbon</p>
          {carbon}
        </div>
      </div>
    </div>
  );
};
