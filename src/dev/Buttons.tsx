import { Button } from "@mui/material";
import { Button as CButton } from "@carbon/react";

import { Compare } from "./layouts/Compare";

export const Buttons = () => {
  return (
    <Compare
      intro={
        <a
          href="https://carbondesignsystem.com/components/button/usage/"
          target="_blank"
        >
          {"Carbon Design > Button"}
        </a>
      }
      mui={
        <>
          <Button size="large" variant="contained">
            Lg Primary
          </Button>
          <Button size="medium" variant="contained">
            Md Primary
          </Button>
          <Button size="small" variant="contained">
            Sm Primary
          </Button>
          <Button size="small" variant="outlined">
            Sm Outlined
          </Button>
          <Button size="small" variant="contained" color="error">
            Sm Error
          </Button>
        </>
      }
      carbon={
        <>
          <CButton size="lg" kind="primary">
            Lg Primary
          </CButton>
          <CButton size="md" kind="primary">
            Md Primary
          </CButton>
          <CButton size="sm" kind="primary">
            Sm Primary
          </CButton>
          <CButton size="sm" kind="tertiary">
            Sm Tertiary
          </CButton>
          <CButton size="sm" kind="danger">
            Sm Danger
          </CButton>
        </>
      }
    />
  );
};
