import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./index.scss";

import React from "react";

import { MuiBlock } from "./MuiBlock";
import { Autocomplete, TextField, Typography } from "@mui/material";
import { Buttons } from "./Buttons";
import { useSearchParams } from "react-router-dom";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

const COMPONENTS: Array<{ name: string; component: React.ReactNode }> = [
  { name: "Button", component: <Buttons /> },
  { name: "Test", component: <div>TEST</div> },
];

export function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  const options = React.useMemo(() => COMPONENTS.map(({ name }) => name), []);
  const value = searchParams.get("component") ?? "";
  const setValue = (newValue: string) => {
    setSearchParams(
      (prev) => {
        prev.set("component", newValue);
        return prev;
      },
      { replace: true }
    );
  };
  const [inputValue, setInputValue] = React.useState("");

  useDocumentTitle(value);

  if (!options.find((o) => o === value)) {
    setValue(options[0]);
  }

  return (
    <>
      <MuiBlock sx={{ p: "16px 24px" }}>
        <Typography variant="h1">Graphene UI</Typography>
        <Typography>
          A thin layer of IBM's Carbon Design System on top of the Material UI
          component library
        </Typography>
        <Autocomplete
          value={value}
          onChange={(_event, newValue) => {
            if (newValue === null) return;
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(_event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={options}
          sx={{ width: 300, pt: "16px" }}
          renderInput={(params) => <TextField {...params} label="Component" />}
        />
      </MuiBlock>
      {COMPONENTS.find(({ name }) => name === value)?.component}
    </>
  );
}
