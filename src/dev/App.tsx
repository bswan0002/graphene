import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./index.scss";

import { Button, Typography } from "@mui/material";
import { Button as CButton } from "@carbon/react";
import { MuiBlock } from "./MuiBlock";

export function App() {
  return (
    <>
      <MuiBlock sx={{ p: "16px 24px" }}>
        <Typography variant="h1">Graphene UI</Typography>
        <Typography>
          A thin layer of IBM's Carbon Design System on top of the Material UI
          component library
        </Typography>
      </MuiBlock>
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
            Lg Outlined Primary
          </Button>
          <Button size="medium" variant="outlined">
            Md Outlined Primary
          </Button>
          <Button size="small" variant="outlined">
            Sm Outlined Primary
          </Button>
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
            Lg Primary
          </CButton>
          <CButton size="md" kind="tertiary">
            Md Primary
          </CButton>
          <CButton size="sm" kind="tertiary">
            Sm Primary
          </CButton>
        </div>
      </div>
    </>
  );
}
