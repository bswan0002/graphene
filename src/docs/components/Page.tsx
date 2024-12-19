import { Box, Typography } from "@mui/material";
import { gray80 } from "../../lib/colors";
import { layer01 } from "../../lib/tokens";

type Props = {
  children: React.ReactNode;
  title: string;
};

export const Page = ({ children, title }: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: layer01,
        minHeight: "calc(100dvh - 48px)" /* 48px is header height */,
      }}
    >
      <Box
        sx={{
          height: "280px",
          backgroundColor: "black",
          color: "white",
          alignContent: "flex-end",
          padding: "0px 32px 32px 64px",
          borderBottom: `1px solid ${gray80}`,
        }}
      >
        <Typography component="h1" variant="heading-07">
          {title}
        </Typography>
      </Box>
      {children}
    </Box>
  );
};
