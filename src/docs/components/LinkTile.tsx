import { Launch } from "@carbon/icons-react";
import { Box, Typography } from "@mui/material";
import { gray, grayHover } from "../../lib/colors";

type Props = { title: string; href: string; icon: React.ReactNode };

export const LinkTile = ({ title, href, icon }: Props) => {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        textDecoration: "none",
        color: "inherit",
        height: "184px",
        width: "376px",
        padding: "16px",
        background: "white",
        transition: "background 70ms",
        ":hover": {
          background: grayHover[10],
        },
        ":active": {
          background: gray[30],
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography>{title}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {icon}
          <Launch size={20} />
        </Box>
      </Box>
    </Box>
  );
};
