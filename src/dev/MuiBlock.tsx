import { Box, ScopedCssBaseline, SxProps, ThemeProvider } from "@mui/material";
import { theme } from "../lib/theme";

type Props = {
  sx?: SxProps;
  children: React.ReactNode;
};

export const MuiBlock = ({ sx, children }: Props) => {
  return (
    <>
      <ScopedCssBaseline />
      <Box sx={sx}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </>
  );
};
