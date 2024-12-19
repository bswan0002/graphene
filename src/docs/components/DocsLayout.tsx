import {
  Typography,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Box,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { ChevronDown } from "@carbon/icons-react";
import { Hexagon } from "react-feather";
import { borderSubtle00, textInverse } from "../../lib/tokens";
import { gray100, gray80 } from "../../lib/colors";

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

const NavItem = ({ to, text }: { to: string; text: string }) => (
  <ListItem
    component={Link}
    to={to}
    sx={{ pl: 4, color: "inherit", textDecoration: "none" }}
  >
    <ListItemText primary={text} />
  </ListItem>
);

const NavSection = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ to: string; text: string }>;
}) => (
  <Accordion
    sx={{ border: 0, "::before": { display: "none" } }}
    disableGutters
    elevation={0}
  >
    <AccordionSummary expandIcon={<ChevronDown />}>
      <Typography variant="heading-compact-01" color="textSecondary">
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
              { to: "/goals", text: "Goals" },
              { to: "/status", text: "Status" },
            ]}
          />
          <NavSection
            title="Getting Started"
            items={[
              { to: "/quick-start", text: "Quick Start" },
              { to: "/tutorial", text: "Tutorial" },
            ]}
          />
          <Divider sx={{ m: "8px 16px", backgroundColor: borderSubtle00 }} />
          <NavSection
            title="Migrating"
            items={[
              { to: "/guide", text: "Guide" },
              { to: "/faqs", text: "FAQs" },
            ]}
          />
          <Divider sx={{ m: "8px 16px", backgroundColor: borderSubtle00 }} />
          <NavSection
            title="Components"
            items={[
              { to: "/components/overview", text: "Overview" },
              { to: "/components/button", text: "Button" },
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