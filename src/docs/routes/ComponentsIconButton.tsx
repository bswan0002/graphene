import { Page } from "../components/Page";
import { AutoLinkHeading } from "../components/AutoLinkHeading";
import { Box, IconButton, Typography } from "@mui/material";
import { Carbon, Copy } from "@carbon/icons-react";
import { Code } from "../components/Code";
import { Button } from "@carbon/react";
import { LinkTile } from "../components/LinkTile";
import { MuiIcon } from "../components/MuiIcon";

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
          title="Carbon"
          href="https://carbondesignsystem.com/components/button/usage/#icon-only-buttons"
          icon={<Carbon size={32} />}
        />
        <LinkTile
          title="MUI"
          href="https://mui.com/material-ui/react-button/#icon-button"
          icon={<MuiIcon sx={{ fontSize: "2rem" }} />}
        />
      </Box>
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
      <AutoLinkHeading variant="heading-06" containerSx={{ mb: "32px" }}>
        Code Example
      </AutoLinkHeading>
      <Code
        lang="tsx"
        sx={{ m: "0px 0px 32px -32px", maxWidth: "960px" }}
      >{`import { Box, IconButton } from "@mui/material";
import { Copy } from "@carbon/icons-react";
        
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
`}</Code>
      <AutoLinkHeading variant="heading-06" containerSx={{ mb: "32px" }}>
        Another Section
      </AutoLinkHeading>
      {Array.from({ length: 4 }).map((_, i) => (
        <Typography
          key={i}
          sx={{
            mb: "32px",
            display: "block",
            width: { xs: "100%", md: "67%" },
          }}
          variant="body-02"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisi eu tincidunt tincidunt, nunc nunc lacinia nunc, nec
          tincidunt nunc nunc eu nunc. Sed euismod, nunc eu tincidunt tincidunt,
          nu
        </Typography>
      ))}
    </Page>
  );
};
