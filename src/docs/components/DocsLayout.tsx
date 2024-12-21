import {
  Typography,
  TextField,
  Drawer,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Box,
} from "@mui/material";
import { Link, Outlet, useMatch, useMatches } from "react-router-dom";
import { ChevronDown } from "@carbon/icons-react";
import { Hexagon } from "react-feather";
import { background, borderSubtle01, textInverse } from "../../lib/tokens";
import { gray100, gray80 } from "../../lib/colors";
import { useState } from "react";
import { useOnRender } from "../hooks/useOnRender";

const DRAWER_WIDTH = 280;

const Toolbar = ({ children }: { children?: React.ReactNode }) => (
  <Box
    sx={{
      minHeight: "48px",
      display: "flex",
      justifyContent: "space-between",
      p: "0px 16px",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);

const NavItem = ({ to, text }: { to: string; text: string }) => {
  const match = useMatch(to);
  const isActive = match !== null;
  return (
    <ListItem
      component={Link}
      to={to}
      sx={{
        padding: "0px 16px 0px 32px",
        minHeight: "32px",
        transition: "background-color .11s",
        backgroundColor: isActive ? background.selected : background.white,
        ":hover": {
          backgroundColor: isActive ? background.selected : background.hover,
        },
        "::before": isActive
          ? {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              backgroundColor: "primary.main",
            }
          : undefined,
      }}
    >
      <Typography
        color={isActive ? "textPrimary" : "textSecondary"}
        variant={isActive ? "heading-compact-01" : "body-compact-01"}
      >
        {text}
      </Typography>
    </ListItem>
  );
};

const NavSection = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ to: string; text: string }>;
}) => {
  const [expanded, setExpanded] = useState(false);
  const matches = useMatches();

  const isMatch = matches.some((m) => items.find((i) => i.to === m.pathname));
  const isActive = isMatch && !expanded;

  useOnRender(() => {
    if (isMatch) {
      setExpanded(true);
    }
  });

  return (
    <Accordion
      expanded={expanded}
      onChange={(_e, isExpanded) => setExpanded(isExpanded)}
      sx={{ border: 0, "::before": { display: "none" } }}
      disableGutters
      elevation={0}
    >
      <AccordionSummary
        sx={{
          transition: "background-color .11s",
          backgroundColor: isActive ? background.selected : background.white,
          ":hover": {
            backgroundColor: isActive ? background.selected : background.hover,
          },
          "::before": isActive
            ? {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                bottom: 0,
                width: "3px",
                backgroundColor: "primary.main",
              }
            : undefined,
        }}
        expandIcon={<ChevronDown />}
      >
        <Typography
          variant="heading-compact-01"
          color={isMatch ? "textPrimary" : "textSecondary"}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <List>
          {items.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export const DocsLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="header"
        sx={{
          position: "fixed",
          width: "100%",
          top: 0,
          right: 0,
          left: "auto",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: gray100,
          borderBottom: `1px solid ${gray80}`,
          color: textInverse,
        }}
      >
        <Toolbar>
          <Typography
            variant="body-compact-02"
            component={Link}
            to="/"
            sx={{
              fontWeight: 600,
              color: "inherit",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <Hexagon />
            Graphene
          </Typography>
          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              bgcolor: gray80,
              height: "100%",
              ".MuiInputBase-root": { color: "white" },
            }}
          />
        </Toolbar>
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar /> {/* Spacer for AppBar */}
        <Box sx={{ overflow: "auto", pt: "16px" }}>
          <NavSection
            title="About Graphene"
            items={[
              { to: "/about/goals", text: "Goals" },
              { to: "/about/status", text: "Status" },
            ]}
          />
          <NavSection
            title="Getting Started"
            items={[
              { to: "/getting-started/quick-start", text: "Quick Start" },
              { to: "/getting-started/tutorial", text: "Tutorial" },
            ]}
          />
          <Divider sx={{ m: "8px 16px", borderColor: borderSubtle01 }} />
          <NavSection
            title="Migrating"
            items={[
              { to: "/migrating/guide", text: "Guide" },
              { to: "/migrating/faqs", text: "FAQs" },
            ]}
          />
          <Divider sx={{ m: "8px 16px", borderColor: borderSubtle01 }} />
          <NavSection
            title="Components"
            items={[
              { to: "/components/overview", text: "Overview" },
              { to: "/components/button", text: "Button" },
              { to: "/components/icon-button", text: "Icon Button" },
              { to: "/components/tabs", text: "Tabs" },
            ]}
          />
          <NavSection
            title="Patterns"
            items={[
              { to: "/patterns/overview", text: "Overview" },
              { to: "/patterns/common-actions", text: "Common Actions" },
            ]}
          />
        </Box>
      </Drawer>
      <Box component="main" sx={{ width: "100%", minHeight: "100dvh" }}>
        <Toolbar /> {/* Spacer for AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
};
