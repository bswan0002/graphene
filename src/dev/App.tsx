import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./index.scss";

import { MuiBlock } from "./MuiBlock";
import { Typography } from "@mui/material";
import { Buttons } from "./Buttons";

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
      <Buttons />
    </>
  );
}
