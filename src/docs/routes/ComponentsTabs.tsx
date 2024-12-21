import { Page } from "../components/Page";
import { AutoLinkHeading } from "../components/AutoLinkHeading";
import { Typography } from "@mui/material";
import { Code } from "../components/Code";

/**
 * @path /components/tabs
 */
export const ComponentsTabs = () => {
  return (
    <Page title="Tabs">
      <AutoLinkHeading variant="heading-06" containerSx={{ mb: "32px" }}>
        Here is some text describing Tabs.
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
      <AutoLinkHeading variant="heading-06" containerSx={{ mb: "32px" }}>
        Code Example
      </AutoLinkHeading>
      <Code
        lang="tsx"
        sx={{ m: "0px 0px 32px -32px", maxWidth: "960px" }}
      >{`import { Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { gray100 } from "../../lib/colors";

type Props = {
  lang: "tsx" | "typescript";
  children: string;
};

export const Code = ({ lang, children }: Props) => {
  return (
    <SyntaxHighlighter
      language={lang}
      style={atomDark}
      CodeTag={Typography}
      codeTagProps={{ variant: "code-02" }}
      customStyle={{ backgroundColor: gray100, borderRadius: 0 }}
    >
      {children}
    </SyntaxHighlighter>
  );
};
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
