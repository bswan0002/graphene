import { Page } from "../components/Page";
import { AutoLinkHeading } from "../components/AutoLinkHeading";
import { Typography } from "@mui/material";

/**
 * @path /components/tabs
 */
export const ComponentsTabs = () => {
  return (
    <Page title="Tabs">
      <AutoLinkHeading variant="heading-06" containerSx={{ mb: "32px" }}>
        Here is some text describing Tabs.
      </AutoLinkHeading>
      <Typography variant="body-02">
        {Array.from({ length: 1500 }).map(() => "Blah ")}
      </Typography>
    </Page>
  );
};
