import { Copy } from "@carbon/icons-react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Box,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { Code } from "../components/Code";

export const IconButtonDemo = () => {
  const [title, setTitle] = useState("Copy to clipboard");
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [color, setColor] = useState<"primary" | "secondary" | "default">(
    "secondary"
  );

  return (
    <Box
      sx={{
        margin: "0px 0px 32px -16px",
        background: "white",
      }}
    >
      <Box
        sx={{
          p: "16px",
          display: "flex",
          gap: "8px",
        }}
      >
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Size</InputLabel>
          <Select
            value={size}
            label="Size"
            onChange={(e) => setSize(e.target.value as typeof size)}
          >
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
        </FormControl>
        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Color</InputLabel>
          <Select
            value={color}
            label="Color"
            onChange={(e) => setColor(e.target.value as typeof color)}
          >
            <MenuItem value="primary">Primary</MenuItem>
            <MenuItem value="secondary">Secondary</MenuItem>
            <MenuItem value="default">Default</MenuItem>
          </Select>
        </FormControl>
        <TextField
          size="small"
          label="Tooltip Text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100px",
        }}
      >
        <Tooltip title={title}>
          <IconButton size={size} color={color}>
            <Copy />
          </IconButton>
        </Tooltip>
      </Box>
      <Code lang="tsx">{`import { Copy } from "@carbon/icons-react";
import { IconButton, Tooltip } from "@mui/material";
      
<Tooltip title="${title}">
  <IconButton size="${size}" color="${color}">
    <Copy />
  </IconButton>
</Tooltip>`}</Code>
    </Box>
  );
};
