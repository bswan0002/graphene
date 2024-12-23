import { Page } from "../components/Page";
import { AutoLinkHeading } from "../components/AutoLinkHeading";
import { Box, IconButton, Typography } from "@mui/material";
import { Carbon, Copy } from "@carbon/icons-react";
import { Button } from "@carbon/react";
import { LinkTile } from "../components/LinkTile";
import { MuiIcon } from "../components/MuiIcon";
import { IconButtonDemo } from "../demo/IconButtonDemo";

/**
 * @path /components/icon-button
 */
export const ComponentsIconButton = () => {
  return (
    <Page title="Icon Button">
      <AutoLinkHeading variant="heading-06" containerSx={{ mb: "24px" }}>
        Documentation
      </AutoLinkHeading>
      <Box
        sx={{
          display: "flex",
          gap: "4px",
          mb: "64px",
          flexWrap: "wrap",
          ml: "-16px",
        }}
      >
        <LinkTile
          title="MUI"
          href="https://mui.com/material-ui/react-button/#icon-button"
          icon={<MuiIcon sx={{ fontSize: "2rem" }} />}
        />
        <LinkTile
          title="Carbon"
          href="https://carbondesignsystem.com/components/button/usage/#icon-only-buttons"
          icon={<Carbon size={32} />}
        />
      </Box>
      <AutoLinkHeading
        variant="heading-06"
        component="h2"
        containerSx={{ mb: "24px" }}
      >
        Live Demo
      </AutoLinkHeading>
      <IconButtonDemo />
      <Box mb="32px">
        <Typography component="p" mb="16px" variant="body-02">
          MUI IconButton
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            alignItems: "flex-start",
            mb: "16px",
          }}
        >
          <IconButton color="secondary" size="small">
            <Copy />
          </IconButton>
          <IconButton color="secondary" size="medium">
            <Copy />
          </IconButton>
          <IconButton color="secondary" size="large">
            <Copy />
          </IconButton>
        </Box>
        <Typography component="p" mb="16px" variant="body-02">
          Carbon Button + `renderIcon` and `hasIconOnly`
        </Typography>
        <Box sx={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
          <Button
            renderIcon={Copy}
            hasIconOnly
            iconDescription="Copy to Clipboard"
            size="sm"
            kind="secondary"
          />
          <Button
            renderIcon={Copy}
            hasIconOnly
            iconDescription="Copy to Clipboard"
            size="md"
            kind="secondary"
          />
          <Button
            renderIcon={Copy}
            hasIconOnly
            iconDescription="Copy to Clipboard"
            size="lg"
            kind="secondary"
          />
        </Box>
      </Box>
      <AutoLinkHeading
        variant="heading-06"
        component="h2"
        containerSx={{ mb: "24px" }}
      >
        Accessibility
      </AutoLinkHeading>
      <Typography
        sx={{
          mb: "32px",
          display: "block",
          width: { xs: "100%", md: "67%" },
        }}
        variant="body-02"
      >
        The `IconButton` component must either have an `aria-label` attribute or
        be wrapped in a `Tooltip` with `title` prop that describes its purpose
        in order to satisfy{" "}
        <a href="https://www.w3.org/TR/WCAG21/#non-text-content">
          WCAG 2.1 SC 1.1.1 Non-text Content
        </a>
        . See Carbon's{" "}
        <a href="https://carbondesignsystem.com/components/button/usage/#text-labels">
          {"Button Content > Text Labels"}
        </a>{" "}
        documentation for guidance on naming.
      </Typography>
    </Page>
  );
};
