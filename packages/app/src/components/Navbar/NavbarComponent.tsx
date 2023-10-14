import {
  AppBar,
  Container,
  Icon,
  IconButton,
  Theme,
  ThemeProvider,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { createContext } from "react";
import { darkTheme } from "../../themes/darkTheme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { lightTheme } from "../../themes/lightTheme";

const themeContext = createContext<Theme>(darkTheme);

export const NavbarComponent = () => {
  const isSystemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<"light" | "dark">(
    isSystemDarkMode ? "dark" : "light",
  );

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <AppBar variant="elevation" position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component={"a"}
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              VIDEO MERGE TOOL
            </Typography>
            <IconButton
              onClick={() => {
                mode === "light" ? setMode("dark") : setMode("light");
              }}
              children={
                mode === "light" ? (
                  <DarkMode color="secondary" />
                ) : (
                  <LightMode color="secondary" />
                )
              }
            />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
