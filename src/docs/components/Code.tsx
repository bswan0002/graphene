import { Box, IconButton, SxProps, Tooltip, Typography } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { gray, gray100, grayHover } from "../../lib/colors";
import { Copy } from "@carbon/icons-react";
import { useState } from "react";

type Props = {
  lang: "tsx" | "typescript";
  children: string;
  sx?: SxProps;
};

const copyToClipboard = async (text: string, onSuccess?: () => void) => {
  try {
    await navigator.clipboard.writeText(text);
    onSuccess?.();
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

export const Code = ({ lang, children, sx = {} }: Props) => {
  const [copied, setCopied] = useState(false);

  const onCloseTooltip = () => {
    if (!copied) return;
    // Timeout to avoid flash during close animation
    setTimeout(() => setCopied(false), 100);
  };

  return (
    <Box sx={sx}>
      <Box sx={{ position: "relative" }}>
        <Tooltip
          title={copied ? "Copied!" : "Copy to Clipboard"}
          onClose={onCloseTooltip}
        >
          <IconButton
            onClick={() => copyToClipboard(children, () => setCopied(true))}
            color="secondary"
            size="small"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              backgroundColor: gray[60],
              borderColor: gray[60],
              ":hover": {
                backgroundColor: grayHover[60],
              },
              ":active": {
                backgroundColor: gray[80],
              },
              ":focus": {
                borderColor: "white",
                boxShadow: `inset 0 0 0 1px white, inset 0 0 0 2px ${gray100}`,
              },
            }}
          >
            <Copy />
          </IconButton>
        </Tooltip>
        <SyntaxHighlighter
          language={lang}
          style={oneDark}
          CodeTag={Typography}
          // @ts-expect-error react-syntax-highlighter poor TS support
          codeTagProps={{ variant: "code-02" }}
          customStyle={{ background: gray100, borderRadius: 0 }}
        >
          {children}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};
