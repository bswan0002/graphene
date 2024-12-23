import { Link } from "@carbon/icons-react";
import {
  styled,
  type SxProps,
  Typography,
  type TypographyProps,
} from "@mui/material";
import { useState } from "react";
import { useOnRender } from "../hooks/useOnRender";

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -60; // Adjust this value as needed
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y });
  }
};

type Props = TypographyProps & { children: string; containerSx?: SxProps };

export const AutoLinkHeading = ({
  children,
  sx,
  containerSx = {},
  ...props
}: Props) => {
  const [id] = useState(() => children.toLowerCase().replace(/\s+/g, "-"));

  useOnRender(() => {
    if (window.location.hash === `#${id}`) {
      setTimeout(() => scrollToElement(id), 0);
    }
  });

  return (
    <HeadingWrapper sx={containerSx}>
      <LinkIcon
        href={`#${id}`}
        color="primary"
        className="autolink-icon"
        aria-hidden="true"
      >
        <Link size={20} />
      </LinkIcon>
      <Typography {...props} sx={{ scrollMarginTop: "60px", ...sx }} id={id}>
        {children}
      </Typography>
    </HeadingWrapper>
  );
};

const HeadingWrapper = styled("div")({
  position: "relative",
  "&:hover .autolink-icon, &:focus-within .autolink-icon": {
    opacity: 1,
  },
});

const LinkIcon = styled("a")`
  position: absolute;
  left: -1.5em;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  "&:hover": {
    opacity: 1;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
