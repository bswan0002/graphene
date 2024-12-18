import { Button, Typography } from "@mui/material";
import { Button as CButton } from "@carbon/react";
import { CarbonBlock } from "./CarbonBlock";
import { MuiBlock } from "./MuiBlock";

export const Buttons = () => {
  return (
    <>
      <a
        href="https://carbondesignsystem.com/components/button/usage/"
        target="_blank"
      >
        {"Carbon Design > Button"}
      </a>
      <div style={{ display: "flex", padding: "16px 24px", gap: "16px" }}>
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
          <Button size="large" variant="contained">
            Lg Primary
          </Button>
          <Button size="medium" variant="contained">
            Md Primary
          </Button>
          <Button size="small" variant="contained">
            Sm Primary
          </Button>
          <Button size="large" variant="outlined">
            Lg Outlined
          </Button>
          <Button size="medium" variant="outlined">
            Md Outlined
          </Button>
          <Button size="small" variant="outlined">
            Sm Outlined
          </Button>
        </MuiBlock>
        <CarbonBlock
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <CButton size="lg" kind="primary">
            Lg Primary
          </CButton>
          <CButton size="md" kind="primary">
            Md Primary
          </CButton>
          <CButton size="sm" kind="primary">
            Sm Primary
          </CButton>
          <CButton size="lg" kind="tertiary">
            Lg Tertiary
          </CButton>
          <CButton size="md" kind="tertiary">
            Md Tertiary
          </CButton>
          <CButton size="sm" kind="tertiary">
            Sm Tertiary
          </CButton>
        </CarbonBlock>
      </div>
    </>
  );
};
